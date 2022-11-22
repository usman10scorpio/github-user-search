import { searchInputInterface } from '../../util/interface'
import './Search.css'

const Search = ({
  username,
  setUsername,
  onFormSubmit,
}:searchInputInterface) => { 

  return (
    <div className="search">
    <form onSubmit={onFormSubmit} className={"search__form" + (username ?  " search__fusername" : "")}>
      <div className={"search__heading" + (username ?  " search__husername" : "")}>{username ? 'GS' : 'Github Search'}</div>
     <input
            type="text"
            className="search__text"
            placeholder="Enter the user you want to search ..."
            value={username}
            onChange={(e) => setUsername?.(e.target.value)}
            required={true}
            name="user"
            pattern="^[A-Za-z\d](?:[A-Za-z\d]|-(?=[A-Za-z\d])){0,38}$"
          />
        <button
              className={"search__submit" + (username ?  " search__btnusername" : "")}
              type="submit">
              Search
         </button>
      </form>
    </div>
  );
}

export default Search;
