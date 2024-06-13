import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', {
  state: () => ({
    userId:'',
    user: 
      {
        id: 1,
        username: 'John Doe',
        password: 'password',
        isNew: true,
        avator:'male'
      },
    isLoading: false,
    error: null
  }),

  
})

export { useAuthStore }
