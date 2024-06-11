import { ENV } from '../constants';

export class Client {
    baseAPI = ENV.BASE_API;

    async getClients() {
        try {
            const url = `${this.baseAPI}/${ENV.API_ROUTES.CLIENT.GET_ALL_CLIENTS}`;

            const response = await fetch(url);
            const result = await response.json();

            if (response.status !== 200) throw result;
            return result;

        } catch (error) {
            throw error;
        }
    }

    async getClient(id) {
        try {
            const url = `${this.baseAPI}/${ENV.API_ROUTES.CLIENT.GET_CLIENT}/${id}`;

            const response = await fetch(url);
            const result = await response.json();

            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }

    async deleteClient(id) {
        try {
            const url = `${this.baseAPI}/${ENV.API_ROUTES.CLIENT.DELETE_CLIENT}/${id}`;
            const params = {
                method: "DELETE"
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }

    async createClient(data, metodo) {
        try {
            const url = `${this.baseAPI}/${ENV.API_ROUTES.CLIENT.CREATE_CLIENT}`;
            const params = {
                method: metodo,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }

            const responce = await fetch(url, params);
            console.log(responce);
            const result = await responce.json();

            if (responce.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateClient(id, data, metodo) {
        try {
            const url = `${this.baseAPI}/${ENV.API_ROUTES.CLIENT.UPDATE_CLIENT}/${id}`;
            const params = {
                method: metodo,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }

            const responce = await fetch(url, params);
            console.log(responce);
            const result = await responce.json();

            if (responce.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }
}