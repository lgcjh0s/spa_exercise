import { useEffect, useState } from "react";
import { IApprData } from "../interface/layout.interface";

const List = () => {

    const [apprData, setApprData] = useState<IApprData>();

    useEffect(() => {

    }, []);

    return (
        <div>
            <ul className="usage">

            </ul>
        </div>
    )
};

const ApprRow = (apprData: IApprData) => {

    return <li>
        <div className="row_item">
            <dl>
                <dt>
                    <a>{ apprData.franNm }</a>
                </dt>
                <dd>
                    <span className="data">{ apprData.apprDt } {apprData.apprTm }</span>
                    <span></span>
                </dd>
            </dl>
        </div>
    </li>
}

export default List;