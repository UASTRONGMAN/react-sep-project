import {useForm} from "react-hook-form";
import {ILoginDataModel} from "../models/ILoginDataModel.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../helpers/useAppDispatch.ts";
import {userSliceActions} from "../redux/slices/userSlice.ts";


const AuthPage = () => {

    // const {response} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm<ILoginDataModel>();
    const nav = useNavigate();

    const auth = (loginData:ILoginDataModel) => {
        dispatch(userSliceActions.userAuth(loginData))
        nav('/auth')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(auth)}>
                <input type="text" {...register('username')} placeholder={'username'}/>
                <input type="text" {...register('password')} placeholder={'password'}/>
                {/*<input type="text" {...register('expiresInMins')} placeholder={'expiresInMins'}/>*/}
                <button>Log in</button>
            </form>
        </div>
    );
};

export default AuthPage;