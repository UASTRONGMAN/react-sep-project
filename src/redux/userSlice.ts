import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCurrentAuthUser, getSingleUser, getUsers} from "../services/api.services.ts";
import {AxiosError} from "axios";
import {IResponseModel} from "../models/IResponseModel.ts";
import {IUser} from "../models/IUser.ts";

type userSliceType = {
    response: IResponseModel,
    currentUser: IUser | null,
    singleUser: IUser | null
}

const initialState: userSliceType = {response: {
        users:[],
        total: 0,
        skip: 0,
        limit: 0
    },
    currentUser: null,
    singleUser: null
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (skip:string, thunkAPI) => {
        try {
            const data = await getUsers(skip);
            console.log(data)
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const getCurrentUser = createAsyncThunk(
    'userSlice/getCurrentUser',
    async (_, thunkAPI) => {
        try {
            const data = await getCurrentAuthUser();
            console.log(data)
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
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
            return thunkAPI.rejectWithValue(error)
        }
    }
)


// const refresh = createAsyncThunk(
//     'userSlice/refresh',
//     async () => {
//         await
//     }
// )

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action) => {
            state.response = action.payload
        })
        .addCase(loadUsers.rejected, (state, action) => {
            console.log(state)
            console.log(action)
        })
        .addCase(getCurrentUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
        .addCase(loadSingleUser.fulfilled, (state, action) => {
            state.singleUser = action.payload
        })
})

const userSliceActions = {...userSlice.actions, loadUsers, getCurrentUser, loadSingleUser}

export {
    userSliceActions,
    loadUsers,
    getCurrentUser,
    loadSingleUser
}
