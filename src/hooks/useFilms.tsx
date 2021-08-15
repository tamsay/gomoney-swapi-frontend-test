import React, { useState, useEffect } from "react";


export const useFilms = () => {
    const [films, setFilms] = useState<Array<any>>([])

    useEffect(() => {
        fetch("https://swapi.dev/api/films/")
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setFilms(data.results);
            })
    }, []);

    return films;
};
