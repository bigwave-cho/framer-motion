import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

//## AnimatePresence
/*
Slider example
https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed=&file=/src/Example.tsx:1616-1623
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
  //custom을 사용하기 위해선 객체->함수로 바꿔
  entry: (back: boolean) => {
    return {
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: (back: boolean) => {
    return {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    };
  },
  exit: (back: boolean) => ({
    // 삼항조건을 통해 중간에 애니메이션 돌리기 가능
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 360,
    transition: { duration: 1 },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  console.log(visible);
  return (
    <Wrapper>
      <AnimatePresence
        // mode="wait" 은 애니메이션이 끝날 때 까지 기다리는 옵션
        //하지만 버튼에 달린 이벤트 핸들러는 그대로 실행되기 때문에
        //기다리지 않고 클릭해버리면 로직이 꼬여서 다음 애니메이션이 실행이 안됨
        //따라서 애니메이션 시간만큼 타임아웃 등을 걸어서 button 또한
        // disabled 될 수 있도록 해도 괜찮을듯.
        mode="wait"
        custom={back}
      >
        <Box
          //custom : 각 애니메이션 컴포넌트에 대해 동적 variants를 다르게 적용할 때 사용할 수 있는 커스텀 데이터
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          // !! React에서는 key를 기준으로 element의 사라짐을 판단함
          // 그래서 key를 남겨두고 visible만 변경해준다면
          // AnimatePresence는 해당 요소가 사라졌다고 판단하여
          // exit 애니메이션을 실행함.
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;
