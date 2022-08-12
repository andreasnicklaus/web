import {router} from "@/router"

export function handleBackendError(error) {
    const statusCode = error.response.status

    console.log("The backend responded with error code " + statusCode)

    switch (statusCode) {
        // case 404:
        //     next("/404");
        //     break;
        case 401:
            next('/login');
            break;
        default:
            next('/error')
    }
}

function next(path) {
    if (router.currentRoute.path !== path) {
        router.push({path: path})
      }
}