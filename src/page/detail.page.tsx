import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IApprData } from "../interface/layout.interface";
import { stateApprNo } from "../component/atom.component";
import { http } from "../tools/http.tools";
import { useAtom, useAtomValue } from "jotai";

const Detail = () => {

    const navigate = useNavigate();
    const [apprData, setApprData] = useState<IApprData>();
    const apprNo: number = useAtomValue(stateApprNo);

    useEffect(() => {
        getApprData(apprNo);
    }, []);

    const getApprData = async (apprNo: number) => {
        const api: string = '/spa/apprData';
        const apprData: IApprData = await http.doPost(api, {
            apprNo: apprNo
        });
        setApprData(apprData);
    };

    const moveList = () => {
        navigate('/spa/S00001');
    }
    
    return (
        <>
        {
            apprData &&
            <div>
                <div className="pop_head">
                    <h3>승인내역(매출전표)</h3>
                </div>
                <div className="pop_cont">
                    <div className="card_cont">
                        <div className="receipt_head">
                            <strong className="franNm">{ apprData.franNm }</strong>
                            <div className="ext_info">
                                <span className="date">
                                    { apprData.apprDt + ' ' + apprData.apprTm }
                                </span>
                                <p className="card_info">
                                    <span>{ apprData.fmlYn ? '가족' : '본인' }</span>
                                    <span>
                                    {
                                        apprData.brandCd === 'V' ?
                                        <img src="../image/visa.png" />
                                        : apprData.brandCd === 'M' ?
                                        <img src="../image/master.png" />
                                        : null
                                    }
                                    </span>
                                    <span>{ apprData.cardNo }</span>
                                </p>
                            </div>
                        </div>
                        <div className="receipt_body">
                            <div className="box_dl">
                                <dl>
                                    <dt>이용금액</dt>
                                    <dd>
                                        <span className="pay_amt">
                                            { apprData.payAmt.toLocaleString() }원
                                        </span>
                                    </dd>
                                </dl>
                            </div>
                            <div className="box_dl">
                                <dl>
                                    <dt>승인번호</dt>
                                    <dd><span>{ apprData.apprNo }</span></dd>
                                </dl>
                                <dl>
                                    <dt>매입상태</dt>
                                    <dd><span>{ apprData.status }</span></dd>
                                </dl>
                                <dl>
                                    <dt>거래일자</dt>
                                    <dd><span>{ apprData.apprDt + ' ' + apprData.apprTm }</span></dd>
                                </dl>
                                <dl>
                                    <dt>이용구분</dt>
                                    <dd><span>{ apprData.payTy }</span></dd>
                                </dl>
                            </div>
                            <div className="box_dl">
                                <dl>
                                    <dt>카드종류</dt>
                                    <dd><span>{ apprData.cardType }</span></dd>
                                </dl>
                                <dl>
                                    <dt>거래유형</dt>
                                    <dd><span>{ apprData.trsTpNm }</span></dd>
                                </dl>
                                <dl>
                                    <dt>공급가액</dt>
                                    <dd><span>{ apprData.aprAmt.toLocaleString() }</span></dd>
                                </dl>
                                <dl>
                                    <dt>부가세</dt>
                                    <dd><span>{ apprData.addAmt.toLocaleString() }</span></dd>
                                </dl>
                                <dl>
                                    <dt>봉사료</dt>
                                    <dd><span>{ apprData.serviceAmt.toLocaleString() }</span></dd>
                                </dl>
                            </div>
                            <div className="btn_wrap">
                                <button onClick={ moveList }><span>닫기</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
};

export default Detail;