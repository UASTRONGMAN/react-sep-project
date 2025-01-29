import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import User from "./user/User.tsx";

interface IProps{
    users:IUser[]
}

const UsersList:FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersList;