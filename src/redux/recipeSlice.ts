import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IRecipe} from "../models/IRecipe.ts";
import {getRecipes} from "../services/api.services.ts";

type recipeSliceType = {
    recipes: IRecipe[]
}

const initialState: recipeSliceType = {recipes: []}

const loadRecipes = createAsyncThunk(
    'recipeSlice/loadRecipes',
    async (_, thunkAPI) => {
        try {
            const recipes = await getRecipes();
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
            state.recipes = action.payload
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
