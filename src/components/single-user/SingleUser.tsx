import {useAppSelector} from "../../helpers/useAppSelector.ts";
import {useAppDispatch} from "../../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import {useParams} from "react-router-dom";
import User from "./user/User.tsx";
import {recipeSliceActions} from "../../redux/slices/recipeSlice.ts";


const SingleUser = () => {
    const {id} = useParams();
    const {singleUser} = useAppSelector(value => value.userSlice);
    const {response} = useAppSelector(value => value.recipeSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id)  {dispatch(userSliceActions.loadSingleUser(id))}

        dispatch(recipeSliceActions.loadRecipes('0'))
    }, [id]);
    return (
        <div>
            {singleUser && <User user={singleUser} recipes={id ? response.recipes?.filter(val => val.userId === +id) ?? [] : []}/>}

        </div>
    );
};

export default SingleUser;