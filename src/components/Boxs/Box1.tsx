import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  start: {scale:0},
  end:{scale:1 , rotateZ:360,transition:{type:"spring", bounce:0.2 , duration:1,delay:0.5}}
}

const Box1 = () => {
    return (
      <Box variants={myVars} initial="start" animate="end" />
    );
};

export default Box1;