import {useAppSelector} from "../../helpers/useAppSelector.ts";
import {useAppDispatch} from "../../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/userSlice.ts";
import {useParams} from "react-router-dom";
import User from "./user/User.tsx";
import {recipeSliceActions} from "../../redux/recipeSlice.ts";


const SingleUser = () => {
    const {id} = useParams();
    console.log(id)
    const {singleUser} = useAppSelector(value => value.userSlice);
    const {response} = useAppSelector(value => value.recipeSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id)  {dispatch(userSliceActions.loadSingleUser(id))}

        dispatch(recipeSliceActions.loadRecipes('0'))
    }, [id]);

    const res = response.recipes.filter(value => value.userId === +id)
    return (
        <div>
            {/*{singleUser && <User user={singleUser} recipes={response.recipes || []}/>}*/}
            {/*{response.recipes.filter((value) => value.userId = id)}*/}
            {response.recipes && response.recipes.filter(value => value.userId === +id)}
        </div>
    );
};

export default SingleUser;