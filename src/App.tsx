import styled from 'styled-components';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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

function App() {
  const x = useMotionValue(0);
  console.log(x); // 움직일 때 콘솔 찍어도 안나옴.
  // 이유 : motionvalue는 state 상태가 아님. 즉 모션을 실행시킬때마다 리렌더 되지 않음. 굳.

  // 그럼에도 불구하고 아래 방법으로 x 값은 확인 가능
  useEffect(() => {
    //x.get() x값 가져오기
    x.onChange(() => console.log(x.get()));
  }, [x]);

  return (
    <Wrapper>
      <button
        // x.set(200) x값 200으로
        onClick={() => x.set(200)}
      >
        click me
      </button>
      <Box style={{ x: x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
