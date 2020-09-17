import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

import TransactionContextProvider from "./context/transaction/TransactionContext";

import { AuthContext } from "./context/auth/AuthContext";
import { authenticate } from "./context/auth/authActions";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Transactions from "./views/Transactions";

function App() {
	const { dispatch } = useContext(AuthContext);

	useEffect(() => {
		authenticate(dispatch);
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<TransactionContextProvider>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/login" component={Login} />
						<PrivateRoute
							exact
							path="/dashboard/transactions"
							component={Transactions}
						/>
						<PrivateRoute
							exact
							path="/dashboard"
							component={Dashboard}
						/>
					</Switch>
				</Router>
			</TransactionContextProvider>
		</ThemeProvider>
	);
}

export default App;
