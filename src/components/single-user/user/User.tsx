import {FC} from "react";
import {IUser} from "../../../models/IUser.ts";
import {IRecipe} from "../../../models/IRecipe.ts";

interface IProps{
    user:IUser,
    recipes: IRecipe[]
}

const User:FC<IProps> = ({user}) => {
    return (
        <div>
            <h4>{user.id}. {user.firstName} {user.lastName}</h4>
            <p>Age - {user.age}.</p>
            <p>Email - {user.email}.</p>
            <p>Date of birth - {user.birthDate}.</p>
            <p>Phone number - {user.phone}.</p>


        </div>
    );
};

export default User;