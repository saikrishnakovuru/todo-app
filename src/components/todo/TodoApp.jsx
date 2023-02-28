import "./TodoApp.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LogoutComponent} from "./LogoutComponent";
import {FooterComponent} from "./FooterComponent";
import {HeaderComponent} from "./HeaderComponent";
import {ListTodosComponent} from "./ListTodosComponent";
import {ErrorComponent} from "./ErrorComponent";
import {WelcomeComponent} from "./WelcomeComponent";
import {LoginComponent} from "./LoginComponent";
import {AuthProvider} from "./Security/AuthContext";

export const TodoApp = () => {
  return (<div className="TodoApp">
    <AuthProvider>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='' element={<LoginComponent/>}/>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/welcome/:user' element={<WelcomeComponent/>}/>
        <Route path='/todos' element={<ListTodosComponent/>}/>
        <Route path='/logout' element={<LogoutComponent/>}/>
        <Route path='*' element={<ErrorComponent/>}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </AuthProvider>
    {/*<LoginComponent/>*/}
    {/*<WelcomeComponent/>*/}
  </div>)
}

// const LoginComponent = () => {
//   const [userName, setUserName] = useState('sai');
//   const [password, setPassword] = useState('');
//
//   const [successMsg, setSuccessMsg] = useState(false);
//   const [failureMsg, setFailureMsg] = useState(false);
//
//   const navigate = useNavigate();
//
//   // const handleUsernameChange=(event)=>{
//   //  setUserName(event.target.value);
//   // }
//   // (event)=>setUserName(event.target.value)
//   const handleSubmit = () => {
//     if (userName === 'sai' && password === 'sai') {
//       setSuccessMsg(true);
//       setFailureMsg(false);
//       navigate(`/welcome/${userName}`);
//     } else {
//       setSuccessMsg(false);
//       setFailureMsg(true);
//     }
//   }
//
//   // const SuccessMessage = () => {
//   //   if (successMsg)
//   //     return <div>Successful authentication.</div>
//   //   return null;
//   // }
//   //
//   // const FailureMessage = () => {
//   //   if (failureMsg)
//   //     return <div>Wrong credentials entered</div>
//   //   return null;
//   // }
//
//   return (<div className="Login">
//     {/*<SuccessMessage/>*/}
//     {/*<FailureMessage/>*/}
//     {successMsg && <div>Successful authentication.</div>}
//     {failureMsg && <div>Wrong credentials entered</div>}
//     <div>
//       <label>User Name:</label>
//       <input type="text"
//              name="userName"
//              value={userName}
//              onChange={event => setUserName(event.target.value)}
//       />
//     </div>
//     <div>
//       <label>Password:</label>
//       <input type="password"
//              name="password"
//              value={password}
//              onChange={event => setPassword(event.target.value)}
//       />
//     </div>
//     <div>
//       <button name="login" onClick={handleSubmit}>Login</button>
//     </div>
//   </div>)
// }


// const WelcomeComponent = () => {
//   const {user} = useParams();
//   // console.log(params);
//   return (<div className="Welcome">
//     <h1>Welcome {user}</h1>
//     <div>
//       your todos to manage <Link to='/todos'>Todos list</Link>
//     </div>
//   </div>)
// }


// const ErrorComponent = () => {
//   return (<div className="ErrorComponent">
//     <h1>wrong URL given</h1>
//   </div>)
// }

// const ListTodosComponent = () => {
//   const currentDate = new Date();
//   const todos = [{
//     id: 1,
//     description: 'Java',
//     done: false.toString(),
//     targetDate: new Date(currentDate.getDate() + 30).toISOString().substring(0, 10)
//   }, {
//     id: 2,
//     description: 'Docker',
//     done: false.toString(),
//     targetDate: new Date(currentDate.getDate() + 30).toISOString().substring(0, 10)
//   }, {
//     id: 3,
//     description: 'Kubernetes',
//     done: false.toString(),
//     targetDate: new Date(currentDate.getDate() + 30).toISOString().substring(0, 10)
//   }]
//   return (
//     <div className="container">
//       <h1>Todos</h1>
//       <table className='table'>
//         <thead>
//         <tr>
//           <td>Id</td>
//           <td>Description</td>
//           <td>IsDone?</td>
//           <td>TargetDate</td>
//         </tr>
//         </thead>
//         <tbody>
//         {todos.map(todos => (<tr key={todos.id}>
//           <td>{todos.id}</td>
//           <td>{todos.description}</td>
//           <td>{todos.done}</td>
//           <td>{todos.targetDate}</td>
//         </tr>))}
//         </tbody>
//       </table>
//     </div>)
// }

// const HeaderComponent = () => {
//   return (
//     <header className="border-bottom border-light border-5 mb-5 p-2">
//       <div className="container">
//         <div className="row">
//           <nav className="navbar navbar-expand-lg">
//             <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
//             <div className="collapse navbar-collapse">
//               <ul className="navbar-nav">
//                 <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
//                 <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
//               </ul>
//             </div>
//             <ul className="navbar-nav">
//               <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
//               <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//
//   )
// }

// const FooterComponent = () => {
//   return (
//     <footer className='footer'>
//       <div className="container">
//         <hr/>
//         Footer
//       </div>
//
//     </footer>
//   )
// }

// const LogoutComponent = () => {
//   return (<div className="LogoutComponent">
//     <h1>You are logged out!</h1>
//   </div>)
// }