/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";

export const useSpecies = (): string[]=> {
	const [species, setSpecies] = useState<Array<any>>([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/species/")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setSpecies(data);
			});
	}, []);

	return species;
};
