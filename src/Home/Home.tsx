import { useState,useEffect } from "react";
import './Home.css'
import ReactDataTable from "../Components/ReactDataTable/ReactDataTable";
import { homeTestInterface} from '../util/interface'
import Search from '../Components/Search/Search';

const Home = ({testSuccessBit}:homeTestInterface) => {
  const [username, setUsername] = useState("");
  const [submitClick, submitClicked] = useState(false);
  const [success, setSuccess] = useState(false || testSuccessBit);

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
          {testSuccessBit && <ReactDataTable username={"usman"} submitClick={true} submitClicked={() => {}} testSuccessBit={testSuccessBit}/> }
      </div>
    </>
  );
};

export default Home;
