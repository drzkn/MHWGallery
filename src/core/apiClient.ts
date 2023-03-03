import axios from 'axios';
import { apiClientCreator } from './apiClientCreator';

const BASE_URL = 'https://mhw-db.com'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
})

export const apiClient = apiClientCreator(axiosInstance)
