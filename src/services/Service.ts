import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
})


export const create = async (url: string, data: Object, setData: Function, header: Object) => {
    const response = await api.post(url, data, header)
    setData(response.data)
}

export const update = async (url: string, data: Object, setData: Function, header: Object) => {
    const response = await api.put(url, data, header)
    setData(response.data)
}

export const delet = async (url: string, header: Object) => {
    await api.delete(url, header)
}