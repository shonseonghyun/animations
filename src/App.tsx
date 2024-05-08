import styled from "styled-components";
import Box3 from "./components/Box3";
import Box2 from "./components/Box2";
import Box1 from "./components/Box1";
import Box4 from "./components/Box4";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Box5 from "./components/Box5";
import Box6 from "./components/Box6";
import Box7 from "./components/Box7";
import Box8 from "./components/Box8";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  display:grid ;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  place-items: center;
  background:linear-gradient(135deg,#e09,#d0e);
`;


function App() {
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
    </Wrapper>

  );
}

export default App;
