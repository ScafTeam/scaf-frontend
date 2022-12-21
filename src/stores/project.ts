import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore("project", () => {
  const names = ref<{ name: string, repo: { name: Array<string>, url: Array<string> } }[]>([
  ]);
  const nowproject = ref("");
  return { names, nowproject };
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