import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef } from 'react';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {
    rotateZ: 90,
  },
  click: { borderRadius: '100px' },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          variants={boxVariants}
          // limiting drag direction
          // drag="x"
          drag
          // dragConstraints : limiting droppable region
          // 1. manually decided
          // dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
          // 2. decided by parent node
          dragConstraints={biggerBoxRef}
          // drag 후 처음 위치로 복귀
          dragSnapToOrigin
          // dragElastic : 0~1 (0: 영역 밖에서 작용하는 힘 min / 1 : max) 써보면 앎.
          dragElastic={0.5}
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
