import { useEffect, useState } from "react";
import { IApprData, IToken } from "../interface/layout.interface";
import { http } from "../tools/http.tools";
import { useNavigate } from "react-router-dom";
import { stateApprNo } from "../component/atom.component";
import { useAtom } from "jotai";

const List = () => {

    const navigate = useNavigate();
    const [apprData, setApprData] = useState<IApprData[]>();
    const [, setStateApprNo] = useAtom(stateApprNo);

    useEffect(() => {
        login();
        getApprList();
    }, []);

    const login = async () => {
        const api: string = '/auth/login';
        const token: IToken = await http.doPost(api, {
            userId: '1111',
            password: '2222'
        });

    };

    const getApprList = async () => {
        const api: string = '/spa/apprList';
        const apprList: IApprData[] = await http.doPost(api);
        setApprData(apprList);
    };

    const moveDetail = (apprNo: number) => {
        setStateApprNo(apprNo);
        navigate('/spa/S00002');
    }

    return (
        <div>
            <ul className="usage">
            {
                apprData && 
                apprData.map((row: IApprData) => {
                    return <li>
                        <div className="row_item">
                            <dl>
                                <dt>
                                    <span onClick={ () => moveDetail(row.apprNo) }>{ row.franNm }</span>
                                </dt>
                                <dd>
                                    <span className="date">{ row.apprDt + ' ' + row.apprTm }</span>
                                    <span>{ row.fmlYn ? '가족' : '본인' }&nbsp;</span>
                                    <span>
                                        {
                                            row.brandCd === 'V' ?
                                            <img src="../image/visa.png" />
                                            : row.brandCd === 'M' ?
                                            <img src="../image/master.png" />
                                            : null
                                        }&nbsp;
                                    </span>
                                    <span>{ row.cardNo }&nbsp;</span>
                                    <span>{ row.payTy }</span>
                                </dd>
                            </dl>
                            <div className="row_amt">
                                <span>{ row.payAmt.toLocaleString() }원</span>
                            </div>
                        </div>
                    </li>
                })
            }
            </ul>
        </div>
    )
};

export default List;