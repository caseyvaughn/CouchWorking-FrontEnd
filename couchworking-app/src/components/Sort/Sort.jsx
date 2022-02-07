import './Sort.css'

const Sort = (props) => {

    const handleSort = (event) => {
        props.handleSort(event.target.value)
    }

    return (
        <form className="sort-container" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select className="sort" onChange={handleSort}>
                <option className="option" value="location-ascending" >&nbsp; A-Z &nbsp;</option>
                <option value="location-descending">&nbsp; Z-A &nbsp;</option>
            </select>
        </form>
    )
}

export default Sort