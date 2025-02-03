import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {getSingleUser, getUsers, login} from "../../services/api.services.ts";
import {AxiosError} from "axios";
import {IResponseModel} from "../../models/IResponseModel.ts";
import {IUser} from "../../models/IUser.ts";
import {ILoginDataModel} from "../../models/ILoginDataModel.ts";
import {ILoginResponseModel} from "../../models/ILoginResponseModel.ts";

type userSliceType = {
    response: IResponseModel,
    singleUser: IUser | null,
    authResponse:ILoginResponseModel | null,
    loadState: boolean,
    error: boolean
}

const initialState: userSliceType = {response: {
        users:[],
        total: 0,
        skip: 0,
        limit: 0
    },
    singleUser: null,
    authResponse: null,
    loadState: false,
    error: false
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (skip:string, thunkAPI) => {
        try {
            const data = await getUsers(skip);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const loadSingleUser = createAsyncThunk(
    'userSlice/loadSingleUser',
    async (id:string, thunkAPI) => {
        try {
            const data = await getSingleUser(id);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const userAuth = createAsyncThunk(
    'userSlice/UserAuth',
    async (loginData:ILoginDataModel, thunkAPI) => {
        try {
            const data = await login(loginData);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        changeLoadState: (state, action:PayloadAction<boolean>) => {
            state.loadState = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action) => {
            state.response = action.payload
        })
        .addCase(loadUsers.rejected, (state, action) => {
            console.log(state)
            console.log(action)
        })
        .addCase(loadSingleUser.fulfilled, (state, action) => {
            state.singleUser = action.payload
        })
        .addCase(userAuth.fulfilled, (state, action) => {
            state.authResponse = action.payload
        })
        .addMatcher(isFulfilled(loadUsers, loadSingleUser), (state) => {
            state.loadState = true
        })
        .addMatcher(isRejected(loadUsers, loadSingleUser, userAuth), state => {
            state.error = true
        })
})

const userSliceActions = {...userSlice.actions, loadUsers, loadSingleUser, userAuth}

export {
    userSliceActions,
    loadUsers,
    loadSingleUser,
    userAuth
}
