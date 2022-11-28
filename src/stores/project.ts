import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }

  const names = ref<{ name: string }[]>([
    { name: 'test' },
  ]);
  const nowproject = ref('');
  return { names, nowproject };
})
