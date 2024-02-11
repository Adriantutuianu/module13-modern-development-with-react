function SearchForm(props) {
  return (
    <form>
      <div className="mb-3 container">
        <label htmlFor="search" className="form-label">
          Search:
        </label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Gif"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
