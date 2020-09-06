import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Navbar />
				<Route to="/" component={Home} />
			</Router>
		</ThemeProvider>
	);
}

export default App;
