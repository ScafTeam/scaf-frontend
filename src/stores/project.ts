import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const names = ref<{ name: string , repo:Array<string>}[]>([
  ]);
  const nowproject = ref('');
  return { names, nowproject };
}, {
  persist: true,
});
