export declare const STORAGE_NAME: {
    NOTEBOOKS_WITH_VIDEOS: string;
    NOTEBOOK: string;
    VIDEOS: string;
    VIDEO: string;
    NOTES: string;
};
declare type Request<T> = (...args: any[]) => Promise<T>;
declare type Callbacks<T> = {
    onStart?: () => void;
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
    onComplete?: () => void;
};
declare type UseRequest = <T>(request: Request<T>, params?: {
    callbacks?: Callbacks<T>;
    storageName?: string;
}) => {
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
};
declare const useRequest: UseRequest;
export default useRequest;
