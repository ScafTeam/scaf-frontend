import axios from 'axios';
import { ElMessage } from 'element-plus';

import { getKanbanAPI } from './project';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
});

api.interceptors.request.use(
  (config) => {
    console.log('config', config);
    config['url'] += '/';
    return config;
  },ㄠ
  (error) => {
    ElMessage({ type: "error", message: error });
  },
);

api.interceptors.response.use(
  (ret) => {
    return ret
  },
  (error) => {
    ElMessage({ type: "error", message: error });
  },
);

export { api, getKanbanAPI };