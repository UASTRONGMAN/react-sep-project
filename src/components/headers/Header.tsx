import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch} from "../../helpers/useAppDispatch.ts";
import {useAppSelector} from "../../helpers/useAppSelector.ts";
import {userSliceActions} from "../../redux/userSlice.ts";


const Header = () => {
    const {currentUser} = useAppSelector(value => value.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.getCurrentUser)
    }, []);

    console.log(currentUser)
    console.log(currentUser && currentUser.image)
    return (
        <div>
            <Link to={'/login'}>Login page</Link> <br/>
            <Link to={'/auth/users'}>Users</Link> <br/>
            <Link to={'/auth/recipes'}>Recipes</Link>
            {currentUser && <img src={currentUser.image} alt="logo of user"/>}

        </div>
    );
};

export default Header;