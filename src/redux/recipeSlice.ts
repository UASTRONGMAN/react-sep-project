import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {getRecipes, getSingleRecipe} from "../services/api.services.ts";
import {IResponseModel} from "../models/IResponseModel.ts";
import {IRecipe} from "../models/IRecipe.ts";

type recipeSliceType = {
    response: IResponseModel,
    recipe: IRecipe | null
}

const initialState: recipeSliceType = {response: {
        users:[],
        total: 0,
        skip: 0,
        limit: 0
    },
    recipe: null
}

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

const loadSingleRecipe = createAsyncThunk(
    'recipeSlice/loadSingleRecipe',
    async (id:string, thunkAPI) => {
        try {
            const recipe = await getSingleRecipe(id);
            return thunkAPI.fulfillWithValue(recipe)
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
        .addCase(loadSingleRecipe.fulfilled, (state, action) => {
            state.recipe = action.payload
        })
})

const recipeSliceActions = {...recipeSlice.actions, loadRecipes, loadSingleRecipe}

export {
    recipeSliceActions,
    loadRecipes,
    loadSingleRecipe
}
