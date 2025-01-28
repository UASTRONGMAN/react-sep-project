import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser.ts";
import {getUsers} from "../services/api.services.ts";
import {AxiosError} from "axios";

type userSliceType = {
    users: IUser[]
}

const initialState: userSliceType = {users: []}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await getUsers();
            return thunkAPI.fulfillWithValue(users)
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
            state.users = action.payload
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
