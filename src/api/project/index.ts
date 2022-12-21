import { api } from '../index';

const getKanbanAPI = (email: string, project_id: number) => {
  return api.get(`${email}/project/${project_id}/kanban`);
};

export { getKanbanAPI };