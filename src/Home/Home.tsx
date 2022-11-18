import { useState,useEffect } from "react";
import ReactDataTable from "../Components/ReactDataTable/ReactDataTable";
import Search from '../Components/Search/Search';

const Home = () => {
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [submitClick, submitClicked] = useState(false);

  const onFormSubmit = async (e:any) => {
    e.preventDefault();
    if (username !== "") submitClicked(true)
  };

  useEffect(() => {
    console.log(username)
	}, [username]);

  return (
    <>
      <div className="home">
          <Search 
                  username={username} 
                  setUsername={setUsername} 
                  onFormSubmit={onFormSubmit} 
                  disabled={disabled} 
                  setDisabled={setDisabled}
          />
          <ReactDataTable username={username} submitClick={submitClick} submitClicked={submitClicked}/> 
      </div>
    </>
  );
};

export default Home;
