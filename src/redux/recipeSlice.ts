import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {getRecipes} from "../services/api.services.ts";
import {IResponseModel} from "../models/IResponseModel.ts";

type recipeSliceType = {
    response: IResponseModel
}

const initialState: recipeSliceType = {response: {
        users:[],
        total: 0,
        skip: 0,
        limit: 0
    }}

const loadRecipes = createAsyncThunk(
    'recipeSlice/loadRecipes',
    async (skip:string, thunkAPI) => {
        try {
            const recipes = await getRecipes(skip);
            return thunkAPI.fulfillWithValue(recipes)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadRecipes.fulfilled, (state, action) => {
            state.response = action.payload
        })
        .addCase(loadRecipes.rejected, (state, action) => {
            console.log(state)
            console.log(action)
        })
})

const recipeSliceActions = {...recipeSlice.actions, loadRecipes}

export {
    recipeSliceActions,
    loadRecipes
}
