import {Link} from "react-router-dom";
import {useAppSelector} from "../../helpers/useAppSelector.ts";


const Header = () => {
    const {authResponse} = useAppSelector(value => value.userSlice);

    return (
        <div>
            <Link to={'/login'}>Login page</Link> <br/>
            <Link to={'/auth/users'}>Users</Link> <br/>
            <Link to={'/auth/recipes'}>Recipes</Link>
                {authResponse && <img src={authResponse.image} alt="logo of user"/>}

        </div>
    );
};

export default Header;