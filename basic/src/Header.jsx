import './Header.css';

function Header(){

    const num1 = 8888;
    const num2 = 66;
    const greeting = '안녕하세요';
    const program = '리액트';

    return(
        <header>
            <h1 style={{backgroundColor:'yellow', color:'red'}}>logo</h1>
            <p style={{padding:'10px 0',}}>숫자 {num1}에서 {num2}을 뺀 결과 {num1-num2}</p>
            <p style={{}}>{greeting}, {program} 출력결과 {greeting+program}</p>
            {/* const isLogin = false; 일때 p태그에 '로그인 필요'출력하기, 반대로 true면 p태그에 '로그인 성공' 출력하기 */}
            <p>{isLogin ? '로그인 성공' : '로그인 필요'}</p>
        </header>
    )
}

export default Header;