import logo from './logo.svg';
import './App.css';
import Example from "./Examples"
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      {true ? <header className="App-header">
        <img
          // Use KeyFrames to animate the logo in a more detailled animations
          //animate={{
          //scale: [1, 1.2, 1.2, 1, 1],
          //rotate: [0, 0, 270, 270, 0],
          //}}

          // Orchestrate the animations, make it in a loop with a 1s delay before repeating. 
          // Each time animation takes 2s to finish  
          //transition={{
          //repeat: Infinity,
          //repeatDelay: 1,
          //duration: 2
          //}}
          src={logo}
          className="App-logo"
          alt="logo" />
        <p
        // Change color of text and scale on Hover
        //whileHover={{
        //color: "#61DAFB",
        //scale: 2
        //}}

        // Rotate text on click 
        //whileTap={{
        //rotate: 10
        //}}
        >
          Hover or click here ;)
        </p>
      </header> : <Example />}
    </div>
  );
}

export default App;
