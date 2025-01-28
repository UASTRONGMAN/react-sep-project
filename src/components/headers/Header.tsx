import {Link} from "react-router-dom";
import {useAppSelector} from "../../helpers/useAppSelector.ts";
import {useAppDispatch} from "../../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/userSlice.ts";


const Header = () => {
    const {users} = useAppSelector(value => value.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            <Link to={'/login'}>Login page</Link> <br/>
            <Link to={'/auth/users'}>Users</Link> <br/>
            <Link to={'/auth/recipes'}>Recipes</Link>
            {users.map(user => {return <img src={user.image} alt="logo of user" key={user.id}/>})}

        </div>
    );
};

export default Header;