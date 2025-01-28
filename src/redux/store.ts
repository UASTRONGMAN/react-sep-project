import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./userSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        // recipeSlice: null
    }
});