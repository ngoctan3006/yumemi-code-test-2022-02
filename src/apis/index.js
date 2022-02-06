import axios from 'axios';
import { apiUrl, X_API_KEY } from '../common/constants';

axios.defaults.headers.common['X-API-KEY'] = X_API_KEY;

export const getPrefectures = () => axios.get(`${apiUrl}/prefectures`);

export const getReport = (prefCode, cityCode = '-') =>
    axios.get(
        `${apiUrl}/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode}`
    );
