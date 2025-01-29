import {FC} from "react";
import {IUser} from "../../../models/IUser.ts";
import {Link} from "react-router-dom";

interface IProps{
    user:IUser
}

const User:FC<IProps> = ({user}) => {
    return (
        <div>

            <Link to={`${user.id}`}>{user.id}. {user.firstName} {user.lastName}.</Link>
        </div>
    );
};

export default User;