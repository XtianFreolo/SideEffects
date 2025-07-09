import { useState, useEffect } from "react";

//helps avoiding spawning stars off-screen
const STAR_SIZE = 40;
const [stars, setStars] = useState([]);

// id in newStar is used to make sure each star has a unique identifier..
// x and y are the coordinates of the star on the screen.
useEffect(() => {
    const intervalId = setInterval(() => {
        const newStar = {
            id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            x: Math.random() * (window.innerWidth - STAR_SIZE),
            y: Math.random() * (window.innerHeight - STAR_SIZE)
        };
        // The new star is added to the stars array every 2.5 seconds.
        setStars(prevStars => [...prevStars, newStar]);
    }, 2500);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
}, [])




