import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
    width: 200px;
    height: 200px;
    background:linear-gradient(135deg,#e09,#d0e);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-template-rows: 1fr 1fr; */
    gap:10px;
    div:first-child,
    div:last-child{
        grid-column: span 2;
    };
`;

const Box = styled(motion.div)`
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box10 = () => {
    return (
        <Grid>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Grid>
    );
};

export default Box10