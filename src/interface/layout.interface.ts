interface IApprData {
    apprNo: number;
    franNm: string;
    apprDt: string;
    apprTm: string;
    fmlYn: boolean;
    brandCd: string;
    cardNo: string;
    payTy: string;
    payAmt: number;
    status: string;
    cardType: string;
    aprAmt: number;
    addAmt: number;
    trsTpNm: string;
    serviceAmt: number;
}

interface IToken {
    accessToken: string;
    refreshToken: string;
}

export {
    IApprData,
    IToken
}