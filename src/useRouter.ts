import { useHistory } from 'react-router-dom';
import { History, LocationState } from 'history';

export const ROUTES = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  SIGN_UP_CONFIRM: '/sign-up-confirm',
  FORGOT_PASSWORD: '/forgot-password',
  FORGOT_PASSWORD_CONFIRM: '/forgot-password-confirm',
  NOTEBOOKS: '/notebooks',
  NOTEBOOK: '/notebooks/:notebookId',
  VIDEO: '/notebooks/:notebookId/video/:videoId',
  EMBEDDED_VIDEO: '/notebooks/:notebookId/video/:videoId/embedded',
  GOOGLE_OAUTH: '/oauthGdriveRedirect',
  PRIVATE_BETA: '/private-beta',
  GET_STARTED: '/get-started',
  PUBLIC: '/public',
  INVITATION: '/public/invitation',
  UNSUBSCRIBE: '/public/unsubscribe',
  PUBLIC_NOTEBOOK: '/public/notebooks/:notebookId',
  PUBLIC_VIDEO: '/public/notebooks/:notebookId/video/:videoId',
  ZOOM_CALLBACK: '/zoom-callback',
  ADMIN_WHITELISTED_DOMAINS: '/whitelisted-domains',
  ADMIN_USERS: '/users',
  ADMIN_NOTES_ACTIVITY: '/notes-activity',
  EMBED_AUTH_BUTTON: '/embed/auth-button',
};

type TRoute = typeof ROUTES[keyof typeof ROUTES]

type TParams = { [key: string]: string | undefined };

interface IRouteInfo {
  route: TRoute;
  params?: TParams;
  queryParams?: TParams;
  state?: LocationState;
}

type UseRouter = {
  push: (routeInfo: IRouteInfo) => void
  generateRoute: (routeInfo: IRouteInfo) => string
}

const generateRouteWithParams = (
  route: TRoute,
  params: TParams,
) => {
  Object.entries(params).forEach(([key, value]) => {
    if (!value) return;

    route = route.replace(`:${key}`, value);
  });

  return route;
};

const generateRouteWithQueryParams = (
  route: TRoute,
  queryParams: TParams,
) => {
  route = route.concat('?');

  Object.entries(queryParams).forEach(([key, value], i) => {
    if (!value) return;

    route = route.concat(`${i !== 0 ? '&' : ''}${key}=${value}`);
  });

  return route;
};

const useRouter = (): Omit<History, 'push'> & UseRouter => {
  const history = useHistory();

  const push = ({ route, params, queryParams, state }: IRouteInfo) => {
    history.push(generateRoute({ route, params, queryParams }), state);
  };

  const generateRoute = ({ route, params, queryParams }: IRouteInfo) => {
    if (params) {
      route = generateRouteWithParams(route, params);
    }

    if (queryParams) {
      route = generateRouteWithQueryParams(route, queryParams);
    }

    return route;
  };

  return { ...history, push, generateRoute };
};

export default useRouter;

export { IRouteInfo };
