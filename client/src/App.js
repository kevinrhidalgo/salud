import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import PublicRouteTwo from "./pages/PublicRouteTwo";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProtectedRouteTwo from "./pages/ProtectedRouteTwo";
import './App.css';
import { UserProvider } from "./utils/UserContext";
import Footer from "./components/Footer/index"



//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<UserProvider>
		<Router>
			<div>
				<Nav className="App-header" />
				<Container>
					<Switch>
						<Route path="/home" component={PublicRoute} />
						<Route path="/Voices" component={PublicRouteTwo} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<PrivateRoute path="/recipes" component={ProtectedRoute} />
						<PrivateRoute path="/mealplan" component={ProtectedRouteTwo} />
						
					</Switch>
					<Footer/>
				</Container>

			</div>
		</Router>
		
	</UserProvider>
	
)




// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div className="container">
							<div className="alert alert-danger text-center" role="alert">
								This page is private to authenticated users.
					</div>
							<div className="row">
								<div className="col-sm"></div>
								<div className="col-sm">
									<h3>Please Register or Login</h3>
								</div>
								<div className="col-sm"></div>
							</div>
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
)








export default AuthExample

