import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Link to={'/login'}>Login page</Link> <br/>
            <Link to={'/auth/users'}>Users</Link> <br/>
            <Link to={'/auth/recipes'}>Recipes</Link>

        </div>
    );
};

export default Header;