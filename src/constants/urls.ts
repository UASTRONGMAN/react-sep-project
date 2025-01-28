const baseURL = 'https://dummyjson.com/auth'

const urls = {
    auth: '/login',
    refresh: '/refresh',
    users: (skip: string) => baseURL + '/users?skip=' + skip,
    me: '/me',
    recipes: '/recipes'

}

export {baseURL, urls}

