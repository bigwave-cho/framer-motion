import styled from 'styled-components';
import { motion } from 'framer-motion';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// ## How to use styled-components with framer-motion
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box
        //https://www.framer.com/motion/transition/
        //animate 적용하면 약간 튕기는 듯한 모션이 발생하는데
        //모든 애니메이션에는 spring이라는 옵션이 default
        // damping, stifness...
        transition={{ type: 'spring', delay: 0.5 }}
        //initial : initial state
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      />
    </Wrapper>
  );
}

export default App;
