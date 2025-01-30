import {useParams} from "react-router-dom";
import {useAppSelector} from "../../helpers/useAppSelector.ts";
import {useAppDispatch} from "../../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {recipeSliceActions} from "../../redux/slices/recipeSlice.ts";
import Recipe from "./recipe/Recipe.tsx";


const SingleRecipe = () => {
    const {id} = useParams();

    const {recipe} = useAppSelector(state => state.recipeSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(recipeSliceActions.loadSingleRecipe(id))
    }, [id]);

    return (
        <div>
            {recipe && <Recipe recipe={recipe}/>}
        </div>
    );
};

export default SingleRecipe;