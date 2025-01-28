import {useForm} from "react-hook-form";
import {login} from "../services/api.services.ts";
import {ILoginDataModel} from "../models/ILoginDataModel.ts";
import {useNavigate} from "react-router-dom";


const AuthPage = () => {
    const {register, handleSubmit} = useForm<ILoginDataModel>();
    const nav = useNavigate();
    const auth = (loginData:ILoginDataModel) => {
        login(loginData)
        nav('/auth')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(auth)}>
                <input type="text" {...register('username')} placeholder={'username'}/>
                <input type="text" {...register('password')} placeholder={'password'}/>
                <button>Log in</button>
            </form>

        </div>
    );
};

export default AuthPage;