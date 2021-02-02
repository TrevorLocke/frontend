import logo from './logo.svg';
import "./App.scss";
import Header from "./Components/TopNav";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import {MainPage} from './Components/MainPage';
import {UserHome} from './Components/UserHome';
import {HowToForm} from './Components/HowToForm';
import {HowToPage} from './Components/HowToPage';

import {PrivateRoute} from './Components/Util/PrivateRoute';

function App() {
  return (
		<Router>
			<Header />
			<Route exact path="/" component={MainPage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/home">
        <UserHome/>
      </PrivateRoute>
			
			<Route exact path="/create" component={HowToForm} />
			<Route path="/howto/:id" component={HowToPage} />
		</Router>
	);
}
//<Route exact path="/home" component={UserHome} />
export default App;
