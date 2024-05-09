import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Box5 from "./Box5";
import Box6 from "./Box6";
import Box8 from "./Box8";
import Box7 from "./Box7";
import Box9 from "./Box9";
import Box10 from "./Box10";


const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  display:grid ;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  background:linear-gradient(135deg,#e09,#d0e);
`;


const Boxs = () => {
    const x = useMotionValue(0);
    const gradient = useTransform(
        x,
        [
        -200,
        // 0,
        200],
        [
            "linear-gradient(135deg,#47ee00,#ee9300)",
            // "linear-gradient(135deg,#e09,#d0e)",
            "linear-gradient(135deg,#091518,#00eeee)"
        ]
    );

    return (
    <Wrapper 
      style={{background:gradient}}
    >
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 x={x}/>
      <Box5 />
      {/* <Box drag="x" dragSnapToOrigin style={{x}}/> */}
      <Box6 />
      <Box7 />
      <Box8 />
      <Box9 />
    </Wrapper>
    )
};

export default Boxs;