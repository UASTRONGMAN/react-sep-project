import {useAppSelector} from "../helpers/useAppSelector.ts";
import {useAppDispatch} from "../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice.ts";
import UsersList from "../components/users-list/UsersList.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";
import Search from "../components/search/Search.tsx";
import {refresh} from "../services/api.services.ts";


const UsersPage = () => {
    const [query] = useSearchParams();
    const skip = query.get('skip');
    const {response, loadState} = useAppSelector(value => value.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {

        const loadRec = async () => {
            try {
                await dispatch(userSliceActions.loadUsers(skip || '0')).unwrap()
            } catch (error) {
                console.log(error)
                await refresh()
                dispatch(userSliceActions.loadUsers(skip || '0'))
            }
        }
        loadRec()
    }, [skip]);


    return (
        <div>
            <Search request_type={'users'}/>
            {!loadState && <div>Loading...</div>}
            {response.users && <UsersList users={response.users}/>}
            <Pagination props={response}/>
        </div>
    );
};

export default UsersPage;