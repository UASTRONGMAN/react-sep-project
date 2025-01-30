import {useAppSelector} from "../helpers/useAppSelector.ts";
import {useAppDispatch} from "../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {recipeSliceActions} from "../redux/slices/recipeSlice.ts";
import RecipesList from "../components/recipes-list/RecipesList.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";


const RecipesPage = () => {
    const [query] = useSearchParams();
    const skip = query.get('skip');
    const {response, loadState} = useAppSelector(value => value.recipeSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(recipeSliceActions.loadRecipes(skip || '0'))
    }, [skip]);
    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {response.recipes && <RecipesList recipes={response.recipes}/>}
            <Pagination props={response}/>
        </div>
    );
};

export default RecipesPage;