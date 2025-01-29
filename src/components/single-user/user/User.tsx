import {FC} from "react";
import {IUser} from "../../../models/IUser.ts";
import {IRecipe} from "../../../models/IRecipe.ts";
import {Link} from "react-router-dom";

interface IProps{
    user:IUser,
    recipes: IRecipe[]
}

const User:FC<IProps> = ({user, recipes}) => {
    return (
        <div>
            <h4>{user.id}. {user.firstName} {user.lastName}</h4>
            <p>Age - {user.age}.</p>
            <p>Email - {user.email}.</p>
            <p>Date of birth - {user.birthDate}.</p>
            <p>Phone number - {user.phone}.</p>

            <p>User recipes:</p>
            <Link to={`/auth/recipes/${recipes.map(recipe => recipe.id)}`}>{recipes.map(recipe => <div>{recipe.id} {recipe.name}.</div>)}</Link>
        </div>
    );
};

export default User;