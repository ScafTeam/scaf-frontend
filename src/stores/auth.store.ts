import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import api from '@/api'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    email: '',
    returnUrl: '',
  }),
  getters: {
    isAuthenticated(): boolean {
      return !!this.email
    },
  },
  actions: {
    async signIn(email: string, password: string) {
      try {
        const _ = await api.signIn(email, password)
        ElMessage.success('Sign in successfully')
        this.email = email
        router.push(this.returnUrl || '/')
      } catch (e: any) {
        return
      }
    },
    async signOut() {
      this.email = ''
      router.push('/')
    }
  },
  persist: true,
})