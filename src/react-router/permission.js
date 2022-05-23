const PermissionRoute = {
    DASHBOARD: {
        path: "/dashboard",
        title: "Dashboard",
    },

    CLOTHING_MAN: {
        path: "/clothing-man",
        title: "Clothing Man",
    },

    CLOTHING_WOMAN: {
        path: "/clothing-woman",
        title: "Clothing Woman",
    },

    NOT_FOUND: {
        path: "/404",
        title: "Not Found"
    }
}

const AllRoute = Object.values(PermissionRoute).map(item => item.path)

export {
    PermissionRoute,
    AllRoute
}