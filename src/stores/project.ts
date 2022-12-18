import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore("project", () => {
  const names = ref<{ name: string, repo: { name: Array<string>, url: Array<string> } }[]>([
  ]);
  const nowproject = ref("");
  const user_email = ref("");
  return { names, nowproject };
}, {
  persist: true,
});

const user_email = ref("");
function set_user_email(email: string) {
  user_email.value = email;
}
function get_user_email() {
  return user_email.value;
}
  

let projects: any[];

function set_projects(_projects: Array<any>) {
  projects = Object.assign([], _projects);
}

function get_projects() {
  return projects;
}
let now_id: number;

function set_now_project_id(id: number) {
  now_id = id;
}

function get_now_project_id() {
  return now_id;
}

export { set_user_email, get_user_email,set_projects, get_projects, set_now_project_id, get_now_project_id };
