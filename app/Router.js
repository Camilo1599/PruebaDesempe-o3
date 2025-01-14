import { routes } from './routes'

export function Router() {
    const path = window.location.pathname;

    if (path === '/login' || path === '/') {
        if (localStorage.getItem('token')) {
            naviagateTo('/Home')
            return;
        }
    }

    if (path === '/') {
        if (!localStorage.getItem('token')) {
            navigateTo('/login')
            return;
        }
    }

    const publicRoute = routes.public.find(route => route.path === path);
    const privateRoute = routes.private.find(route => route.path === path);

    if (publicRoute) {
        publicRoute.scene();
        return;
    }

}

export function navigateTo(path) {
    window.history.pushState({}, '', window.location.origin + path);
    Router();
}