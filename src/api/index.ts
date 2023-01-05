import axios from 'axios';
import { ElMessage } from 'element-plus';

const api = axios.create({
  baseURL: '/api/',
  timeout: 1000,
});

api.interceptors.request.use(
  (config) => {
    config['url'] += '/';
    return config;
  },
  (error) => {
    ElMessage({ type: 'error', message: error });
  },
);

api.interceptors.response.use(
  (ret) => {
    return ret;
  },
  (res) => {
    ElMessage({ type: 'error', message: res.response.data.message });
    throw new Error(res.response.data);
  },
);

// if data value is null, set value to ''''
const checkDataField = (keys: string[], data: any) => {
  keys = keys.map((key) => key.toLowerCase());
  keys.forEach((key) => {
    if (data[key] === null) {
      data[key] = '';
    }
  });

  return data;
};

export default {
  signIn: (email: string, password: string) => {
    return api.post('signin', { email, password });
  },
  signUp: (email: string, password: string) => {
    return api.post('signup', { email, password });
  },
  forgot: (email: string) => {
    return api.post('forgot', { email });
  },
  getUserData: (email: string) => {
    return api.get(`user/${email}`);
  },
  updateUserData: (email: string, data: any) => {
    let keys = ['avatar', 'bio', 'nickname'];
    data = checkDataField(keys, data);
    return api.put(`user/${email}`, data);
  },
  updateUserPassword: (email: string, password: string) => {
    return api.put(`user/${email}/reset`, { password });
  },
  getProjectList: (email: string) => {
    return api.get(`user/${email}/project`);
  },
  createProject: (email: string, data: any) => {
    let keys = ['name', 'devTools', 'devMode']
    data = checkDataField(keys, data);
    return api.post(`user/${email}/project`, data);
  },
  getProjectSetting: (email: string, project_name: string) => {
    return api.get(`user/${email}/project/${project_name}`);
  },
  updateProject: (email: string, project_name: string, data: any) => {
    let keys = ['name', 'devTools', 'devMode']
    data = checkDataField(keys, data);
    return api.put(`user/${email}/project/${project_name}`, data);
  },
  deleteProject: (email: string, project_name: string) => {
    return api.delete(`user/${email}/project/${project_name}`);
  },
  getRepositoryList: (email: string, project_name: string) => {
    return api.get(`user/${email}/project/${project_name}/repo`);
  },
  addRepository: (email: string, project_name: string, data: any) => {
    let keys = ['name', 'url'];
    data = checkDataField(keys, data);
    return api.post(`user/${email}/project/${project_name}/repo`, data);
  },
  updateRepository: (email: string, project_name: string, data: any) => {
    let keys = ['id', 'name', 'url'];
    data = checkDataField(keys, data);
    return api.put(`user/${email}/project/${project_name}/repo`, data);
  },
  deleteRepository: (email: string, project_name: string, repo_id: string) => {
    let data = { 'id': repo_id };
    return api.delete(`user/${email}/project/${project_name}/repo`, { data });
  },
  getWorkflowList: (email: string, project_name: string) => {
    return api.get(`user/${email}/project/${project_name}/workflow`);
  },
  addWorkflow: (email: string, project_name: string, data: any) => {
    let keys = ['name'];
    data = checkDataField(keys, data);
    return api.post(`user/${email}/project/${project_name}/workflow`, data);
  },
  updateWorkflow: (email: string, project_name: string, data: any) => {
    let keys = ['id', 'name'];
    data = checkDataField(keys, data);
    return api.put(`user/${email}/project/${project_name}/workflow`, data);
  },
  deleteWorkflow: (email: string, project_name: string, workflow_id: string) => {
    let data = { 'id': workflow_id };
    return api.delete(`user/${email}/project/${project_name}/workflow`, { data });
  },
  addTask: (email: string, project_name: string, data: any) => {
    let keys = ['name', 'workflowId', 'description'];
    data = checkDataField(keys, data);
    return api.post(`user/${email}/project/${project_name}/task`, data);
  },
  updateTask: (email: string, project_name: string, data: any) => {
    let keys = ['id', 'name', 'workflowId', 'description'];
    data = checkDataField(keys, data);
    return api.put(`user/${email}/project/${project_name}/task`, data);
  },
  moveTask: (email: string, project_name: string, data: any) => {
    let keys = ['id', 'workflowId', 'newWorkflowId'];
    data = checkDataField(keys, data);
    return api.patch(`user/${email}/project/${project_name}/task/`, data);
  },
  deleteTask: (email: string, project_name: string, task_id: string, workflow_id: string) => {
    let data = { 'id': task_id, 'workflowId': workflow_id };
    return api.delete(`user/${email}/project/${project_name}/task`, { data });
  },
  getProjectMember: (email: string, project_name: string) => {
    return api.get(`user/${email}/project/${project_name}/member`);
  },
  addProjectMember: (email: string, project_name: string, data: any) => {
    let keys = ['email'];
    data = checkDataField(keys, data);
    return api.post(`user/${email}/project/${project_name}/member`, data);
  },
  deleteProjectMember: (email: string, project_name: string, member_email: string) => {
    let data = { 'email': member_email };
    return api.delete(`user/${email}/project/${project_name}/member`, { data });
  },
  getProjectDocs: (email: string, project_name: string) => {
    return api.get(`user/${email}/project/${project_name}/docs`);
  },
  addProjectDocs: (email: string, project_name: string, data: any) => {
    let keys = ['title', 'content'];
    data = checkDataField(keys, data);
    return api.post(`user/${email}/project/${project_name}/docs`, data);
  },
  updateProjectDocs: (email: string, project_name: string, data: any) => {
    let keys = ['id', 'title', 'content'];
    data = checkDataField(keys, data);
    return api.put(`user/${email}/project/${project_name}/docs`, data);
  },
  deleteProjectDocs: (email: string, project_name: string, doc_id: string) => {
    let data = { 'id': doc_id };
    return api.delete(`user/${email}/project/${project_name}/docs`, { data });
  },
}