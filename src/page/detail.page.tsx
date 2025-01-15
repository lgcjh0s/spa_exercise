import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IApprData } from "../interface/layout.interface";

const Detail = () => {

    const navigate = useNavigate();
    const [apprData, setApprData] = useState<IApprData>();


    const getApprData = async () => {
        const api: string = '/spa/apprList';
        //const apprList: IApprData[] = await http.doPost(api);
        //setApprData(apprList);
    };

    const moveList = () => {
        navigate('/spa/S00001');
    }
    
    return (
        <div>
            <div className="pop_head">
                <h3>승인내역(매출전표)</h3>
            </div>
            <div className="pop_cont">
                <div className="card_cont">
                    <div className="receipt_head">
                        <strong className="franNm"></strong>
                        <div className="ext_info">
                            <span className="date">

                            </span>
                            <p className="card_info">
                                <span></span>
                                <span></span>
                                <span></span>
                            </p>
                        </div>
                    </div>
                    <div className="receipt_body">
                        <div className="box_dl">
                            <dl>
                                <dt>승인번호</dt>
                                <dd><span></span></dd>
                            </dl>
                            <dl>
                                <dt>매입상태</dt>
                                <dd><span></span></dd>
                            </dl>
                            <dl>
                                <dt>거래일자</dt>
                                <dd><span></span></dd>
                            </dl>
                            <dl>
                                <dt>이용구분</dt>
                                <dd><span></span></dd>
                            </dl>
                        </div>
                        <div className="box_dl">
                            <dl>
                                <dt>카드종류</dt>
                                <dd><span></span></dd>
                            </dl>
                            <dl>
                                <dt>거래유형</dt>
                                <dd><span></span></dd>
                            </dl>
                            <dl>
                                <dt>공급가액</dt>
                                <dd><span></span></dd>
                            </dl>
                            <dl>
                                <dt>부가세</dt>
                                <dd><span></span></dd>
                            </dl>
                            <dl>
                                <dt>봉사료</dt>
                                <dd><span></span></dd>
                            </dl>
                        </div>
                        <div className="btn_wrap">
                            <button onClick={ moveList }><span>닫기</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Detail;