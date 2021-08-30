import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import "./App.css";
// import Header from '../src/components/Header/Header';
import HomePage from "./Pages/HomePage/HomePage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import ViewAll from "./Pages/ViewAll/ViewAll";
import SearchResult from "./Pages/SearchResult/SearchResult";

import SwapiContextProvider from "../src/context/index";
import FilterCharacters from "./Pages/FilterCharacters/FilterCharacters";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {

	return (
		<div className="App">
			<SwapiContextProvider>
				<Router>
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/details-page">
							<DetailsPage />
						</Route>
						<Route exact path="/view-all/">
							<ViewAll />
						</Route>
						<Route exact path="/search/">
							<SearchResult />
						</Route>
						<Route exact path="/filter-characters/">
							<FilterCharacters />
						</Route>
					</Switch>
				</Router>
        
			</SwapiContextProvider>
		</div>
	);
}

export default App;
