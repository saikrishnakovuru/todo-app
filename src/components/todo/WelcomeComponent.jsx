import {Link, useParams} from "react-router-dom";

export const WelcomeComponent = () => {
  const {user} = useParams();
  // console.log(params);
  return (<div className="Welcome">
    <h1>Welcome {user}</h1>
    <div>
      your todos to manage <Link to='/todos'>Todos list</Link>
    </div>
  </div>)
}