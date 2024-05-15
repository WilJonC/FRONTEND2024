const Search = ({ values, handleInputChange, reset, cities, setCities }) => {
    const handleSearch = () => {
        setCities(values.searchCity)
        reset()
    }
    return (
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="searchCity">CITY</label>
            <input
                className="form-control"
                name="searchCity"
                id="searchCity"
                onChange={handleInputChange}
                type="text"
                value={values.searchCity}>
            </input>
            <button onClick={handleSearch} className="btn btn-primary">SEARCH</button>
        </div>
    )
}
export default Search