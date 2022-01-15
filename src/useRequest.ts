import { useState } from 'react';
import useRouter, { ROUTES } from './useRouter';

export const STORAGE_NAME = {
  NOTEBOOKS_WITH_VIDEOS: 'NOTEBOOKS_WITH_VIDEOS',
  NOTEBOOK: 'NOTEBOOK',
  VIDEOS: 'VIDEOS',
  VIDEO: 'VIDEO',
  NOTES: 'NOTES',
};

type Request<T> = (...args: any[]) => Promise<T>

type Callbacks<T> = {
  onStart?: () => void;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  onComplete?: () => void;
}

type UseRequest = <T>(
  request: Request<T>,
  params?: {
    callbacks?: Callbacks<T>,
    storageName?: string,
  },
) => {
  loading: boolean;
  success: boolean;
  fail: boolean;
  finished: boolean;
  data: T | null;
  error: Error | null;
  fetch: (...args: any[]) => Promise<void>;
  backgroundFetch: (...args: any[]) => Promise<void>;
  offlineFetch: (...args: any[]) => Promise<void>;
  update: (data: T) => void;
}

interface RequestError extends Error {
  response: {
    status: number;
  };
}

const useRequest: UseRequest = <T>(
  request: Request<T>,
  params?: {
    callbacks?: Callbacks<T>,
    storageName?: string,
  },
) => {
  const router = useRouter();

  const [state, setState] = useState<{
    loading: boolean
    success: boolean
    fail: boolean
    finished: boolean
    data: T | null
    error: Error | null
  }>({
    loading: false,
    success: false,
    fail: false,
    finished: false,
    data: null,
    error: null,
  });

  const fetch = async (isBackground: boolean, ...args: any[]) => {
    try {
      params?.callbacks?.onStart?.();

      setState((prev) => ({
        ...prev,
        success: false,
        fail: false,
        error: null,
        finished: false,
        loading: true,
        ...(!isBackground ? { data: null } : {}),
      }));

      const response = await request(...args);

      params?.callbacks?.onSuccess?.(response);

      if (params?.storageName) {
        localStorage.setItem(`OFFLINE_${params?.storageName}`, JSON.stringify(response));
      }

      setState((prev) => ({
        ...prev,
        loading: false,
        success: true,
        data: response,
      }));
    } catch (error) {
      const requestError = error as RequestError;

      if (requestError?.response?.status === 401) {
        router.push({ route: ROUTES.SIGN_IN });
      }

      params?.callbacks?.onError?.(requestError);

      setState((prev) => ({
        ...prev,
        loading: false,
        fail: true,
        error: requestError,
      }));
    } finally {
      params?.callbacks?.onComplete?.();
      setState((prevState) => ({
        ...prevState,
        finished: (prevState.success || prevState.fail)
      }));
    }
  };

  const commonFetch = (...args: any[]) => fetch(false, ...args);

  const backgroundFetch = (...args: any[]) => fetch(true, ...args);

  const offlineFetch = (...args: any[]) => {
    const data = localStorage.getItem(`OFFLINE_${params?.storageName}`);

    if (data) {
      params?.callbacks?.onSuccess?.(JSON.parse(data));
    }

    setState((prevState) => ({ ...prevState, data: data ? JSON.parse(data) : null }));

    return fetch(true, ...args);
  };

  const update = (data: T) => {
    if (params?.storageName) {
      localStorage.setItem(`OFFLINE_${params?.storageName}`, JSON.stringify(data));
    }

    setState({ ...state, data });
  };

  return {
    ...state,
    fetch: commonFetch,
    backgroundFetch,
    offlineFetch,
    update,
  };
};

export default useRequest;
