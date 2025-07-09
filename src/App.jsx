import { useState, useEffect } from "react";
import Star from "./Star.jsx";
import styles from "./Space.module.css";

// This component represents the space scene where stars are spawned.
const STAR_SIZE = 40;

function App() {
  const [stars, setStars] = useState([]);
  // id represents the unique identifier for each star, which is used to manage their lifecycle.
  // position is an object containing the x and y coordinates of the star on the screen.
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newStar = {
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        x: Math.random() * (window.innerWidth - STAR_SIZE),
        y: Math.random() * (window.innerHeight - STAR_SIZE)
      };

      // Add a new star to the stars array every 25 milliseconds
      setStars(prevStars => [...prevStars, newStar]);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  // destruction of starts matching id number and recreating the stars array without the destroyed star.
  function destroyStar(id) {
    setStars(prev => prev.filter(star => star.id !== id));
  }

  return (
    <div className={styles.space}>
      {stars.map(star => (
        <Star
          key={star.id}
          id={star.id}
          position={{ x: star.x, y: star.y }}
          destroyStar={destroyStar}
        />
      ))}
    </div>
  );
}

export default App;
