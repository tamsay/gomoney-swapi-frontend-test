import React, { useState, useEffect } from "react";


export const useVehicles = () => {
    const [vehicles, setVehicles] = useState<Array<any>>([])

    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/")
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setVehicles(data.results);
            })
    }, []);

    return vehicles;
};
