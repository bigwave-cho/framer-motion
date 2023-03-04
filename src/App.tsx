import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
`;

const SwitchBtn = styled(motion.button)`
  width: 100px;
  height: 50px;
  margin-top: 30px;
  grid-column: span 2;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const overlayVariants = {
  initial: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  animate: { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};

const switchVariants = {
  start: (switchBall: boolean) => {
    return {
      scale: 1,
    };
  },
  end: (switchBall: boolean) => {
    return {
      scale: switchBall ? 1.2 : 1,
      color: !switchBall ? 'blue' : 'red',
    };
  },
};

function App() {
  const [id, setId] = useState<string | null>(null);
  const [switchBall, setSwitchBall] = useState(false);
  const onSwitchBall = () => {
    setSwitchBall((prev) => !prev);
  };

  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          //https://www.framer.com/motion/component/#:~:text=%23-,Transform%20origin,-transform%2Dorigin%20has
          // 두 가지 방법을 생각해봄.
          // 1. originX originY : 트랜스폼 기준점 잡기
          // 2. x, y (translate) 사용 : 물체 W,H가 고정일 때 추천
          <Box
            initial={{ x: 0, y: 0 }}
            whileHover={{
              scaleX: 1.05,
              scaleY: 1.05,
              // x축으로 n만큼 이동 y축으로 n만큼 이동..(대신 scale 확대에 따른 px 증가 계산 잘)
              // x: n === 1 || n === 3 ? -13 : 13,
              // y: n === 1 || n === 2 ? -20 : 20,
              originX: n === 1 || n === 3 ? 1 : 0,
              originY: n === 1 || n === 2 ? 1 : 0,
            }}
            transition={{ damping: 10 }}
            onClick={() => setId(n + '')}
            key={n}
            layoutId={`${n}`}
          >
            {(n === 2 && !switchBall) || (n === 3 && switchBall) ? (
              <Circle layoutId="switch" />
            ) : null}
          </Box>
        ))}
      </Grid>
      <SwitchBtn
        custom={switchBall}
        variants={switchVariants}
        initial="start"
        animate="end"
        onClick={onSwitchBall}
      >
        Switch
      </SwitchBtn>

      <AnimatePresence>
        {id ? (
          <Modal>
            <Overlay
              onClick={() => setId(null)}
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
            <Box
              layoutId={`${id}`}
              style={{
                width: 400,
                height: 200,
                zIndex: 1,
                backgroundColor: 'white',
              }}
            />
          </Modal>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
