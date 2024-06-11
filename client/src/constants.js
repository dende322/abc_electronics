const SERVER_IP = "localhost:3977";

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API: `http://${SERVER_IP}/api/v1`,
    API_ROUTES:{
        AUTH:{
            REGISTER: "auth/register",
        },
        CLIENT:{
            GET_ALL_CLIENTS : "clients",
            GET_CLIENT : "client",
            CREATE_CLIENT : "auth/register",
            UPDATE_CLIENT : "client",
            DELETE_CLIENT : "client"
        }
    }
};