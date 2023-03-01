import styled from 'styled-components';
import { motion } from 'framer-motion';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// ## How to use Variants part 2
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  place-self: center;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    scale: 0.1,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      // delayChildren: 0.5, : 한번에 딜레이
      staggerChildren: 0.3, //자식 컴포 하나씩 0.5 텀 두고 적용
    },
  },
};

// delay children: https://www.framer.com/motion/transition/#orchestration:~:text=%23-,Orchestration,-%23

const circleVariants = {
  //framer는 부모의 initial, animate를 자식에게 복붙하기 때문에
  //부모 컴포와 같은 네이밍 컨벤션 따르기
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    // x, y는 motion에서만 사용하는 프로퍼티
    y: 0,
  },
};
function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        {/* <Circle
          //기본적으로 부모에게 적용된 animation은 자식 컴포에 손수 적용안해도 아래처럼 적용되고 있음.
          initial="start"
          animate="end"
        />
        <Circle initial="start" animate="end" />
        <Circle initial="start" animate="end" />
        <Circle initial="start" animate="end" /> */}
      </Box>
    </Wrapper>
  );
}

export default App;
