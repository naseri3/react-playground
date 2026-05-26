import { useState } from 'react'
import Button from './assets/Button'

const user = {
    name:'Hedy Lamarr',
    imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
    imageSize: 90,
};

function AdminPanel() {
  return <h2>관리자 페이지</h2>;
}

function LoginForm() {
  return <h2>로그인 해주세요</h2>;
}

function App() {
  const [count, setCount] = useState(0);

//   로그인 여부
  const isLoggedIn = false;

  return (
    <>
      <h1>Hello REACT</h1>
      <Button/>

      <img className='avatar' src={user.imageUrl} style={{
        width: user.imageSize,
        height:user.imageSize
      }}
      />

     
     {/* 조건부 삼항 연산자 */}
     <div>
        {isLoggedIn ? (<AdminPanel />) : (<LoginForm />)}
     </div>

     {/* && 연산자 */}
     <div>
        {isLoggedIn && <AdminPanel />}
     </div>
     {/* 이러한 접근 방식은 어트리뷰트를 조건부로 지정할 때도 동작한다.
         이러한 자바스크립트 문법에 익숙하지 않다면 항상 if...else를 사용하는 것으로 시작한다
     */}
    </>
  )
}

export default App
