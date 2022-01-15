declare type Request<T> = (...args: any[]) => Promise<{
    items: T[];
    total: number;
}>;
declare type Callbacks<T, K> = {
    onStart?: () => void;
    onSuccess?: (data: {
        items: T[];
        total: number;
        extraData: K;
    }) => void;
    onError?: (error: Error) => void;
    onComplete?: () => void;
};
declare type UseRequestWithPagination = <T, K = undefined>(request: Request<T>, params?: {
    callbacks?: Callbacks<T, K>;
    storageName?: string;
}) => {
    loading: boolean;
    success: boolean;
    fail: boolean;
    finished: boolean;
    data: T[];
    extraData: K | null;
    total: number;
    isCompleted: boolean;
    error: Error | null;
    fetch: (...args: any[]) => Promise<void>;
    extraFetch: (...args: any[]) => Promise<void> | undefined;
    offlineFetch: (...args: any[]) => Promise<void>;
    update: (data: T[]) => void;
};
declare const useRequestWithPagination: UseRequestWithPagination;
export default useRequestWithPagination;
