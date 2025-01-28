import {useAppSelector} from "../helpers/useAppSelector.ts";
import {useAppDispatch} from "../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../redux/userSlice.ts";
import UsersList from "../components/users-list/UsersList.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";


const UsersPage = () => {
    const [query] = useSearchParams();
    const skip = query.get('skip');
    const {response} = useAppSelector(value => value.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers(skip || '0'))
    }, [skip]);
    return (
        <div>
            <UsersList users={response.users || []}/>
            <Pagination props={response}/>
        </div>
    );
};

export default UsersPage;