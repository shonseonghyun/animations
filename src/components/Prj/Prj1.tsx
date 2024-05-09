import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    background:linear-gradient(135deg,#e09,#d0e);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Grid = styled(motion.div)`
    display: grid;
    width:50vw;
    height: 50vh;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;

const Box = styled(motion.div)`
    background-color: white;
    border-radius: 20px;
    height: 200px;
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OverlayBox = styled(motion.div)`
    background-color: white;
    border-radius: 20px;
    width: 400px;
    height: 200px;
`;


const overlayVariants = {
    initial: {
        // opacity:0,
        backgroundColor:"rgba(0,0,0,0)"
    },
    animate:{
        // opacity:1,
        backgroundColor:"rgba(0,0,0,0.5)",
        transition:{
            duration:0.3
        }
    },
    exits:{
        // opacity:0,
        backgroundColor:"rgba(0,0,0,0)",
        transition:{
            duration:0.3
        }
    }
}

const Prj1 = () => {
    const [clicked,setClicked] = useState(false);
    const toggle = ()=>{
        setClicked((prev)=>!prev);
    }

    return (
        <Wrapper onClick={toggle}>
            <Grid>
                <Box layoutId='hello'/>
                <Box />
                <Box />
                <Box />
            </Grid>

            <AnimatePresence>
                {clicked 
                    ? 
                    <Overlay variants={overlayVariants}
                        initial="initial"
                        animate="animate"
                        exit="exits">
                        <OverlayBox  layoutId='hello' />
                    </Overlay> 
                    : 
                    null
                }
            </AnimatePresence>
        </Wrapper>        
    );
};

export default Prj1;