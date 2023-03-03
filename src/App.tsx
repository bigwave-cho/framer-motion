import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

//## AnimatePresence
/*
AnimatePresence를 사용하면 React 트리에서 컴포넌트가 제거될 때 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있습니다. React에는 다음과 같은 수명 주기 메서드가 없기 때문에 종료 애니메이션을 활성화해야 합니다.

exit
이 컴포넌트가 트리에서 제거될 때 애니메이션할 대상입니다.
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
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  top: 300px;
  //box가 슬라이드 되면서 튀는 현상이 발생하는데
  //이는 사라지는 박스가 아직 사라지고 있는 중에 다음 박스가 위치하게 되어서
  // 서로 간섭이 생겨서 그런듯 함.
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    rotateX: 360,
    transition: { duration: 2 },
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (i) =>
            i === visible && (
              <Box
                variants={box}
                initial="invisible"
                animate="visible"
                exit="exit"
                key={i}
              >
                {i}
              </Box>
            )
        )}
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;
