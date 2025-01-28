import {useAppSelector} from "../helpers/useAppSelector.ts";
import {useAppDispatch} from "../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../redux/userSlice.ts";
import UsersList from "../components/users-list/UsersList.tsx";


const UsersPage = () => {
    const {users} = useAppSelector(value => value.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            <UsersList users={users}/>
        </div>
    );
};

export default UsersPage;