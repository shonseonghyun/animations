import { MotionValue, motion, useMotionValue, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255,255, 255, 0.2);
    /* background:linear-gradient(135deg,#e09,#d0e); */
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box5 = () => {
    const {scrollX,scrollY,scrollXProgress,scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress,
        [0,1],
        [0.5,1]
    )
    useEffect(()=>{
        scrollY.on("change",()=>{
            console.log("scrollY(현재 스크롤한 픽셀위치): ",scrollY.get());
            console.log("scrollYProgress(전체 진행도의 위치): ",scrollYProgress.get());
        })

    })
    return (
        <Box style={{scale:scale}}/>
    );
};

export default Box5;