import {Link} from "react-router-dom";


const UnauthorizedHeader = () => {
    return (
        <div>
            If you want to have access to information - <Link to={'/login'}>log in.</Link>
        </div>
    );
};

export default UnauthorizedHeader;