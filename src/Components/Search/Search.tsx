import { searchInputInterface } from '../../util/interface'

const Search = ({
  username,
  setUsername,
  onFormSubmit,
  disabled,
  setDisabled
}:searchInputInterface) => { 

  return (
    <div className="search">
    <form onSubmit={onFormSubmit}>
     <input
            type="text"
            className="search__text"
            placeholder="Enter the user you want to search ..."
            value={username}
            onChange={(e) => setUsername?.(e.target.value)}
            required={true}
            name="user"
            pattern="^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$"
          />
        <button
              className={`search__submit ${disabled ? "search__submit__disabled" : ""}`}
              type="submit"
              disabled={disabled}>
              Submit
         </button>
      </form>
    </div>
  );
}

export default Search;
