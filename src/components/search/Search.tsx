

const Search = () => {

    const handler = (awe) => {
        console.log(awe)
    }
    return (
        <form>
            <input type="text" placeholder={'search request'} name={'awe'}/>
            <button onClick={handler}>Search</button>
        </form>
    );
};

export default Search;