import React, { useState, useEffect } from "react";


export const usePeople = () => {
    const [people, setPeople] = useState<Array<any>>([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setPeople(data.results);
            })
    }, []);

    return people;
};
