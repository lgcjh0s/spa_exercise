import { IRespData } from "../interface/layout.interface";

const Http = () => {
    const doGet = async (url: string, data: string = ''): Promise<IRespData<any>> => {
        const resp: Response = await fetch(url + '?' + data, {
            method: 'GET'
        });
        return resp.json();
    }

    const doPost = async (url: string, data: any = {}): Promise<IRespData<any>> => {
        const resp: Response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return resp.json();
    }

    return {
        doGet,
        doPost
    }
}

const http = Http();
export {
    http
}