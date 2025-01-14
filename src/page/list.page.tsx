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

export default List;