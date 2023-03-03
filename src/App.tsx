import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  color: white;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: 'rgba(255, 255, 255, 0)' },
  end: {
    fill: 'rgba(255, 255, 255, 1)',
    pathLength: 1,
    // transition을 variants에서 한번에 주게 되면
    // pathLength, fill 등에 한꺼번에 적용되기 때문에
    // 차등을 주고 싶다면 특정 프로퍼티에 따로 transition을 주면 됨.
    // transition: { duration: 5 },
  },
};

function App() {
  return (
    <Wrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path // motion 적용을 위해 path-> motion.path
          // initial={{ pathLength: 0, fill: 'rgba(255,255,255,0' }}
          // animate={{
          //   pathLength: 1,
          //   fill: 'rgba(255,255,255,1',
          // }}
          // transition={{ duration: 5 }}
          // ## 위 속성을 variants, initial, animate 로 간단히.
          variants={svg}
          initial="start"
          animate="end"
          // 트랜지션 차등 적용하기.
          transition={{
            default: { duration: 5 }, //default는 기본적으로 적용되는 값
            fill: { duration: 2, delay: 5 }, // 속성 명시하면 차등 적용 가능
          }}
          // 아래처럼 currentColor로 두면 Styled-component의 스타일을 받음.
          // fill="currentColor"
          d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
        />
      </Svg>
    </Wrapper>
  );
}

export default App;
