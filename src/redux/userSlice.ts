import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "../services/api.services.ts";
import {AxiosError} from "axios";
import {IResponseModel} from "../models/IResponseModel.ts";

type userSliceType = {
    response: IResponseModel
}

const initialState: userSliceType = {response: {
        users:[],
        total: 0,
        skip: 0,
        limit: 0
    }}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (skip:string, thunkAPI) => {
        try {
            const data = await getUsers(skip);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)

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
})

const userSliceActions = {...userSlice.actions, loadUsers}

export {
    userSliceActions,
    loadUsers
}
