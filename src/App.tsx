import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
/*
## layout : layout 속성을 부여한 요소의 변화를 감지하여
레이아웃이 변할 때마다 자동으로 애니메이션 적용.

자세히는 layout에 커서 올려보면 나옴. 참고하셈
https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations

## sharedLayout
Animate between components
AnimateSharedLayout은 동일한 layoutId prop을 가진 모션 컴포넌트들 간에 애니메이션을 적용할 수 있습니다. layoutId가 있는 새 컴포넌트가 추가되고 다른 컴포넌트가 제거되면 이전 컴포넌트에서 새 컴포넌트로 레이아웃 애니메이션을 수행합니다. 새 컴포넌트는 이전 컴포넌트의 애니메이션 값도 초기 상태로 상속합니다. 따라서 시각적으로 하나의 연속 컴포넌트로 처리됩니다.
ex) isSelected && < motion.div layoutId="underline" />
https://www.framer.com/docs/animate-shared-layout/#animate-between-components
*/
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
      <Box>
        {!clicked ? (
          <Circle
            // layoutId를 일치시켜주면 framer 가 해당 컴포넌트들을 연결시켜버림..ㄷㄷ
            layoutId="circle"
            style={{ borderRadius: '50px' }}
          />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
