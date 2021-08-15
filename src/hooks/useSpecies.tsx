import React, { useState, useEffect } from "react";


export const useSpecies = () => {
    const [species, setSpecies] = useState<Array<any>>([])

    useEffect(() => {
        fetch("https://swapi.dev/api/species/")
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setSpecies(data.results);
            })
    }, []);

    return species;
};
