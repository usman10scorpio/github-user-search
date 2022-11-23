import { useState,useEffect } from "react";
import './Home.css'
import ReactDataTable from "../Components/ReactDataTable/ReactDataTable";
import Search from '../Components/Search/Search';

const Home = () => {
  const [username, setUsername] = useState("");
  const [submitClick, submitClicked] = useState(false);
  const [success, setSuccess] = useState(false);

  const onFormSubmit = async (e:any) => {
    e.preventDefault();
    if (username !== "") { 
      submitClicked(true) 
      setSuccess(true)
    }
  };

  useEffect(() => {
	}, [username]);

  return (
    <>
      <div className={"home" + (success ?  " home__username" : "")}>
          <Search 
                  username={username} 
                  setUsername={setUsername} 
                  onFormSubmit={onFormSubmit} 
                  success={success} 
          />
          {success && <ReactDataTable username={username} submitClick={submitClick} submitClicked={submitClicked}/> }
      </div>
    </>
  );
};

export default Home;
