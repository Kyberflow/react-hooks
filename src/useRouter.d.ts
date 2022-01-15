import { History, LocationState } from 'history';
export declare const ROUTES: {
    SIGN_IN: string;
    SIGN_UP: string;
    SIGN_UP_CONFIRM: string;
    FORGOT_PASSWORD: string;
    FORGOT_PASSWORD_CONFIRM: string;
    NOTEBOOKS: string;
    NOTEBOOK: string;
    VIDEO: string;
    EMBEDDED_VIDEO: string;
    GOOGLE_OAUTH: string;
    PRIVATE_BETA: string;
    GET_STARTED: string;
    PUBLIC: string;
    INVITATION: string;
    UNSUBSCRIBE: string;
    PUBLIC_NOTEBOOK: string;
    PUBLIC_VIDEO: string;
    ZOOM_CALLBACK: string;
    ADMIN_WHITELISTED_DOMAINS: string;
    ADMIN_USERS: string;
    ADMIN_NOTES_ACTIVITY: string;
    EMBED_AUTH_BUTTON: string;
};
declare type TRoute = typeof ROUTES[keyof typeof ROUTES];
declare type TParams = {
    [key: string]: string | undefined;
};
interface IRouteInfo {
    route: TRoute;
    params?: TParams;
    queryParams?: TParams;
    state?: LocationState;
}
declare type UseRouter = {
    push: (routeInfo: IRouteInfo) => void;
    generateRoute: (routeInfo: IRouteInfo) => string;
};
declare const useRouter: () => Omit<History, 'push'> & UseRouter;
export default useRouter;
export { IRouteInfo };
