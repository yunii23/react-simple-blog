import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import { postList } from "../../Data";

// 컴포넌트 내부에서 state 변수로 사용될 dataList를 useState()를 통하여 생성해주고
// useEffect()로 Component가 최초로 Render 되었을 때 위에서 생성해준 postList를 setDataList() 함수를 이용해
// dataList의 값을 초기화 해주도록 함
// 그리고 나서 dataList를 map() 함수를 활용해서 테이블 형태로 render 하도록 함

const PostList = (props) => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(postList);
    }, [ ]);

    return (
        <>
            <CommonTable headersName={["글번호", "제목", "등록일", "조회수"]}>
                {
                    dataList ? dataList.map((item, index) => {
                        return (
                            <CommonTableRow key={index}>
                                <CommonTableColumn>{item.no}</CommonTableColumn>
                                <CommonTableColumn>
                                    <Link to={`/postView/${item.no}`}>{item.title}</Link>
                                </CommonTableColumn>
                                <CommonTableColumn>{item.createDate}</CommonTableColumn>
                                <CommonTableColumn>{item.readCount}</CommonTableColumn>
                            </CommonTableRow>
                        )
                    }) : ''
                }
            </CommonTable>
        </>
    );
};

export default PostList;
