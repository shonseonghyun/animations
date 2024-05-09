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
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const Overlay = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OverlayBox = styled(motion.div)`
    background-color: white;
    border-radius: 20px;
    width: 400px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
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
            duration:0.5 //백그라운드컬러 변화 소요시간
        }
    },
    exits:{
        // opacity:0,
        backgroundColor:"rgba(0,0,0,0)",
        transition:{ 
            duration:0.5 //백그라운드컬러 변화 소요시간
        }
    }
}

const Project = () => {
    //버튼 구별할 수 있는 state
    const [visible,setVisible] = useState<null|string>();

    return (
        <Wrapper>
            <Grid>
                {
                    ["1","2","3","4"].map((idx)=>(
                        <Box key={idx} onClick={()=>setVisible(idx)} layoutId={idx}>
                            <Text>
                                {idx}
                            </Text>
                        </Box>
                    ))
                }
            </Grid>

                {visible 
                    ? 
                    <AnimatePresence>
                            <Overlay variants={overlayVariants}
                                initial="initial"
                                animate="animate"
                                exit="exits"
                                onClick={()=>setVisible(null)}
                            >
                                <OverlayBox layoutId={visible}>
                                    <Text>
                                        {visible}
                                    </Text>
                                </OverlayBox>
                            </Overlay> 
                    </AnimatePresence>
                    : 
                    null
                }
        </Wrapper>        
    );
};

export default Project;