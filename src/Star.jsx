import { useEffect, useRef } from "react";
import styles from "./Star.module.css";

// This component represents a single star in the space scene.
// useRef is used to create a reference to the star element, allowing us to focus it when it is mounted.
function Star({ id, position, destroyStar }) {
    const starRef = useRef(null);

    // Focus the star element when it is mounted to ensure it can be clicked.
    useEffect(() => {
        starRef.current?.focus();
    }, []);

    function handleClick() {
        destroyStar(id);
    }

    return (
        <div
            ref={starRef}
            tabIndex="0"
            onClick={handleClick}
            style={{ left: position.x, top: position.y }}
            className={styles.star}
        >
            &#9733;
        </div>
    );
}

export default Star;