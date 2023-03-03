import { AxiosInstance, AxiosRequestConfig } from 'axios'

export const apiClientCreator = (axiosInstance: AxiosInstance) => ({
    get: function <P>(path: string, config?: AxiosRequestConfig) {
        return axiosInstance.get<P>(path, config).then(response => ({
            ...response,
            ...response.data,
        }))
    }
})