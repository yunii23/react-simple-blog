import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostMain from "./page/post/PostMain";
import PostView from "./page/post/PostView";

// react-router에 활용될 컴포넌트는 필수적으로 BrowserRouter 하위에 위치해야 함
// exact는 URL이 완벽하게 매칭해야 된다 라고 지정을 해주는 것
// /postView/:no의 경우 :no 자리에 게시글 번호값이 전달될텐데 그 값을 파라미터 키로 no라고 지정해주는 것

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path='/postView/:no' element={<PostView/>} />
                    <Route exact path="/" element={<PostMain/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
