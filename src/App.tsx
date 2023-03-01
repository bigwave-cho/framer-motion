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

const boxVariants = {
  hover: {
    scale: 2,
    rotateZ: 90,
  },
  click: { scale: 1, borderRadius: '100px' },
  drag: { backgroundColor: 'rgb(46,204,113)', transition: { duration: 3 } },
};

// delay children: https://www.framer.com/motion/transition/#orchestration:~:text=%23-,Orchestration,-%23

function App() {
  return (
    <Wrapper>
      <Box
        variants={boxVariants}
        drag
        // color를 "blue", "white"처럼 넣으면 애니메이션 적용이 안된다.
        // 아래처럼 rgb or rgba로 넣자
        whileDrag="drag"
        // whileHover={조건 ? "hover":"other"} 조건문도 가능
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}

export default App;
