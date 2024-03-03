import {ScreensPage, AppsPage, HomePage, HistoryPage, ProfilePage} from './../pages'

export default [
    {
        path: '/screens',
        element:<ScreensPage/>
    },
    {
        path: '/apps',
        element:<AppsPage/>
    },
    {
        path: '/',
        element:<HomePage/>
    },
    {
        path: '/history',
        element:<HistoryPage/>
    },
    {
        path: '/profile',
        element:<ProfilePage/>
    },

]