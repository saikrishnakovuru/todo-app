import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./Security/AuthContext";

export const LoginComponent = () => {
  const [userName, setUserName] = useState('sai');
  const [password, setPassword] = useState('');

  // const [successMsg, setSuccessMsg] = useState(false);
  const [failureMsg, setFailureMsg] = useState(false);

  const navigate = useNavigate();

  const authContext = useAuth();

  // const handleUsernameChange=(event)=>{
  //  setUserName(event.target.value);
  // }
  // (event)=>setUserName(event.target.value)
  const handleSubmit = () => {
    if (authContext.login(userName,password)) {
      // setSuccessMsg(true);
      // setFailureMsg(false);
      navigate(`/welcome/${userName}`);
      // authContext.setAuthenticated(true);
    } else {
      // setSuccessMsg(false);
      setFailureMsg(true);
      // authContext.setAuthenticated(false);
    }
  }

  // const SuccessMessage = () => {
  //   if (successMsg)
  //     return <div>Successful authentication.</div>
  //   return null;
  // }
  //
  // const FailureMessage = () => {
  //   if (failureMsg)
  //     return <div>Wrong credentials entered</div>
  //   return null;
  // }

  return (<div className="Login">
    {/*<SuccessMessage/>*/}
    {/*<FailureMessage/>*/}
    {/*{successMsg && <div>Successful authentication.</div>}*/}
    {failureMsg && <div>Wrong credentials entered</div>}
    <div>
      <label>User Name:</label>
      <input type="text"
             name="userName"
             value={userName}
             onChange={event => setUserName(event.target.value)}
      />
    </div>
    <div>
      <label>Password:</label>
      <input type="password"
             name="password"
             value={password}
             onChange={event => setPassword(event.target.value)}
      />
    </div>
    <div>
      <button name="login" onClick={handleSubmit}>Login</button>
    </div>
  </div>)
}