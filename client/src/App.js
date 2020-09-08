import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { AuthContext } from "./context/auth/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Signup from "./views/Signup";
import Login from "./views/Login";
import { authenticate } from "./context/auth/authActions";

function App() {
	const { dispatch } = useContext(AuthContext);

	useEffect(() => {
		authenticate(dispatch);
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
