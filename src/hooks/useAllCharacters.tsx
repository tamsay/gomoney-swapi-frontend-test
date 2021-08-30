/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";

export const useAllCharacters = () : string[]=> {
	const [allCharacters, setAllCharacters] = useState<Array<any>>([]);
  
	useEffect(() => {
		const resultArray: string[] = [];
		const defaultUrl = "https://swapi.dev/api";
		let charactersCounter = 1 ;
		const getAllCharacters = async () => {
			const result = await axios.get(`${defaultUrl}/people/?page=${charactersCounter}`);
			result.data.results.map((element:any) =>resultArray.push(element));
      
			if (result.data.next === null) {
				resultArray.push(result.data.results);
				setAllCharacters(resultArray);
				return;
			}
			charactersCounter++;
			getAllCharacters();
		};
		getAllCharacters();
	},[]);
  
	return allCharacters;
};
