import { MotionValue, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

interface IBox4Props{
    x : MotionValue
}

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

const Box4 = ({x}:IBox4Props) => {
    //MotionValue는 React State가 아니기 때문에 Motion Value값이 바뀌어도 리랜더링이 일어나지 않는다.
    // const x = useMotionValue(0); 
    const scale = useTransform(x,[-200,0,200],[2,1,0.1]);
    const rotation = useTransform(x,[-200,200],[-360,360]);
    const gradient = useTransform(
        x,
        [-200,0,200],
        [
            "linear-gradient(135deg,#47ee00,#ee9300)",
            "linear-gradient(135deg,#e09,#d0e)",
            "linear-gradient(135deg,#091518,#00eeee)"
        ]
    );
    const {scrollY,scrollYProgress} = useScroll();
    const scrollScale = useTransform(scrollYProgress,
        [0,1],
        [1,2]
    )
    // useEffect(()=>{
    //     x.on(
    //             "change",
    //             ()=>
    //             console.log(gradient.get())
    //         )
    // },[x]);

    return (
        <div>
            <Box style={{
                    x,
                    scale:scrollScale,
                    rotateZ:rotation
                }} 
                drag="x" 
                dragSnapToOrigin 
            />
            <button onClick={()=>x.set(100)}>click me</button>
        </div>
    );
};

export default Box4;