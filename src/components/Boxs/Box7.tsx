import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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


const boxVariants = {
    initial:{
        opacity:0,
        scale:0
    },
    visible:{
        opacity:1,
        scale:1,
        rotateZ:360,
    },
    leaving:{
        opacity:0,
        y:20
    }
}

const Box7 = () => {
    const [showing,setShowing] = useState(false);
    const toggleShowing = ()=>{
        setShowing((prev)=>!prev);
    }

    return (
        <div style={{width:"300px", height:"300px" , justifySelf:"center", alignSelf:"center"}}>
            <button onClick={toggleShowing}>click</button>           
            <AnimatePresence>
                {
                showing 
                ? 
                    <Box 
                        variants={boxVariants} 
                        initial="initial" 
                        animate="visible" 
                        exit="leaving" 
                    /> 
                : 
                    null
                }
            </AnimatePresence>
        </div>
    );
};

export default Box7;