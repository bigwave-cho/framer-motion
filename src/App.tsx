import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
/*
layout : layout 속성을 부여한 요소의 변화를 감지하여
레이아웃이 변할 때마다 자동으로 애니메이션 적용.

자세히는 layout에 커서 올려보면 나옴. 참고하셈
https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations
*/
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <Box
        style={{
          justifyContent: clicked ? 'center' : 'flex-start',
          alignItems: clicked ? 'center' : 'flex-start',
        }}
      >
        <Circle layout />
      </Box>
    </Wrapper>
  );
}

export default App;
