import {FC, useState} from "react";
import {useAppDispatch} from "../../helpers/useAppDispatch.ts";
import {useAppSelector} from "../../helpers/useAppSelector.ts";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import {useNavigate} from "react-router-dom";
import {recipeSliceActions} from "../../redux/slices/recipeSlice.ts";

interface IProps {
    request_type: "users" | "recipes"
}

const Search:FC<IProps> = ({ request_type }) => {
    const [query, setQuery] = useState("");
    const dispatch = useAppDispatch();

    const nav = useNavigate();
    
    const users = useAppSelector((state) =>
        request_type === "users" ? state.userSlice.response.users : []
    );

    const recipes = useAppSelector((state) =>
        request_type === "users" ? state.recipeSlice.response.recipes : []
    );
    
    const handleSearch = () => {
        if (!query) return;

        if (request_type === "users") {
            if (!isNaN(Number(query))) {
                dispatch(userSliceActions.loadSingleUser(query));
                nav(query)
            } else {
                const filteredUsers = (users ?? []).filter(
                    (user) =>
                        user.username.toLowerCase().includes(query.toLowerCase()) ||
                        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
                        user.lastName.toLowerCase().includes(query.toLowerCase())
                );
                nav(`${filteredUsers.map(user => user.id)}`)
            }
        } else {
            if (!isNaN(Number(query))) {
                dispatch(recipeSliceActions.loadSingleRecipe(query));
                nav(query)
            } else {
                const filteredRecipes = (recipes ?? []).filter((recipe) =>
                    recipe.name.toLowerCase().includes(query.toLowerCase())
                );
                console.log(filteredRecipes)
                nav(`${filteredRecipes.map(recipe => recipe.id)}`)
            }
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by ID, name, firstname, or lastname..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;