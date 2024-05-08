import { click } from "@testing-library/user-event/dist/click";
import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";




const BiggerBox = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255,255, 255, 0.2);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const SmallBox = styled(motion.div)`
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    hover: {
        scale:1.2,
        rotateZ:90
    },
    click:{
        scale:0.8,
        borderRadius:"100px"
    },
    drag:{
        backgroundColor: "rgba(46, 204, 113)",
        transition:{
            duration:2
        }
    }
}


const Box3 = () => {
    const biggerBoxRef = useRef<HTMLDivElement>(null);

    return (
        <BiggerBox ref={biggerBoxRef}>
            {/* <Box whileHover={{ scale:1.2, rotateZ:90}} whileTap={{scale:0.5,borderRadius:"100px"}}/> */}
            <SmallBox 
                drag 
                dragConstraints={biggerBoxRef} //drag 시 drag범위 조정
                variants={boxVariants} 
                whileHover="hover" 
                whileTap="click" 
                whileDrag="drag"
                dragSnapToOrigin //원래 위치로 goBack
                // dragElastic={0.5} //기본적으로 원을 초기 위치로 당기는 힘 //0이면 부모박스 안에 갇힘
            />
        </BiggerBox>
    );
};

export default Box3;