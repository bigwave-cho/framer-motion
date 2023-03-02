import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
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
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  /*
  useTransform 훅을 통해 MotionValues를 연결합니다.
  useTransform()는 한 값 범위에서 다른 값 범위로 매핑하여 다른 MotionValue의 output을 변환하는 MotionValue를 만듭니다.
  x(Motion Value)값을 다른 output값으로 변환해준다.
  ex) x: -800 => 2    x : 800 => 0.1
  */

  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    scale.onChange(() => console.log(scale.get()));
  }, [x, scale]);

  return (
    <Wrapper>
      <Box style={{ x: x, scale: scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
