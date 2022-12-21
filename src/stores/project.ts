import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useProjectStore = defineStore("project", () => {
//   const names = ref<{ name: string, repo: { name: Array<string>, url: Array<string> } }[]>([
//   ]);
//   const nowproject = ref("");
//   const user_email = ref("");
//   return { names, nowproject };
// }, {
//   persist: true,
// });

export const useUserStore = defineStore("user", () => {
  const user_email = ref<string>("");
  const get_user_email = computed(() => {
    return user_email.value;
  });

  const set_user_email = (email: string) => {
    user_email.value = email;
  };
  return { user_email, get_user_email, set_user_email };
}, {
  persist: true,
});


export const useProjectStore = defineStore("project", () => {
  // let projects: any[];
  const projects = ref<any[]>([]);
  const now_id = ref<number>(0);
  const now_name = ref<string>("");
  const get_projects = computed(() => {
    return projects.value;
  });
  const get_now_project_id = computed(() => {
    return now_id.value;
  });
  const get_now_project_name = computed(() => {
    return now_name.value;
  });
  const set_projects = (_projects: Array<any>) => {
    projects.value = Object.assign([], _projects);
  };
  const set_now_project_id = (id: number) => {
    now_id.value = id;
  };
  const set_now_project_name = (name: string) => {
    now_name.value = name;
  };
  return {  now_id,now_name, get_projects, get_now_project_id, set_projects, set_now_project_id, get_now_project_name, set_now_project_name};
}, {
  persist: true,
});

const userEmail = ref("");

function setUserEmail(email: string):void {
  userEmail.value = email;
}

function getUserEmail():string {
  return userEmail.value;
}

export { setUserEmail, getUserEmail };
