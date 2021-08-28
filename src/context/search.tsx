import React,{ createContext} from "react";

const SearchContext = createContext("");

const searchContextProvider = (props:any) => {

    return (
        <SearchContext.Provider value={""}>
            {props.children}
        </SearchContext.Provider>
    )
    
}

export default searchContextProvider;
