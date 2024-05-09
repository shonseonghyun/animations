import {  motion } from "framer-motion";
import {  useState } from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
    width: 100px;
    height: 100px;
    background-color: white;
    /* background:linear-gradient(135deg,#e09,#d0e); */ 
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Circle = styled(motion.div)`
    background-color:#00a5ff;
    width: 50px;
    height: 50px;
    /* border-radius   : 50px ; */
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box9 = () => {
    const [click,setClick] =  useState(false);
    const toggleClick = ()=>{
        setClick((prev)=>!prev);
    }  

    return (
        <div>
                <Box onClick={toggleClick}>
                    {click ? <Circle  layoutId="circle" style={{borderRadius:50,scale:0.5}} /> : null}
                </Box>
                <Box 
                    onClick={toggleClick}
                // style={{
                    //     justifyContent:click ? "center" : "flex-start",
                    //     alignItems:click ? "center" : "flex-start"
                    // }}
                    >
                {!click ? <Circle layoutId="circle" style={{borderRadius:0,scale:1}}/> : null}
                </Box>
        </div>
        
    );
};

export default Box9;