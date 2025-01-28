import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./userSlice.ts";
import {recipeSlice} from "./recipeSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        recipeSlice: recipeSlice.reducer
    }
});