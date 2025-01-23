const StorageTool = () => {

    const ACCESS_TOKEN_KEY: string = 'ACC_TKN_KEY';

    const setAccessToken = (accessToken: string) => {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    };
};

const storage = StorageTool();

export {
    storage
}