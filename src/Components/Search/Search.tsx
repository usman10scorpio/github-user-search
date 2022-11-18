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
    <form>
     <input
            type="text"
            className="search__text"
            placeholder="Enter the user you want to search ..."
            value={username}
            onChange={(e) => setUsername?.(e.target.value)}
            required={true}
            name="user"
          />
        <button
              className={`search__submit ${disabled ? "search__submit__disabled" : ""}`}
              type="button"
              disabled={disabled}
              onClick={(e) => onFormSubmit && onFormSubmit(e)}>
              Submit
         </button>
      </form>
    </div>
  );
}

export default Search;
