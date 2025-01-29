const baseURL = 'https://dummyjson.com/auth'

const urls = {
    auth: '/login',
    refresh: '/refresh',
    users: (skip: string) => baseURL + '/users?skip=' + skip,
    user: (id:string) => baseURL + '/users/' + id,
    me: '/me',
    recipes: (skip: string) => baseURL + '/recipes?skip=' + skip

}

export {baseURL, urls}

