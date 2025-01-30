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

            {recipes.length > 0 ? (
                <Link to={`/auth/recipes/${recipes.map(recipe => recipe.id).join(",")}`}>
                    {recipes.map(recipe => (
                        <div key={recipe.id}>{recipe.id} {recipe.name}.</div>
                    ))}
                </Link>
            ) : (
                <p>User doesn't have any recipes.</p>
            )}
        </div>
    );
};

export default User;