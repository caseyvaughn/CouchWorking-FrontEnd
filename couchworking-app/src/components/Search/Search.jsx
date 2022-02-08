import './Search.css'

const Search = (props) => {
    return (
        <form className="search" onSubmit={(event) => props.onSubmit(event)}>
            <input
                className="search-input"
                value={props.value}
                name="Search"
                placeholder="Search by location"
                type="text"
                onChange={(event) => props.handleSearch(event)}
            />
        </form>
    )
}

export default Search