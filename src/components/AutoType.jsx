import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 


const roles = ["MERN Stack Developer", "Web Designer", "Blockchain Enthusiast","Vocalist"];

export default function AutoType() {
  const [index, setIndex] = useState(0); 
  const [text, setText] = useState(""); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [speed, setSpeed] = useState(80); 

  useEffect(() => {
    const current = roles[index % roles.length];
    if (isDeleting) setSpeed(10);
    else setSpeed(80);

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1) 
          : current.substring(0, prev.length + 1) 
      );

      
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000); 
      }

    
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1); 
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="typewriter">
      <span>{text}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </div>
  );
}
