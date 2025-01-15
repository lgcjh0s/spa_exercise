import { useEffect, useState } from "react";
import { IApprData } from "../interface/layout.interface";
import { http } from "../tools/http.tools";
import { useNavigate } from "react-router-dom";

const List = () => {

    const [apprData, setApprData] = useState<IApprData[]>();
    const navigate = useNavigate();

    useEffect(() => {
        getApprList();
    }, []);

    const getApprList = async () => {
        const api: string = '/spa/apprList';
        const apprList: IApprData[] = await http.doPost(api);
        setApprData(apprList);
    };

    const moveDetail = () => {
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
                                    <span onClick={ moveDetail }>{ row.franNm }</span>
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