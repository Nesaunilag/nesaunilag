// src/pages/Error404.jsx
import React, { useState, useEffect } from "react";
import styles from "./Error404.module.scss";

const Error404 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.heading}>404</h1>
        <h2 className={styles.subheading}>Lights Out Page</h2>
        <h3 className={styles.description}>The Technical team is doing everythig to bring the light back on</h3>
      </div>
      <div
        className={styles.torch}
        style={{ top: position.y - 60, left: position.x - 60 }}
      ></div>
    </div>
  );
};

export default Error404;

