import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled(motion.div)`
  height: 500vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
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
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(135deg, rgb(0, 194, 238), rgb(0, 163, 238))',
      'linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))',
      'linear-gradient(135deg, rgb(0, 238, 95), rgb(36, 238, 0))',
    ]
  );
  //scrollY : px 단위   // progress : 0~1 로 반환
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  //확인해보기
  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x: x, rotateZ: rotateZ, scale: scale }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
