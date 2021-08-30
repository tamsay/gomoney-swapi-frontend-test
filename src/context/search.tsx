/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{ createContext} from "react";

const SearchContext = createContext("");

const searchContextProvider = (props:any) : JSX.Element=> {

	return (
		<SearchContext.Provider value={""}>
			{props.children}
		</SearchContext.Provider>
	);
    
};

export default searchContextProvider;
