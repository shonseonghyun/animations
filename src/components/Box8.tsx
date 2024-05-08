import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
    width: 20px;
    height: 20px;
    background-color: white;
    /* background:linear-gradient(135deg,#e09,#d0e); */
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* position: relative; */
    /* top:10px; */
`;


const boxVariants = {
    invisible:(back:boolean)=>({
        x: back? -100 : 100,
        opacity:0,
        scale:0
    }),
    visible:{
        x:0,
        opacity:1,
        scale:1,
        transition:{
            duration:0.3
        }
    },
    exits:(back:boolean)=>({
        x: back? 100 : -100,
        opacity:0,
        scale:0,
        transition:{
            duration:0.3
        }
    })
}

const Box8= () => {
    const [visible,setVisible] = useState(1);
    const [back,setBack] = useState(false);
    const nextClick = ()=>{
        setVisible((prev)=>(prev ===10 ? 10 : prev+1))
        setBack(false);
    }

    const prevClick = ()=>{
        setVisible((prev)=>(prev ===1 ? 1 : prev-1))
        setBack(true);
    }

    useEffect(()=>{
        console.log(visible)
    },[visible]);

    return (
        <div style={{width:"200px", height:"200px", flexDirection:"column" , position:"relative"}}>
            <AnimatePresence custom={back} mode="wait">
                {
                    [1,2,3,4,5,6,7,8,9,10].map((i)=>(
                        i === visible  
                        ? <Box 
                            custom={back}
                            variants={boxVariants} 
                            initial="invisible" 
                            animate="visible" 
                            exit="exits" 
                            key={visible} //key변경 시 React는 컴포넌트를 re-render
                        >
                            {visible}
                        </Box> 
                        : null
                    ))
                }
            </AnimatePresence>
            <div>
                <button onClick={prevClick}>prev</button>
                <button onClick={nextClick}>next</button>
            </div>
        </div>
    );
};

export default Box8;