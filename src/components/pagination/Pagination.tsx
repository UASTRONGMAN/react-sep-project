import {useSearchParams} from "react-router-dom";
import {FC} from "react";
import {IResponseModel} from "../../models/IResponseModel.ts";


interface IProps{
    props:IResponseModel
}

const Pagination:FC<IProps> = ({props}) => {
    const [query, setQuery] = useSearchParams({skip:'0'});
    const skip = query.get('skip');
    const dis = Number(skip)+30
    const pageUp = () => {

        if (skip) {
            const currentPage = +skip;
            const nextPage = currentPage + 30
            setQuery({skip: nextPage.toString()})
        }
    }

    const pageDown = () => {
        if (skip) {
            const currentPage = +skip;
            const nextPage = currentPage - 30
            setQuery({skip: nextPage.toString()})
        }
    }

    return (
        <div>
            <button onClick={pageDown} disabled={skip=='0'}>prev</button>
            <button onClick={pageUp} disabled={dis>props.total}>next</button>
        </div>
    );
};

export default Pagination;