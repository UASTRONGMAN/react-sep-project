import {useAppSelector} from "../helpers/useAppSelector.ts";
import {useAppDispatch} from "../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {recipeSliceActions} from "../redux/recipeSlice.ts";
import RecipesList from "../components/recipes-list/RecipesList.tsx";


const RecipesPage = () => {
    const {recipes} = useAppSelector(value => value.recipeSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(recipeSliceActions.loadRecipes())
    }, []);
    return (
        <div>
            <RecipesList recipes={recipes}/>
        </div>
    );
};

export default RecipesPage;