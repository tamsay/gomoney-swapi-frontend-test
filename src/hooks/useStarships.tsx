import React, { useState, useEffect } from "react";


export const useStarships = () => {
    const [starships, setStarships] = useState<Array<any>>([])

    useEffect(() => {
        fetch("https://swapi.dev/api/starships/")
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setStarships(data.results);
            })
    }, []);

    return starships;
};
