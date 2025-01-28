import {FC} from "react";
import {IUser} from "../../../models/IUser.ts";

interface IProps{
    user:IUser
}

const User:FC<IProps> = ({user}) => {
    return (
        <div>
            {user.id}. {user.firstName} {user.lastName}.
        </div>
    );
};

export default User;