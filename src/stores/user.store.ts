import { defineStore } from 'pinia'
import { computed } from 'vue'
import api from '@/api'
import { useAuthStore } from '@/stores'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: computed(() => useAuthStore().email),
    avatar: '',
    bio: '',
    nickname: '',
    projects: [] as string[]
  }),
  actions: {
    async getUserInfo() {
      if (!this.email) {
        this.avatar = ''
        this.bio = ''
        this.nickname = ''
        this.projects = []
        return
      }
      try {
        const { data } = await api.getUserData(this.email)
        this.avatar = data.data.avatar
        this.bio = data.data.bio
        this.nickname = data.data.nickname
        this.projects = data.data.projects
      } catch (e: any) {
        return
      }
    },
    addProject(project: string) {
      this.projects.push(project)
    }
  },
  persist: true,
})