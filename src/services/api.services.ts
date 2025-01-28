import axios from 'axios'
import {baseURL, urls} from "../constants/urls.ts";
import {ILoginResponseModel} from "../models/ILoginResponseModel.ts";
import {ILoginDataModel} from "../models/ILoginDataModel.ts";
import {IResponseModel} from "../models/IResponseModel.ts";
import {retriveLocalStorage} from "../helpers/api.helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";
import {IUser} from "../models/IUser.ts";
import {IRecipe} from "../models/IRecipe.ts";


const axiosInstance = axios.create({
    baseURL,
    headers: {}
});


axiosInstance.interceptors.request.use(request => {
    if (request.method?.toUpperCase() === 'GET') {
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<ILoginResponseModel>('user').accessToken
    }
    return request
})


const login = async (loginData:ILoginDataModel):Promise<ILoginResponseModel> => {
    const {data} = await axiosInstance.post<ILoginResponseModel>(urls.auth, loginData);
    localStorage.setItem('user', JSON.stringify(data))
    return data
}


const getUsers = async ():Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IResponseModel>(urls.users);
    if (data.users) return data.users
    return []
}

const getRecipes = async ():Promise<IRecipe[]> => {
    const {data} = await axiosInstance.get<IResponseModel>(urls.recipes);
    if (data.recipes) return data.recipes
    return []
}

const refresh = async () => {
    const userWithTokens = retriveLocalStorage<ILoginResponseModel>('user');
    const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>(urls.refresh, {refreshToken: userWithTokens.refreshToken, expiresInMins:1});
    userWithTokens.accessToken = accessToken
    userWithTokens.refreshToken = refreshToken
    localStorage.setItem('user', JSON.stringify(userWithTokens))
}

export {
    login,
    getUsers,
    getRecipes,
    refresh
}


