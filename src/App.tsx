import styled from 'styled-components';
import { motion } from 'framer-motion';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

//framer 적용방법 : <motion.원하는태그>
function App() {
  return (
    <Wrapper>
      <Box />
      <motion.header></motion.header>
    </Wrapper>
  );
}

export default App;

/*
CRA ver4일 경우 ECMAscript moduel을 지원하지 않아 framer complier 에러가 발생


해결 방법
CRACO: CRA 설정 덮어씌움.

https://github.com/dilanx/craco

CRACO를 설치, 오버라이드

npm install @craco/craco --save

craco.config.js 파일 생성

module.exports = {
webpack: {
configure: {
module: {
rules: [
{
type: 'javascript/auto',
test: /\.mjs$/,
include: /node_modules/,
},
],
},
},
},
}
*/
