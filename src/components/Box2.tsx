import { motion } from "framer-motion";
import styled from "styled-components";


const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  
  //grid
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Circle = styled(motion.div)`
  place-self: center;
  width:70px;
  height: 70px;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    start:{
      opacity:0,
      scale:0
    },
    end:{
      opacity:1,
      scale:1,
      transition:{
        delay:0.2,
        duration:0.5,
        bounce:0.5,
        delayChildren:0.7,
        staggerChildren:0.3
      }
    }
  }
  
  const circleVariants = {
    start:{
      opacity:0,
      y:10
    },
    end:{
      opacity:1,
      y:0
    }
  }


const Box2 = () => {
    return (
        <Box variants={boxVariants} initial="start" animate="end" >
            <Circle variants={circleVariants}/>  
            <Circle variants={circleVariants}/>  
            <Circle variants={circleVariants}/>  
            <Circle variants={circleVariants}/>  
        </Box>
    );
};

export default Box2;