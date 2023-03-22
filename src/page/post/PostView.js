import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostByNo } from "../../Data";
import { useNavigate } from "react-router";
import "./Post.css";

const PostView = ({ history, location, match }) => {
    const [data, setData] = useState({});

    const { no } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        setData(getPostByNo(no));
    }, []);

    // react-router를 통해 컴포넌트가 렌더링될 때 컴포넌트 props로 history, location, match 객체들이 전달
    // router 파라미터로 넘어온 no 값으로 useEffect()를 통해 게시글 정보를 가져올 수 있도록하고 
    // 목록으로 돌아가기 버튼을 클릭했을 때 뒤로가기와 동일한 Action인 history.getBack() 함수를 호출하도록 함
    // 그 객체들에 파라미터, url, page history와 같은 값들이 포함되어 있음
    
    return (
        <>
            <h2 align="center">게시글 상세정보</h2>

            <div className="post-view-wrapper">
                {data ? (
                    <>
                        <div className="post-view-row">
                            <label>게시글 번호</label>
                            <label>{data.no}</label>
                        </div>
                        <div className="post-view-row">
                            <label>제목</label>
                            <label>{data.title}</label>
                        </div>
                        <div className="post-view-row">
                            <label>작성일</label>
                            <label>{data.createDate}</label>
                        </div>
                        <div className="post-view-row">
                            <label>조회수</label>
                            <label>{data.readCount}</label>
                        </div>
                        <div className="post-view-row">
                            <label>내용</label>
                            <div>{data.content}</div>
                        </div>
                    </>
                ) : (
                    "해당 게시글을 찾을 수 없습니다."
                )}
                <button
                    className="post-view-go-list-btn"
                    onClick={() => navigate(-1)}
                >
                    목록으로 돌아가기
                </button>
            </div>
        </>
    );
};

export default PostView;
