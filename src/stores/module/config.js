import { defineStore } from 'pinia'
import { supabase } from '@/libs/supabase.js'
import { useRouter } from 'vue-router'

const useConfigStore = defineStore('config', {
  state: () => ({
    userId: null,
    user: {},
    isNew: true,
    config: {
      appname: 'vecu',
      version: '1.0.0'
    }
  }),

  getters: {
    getConfig(state) {
      return state.config
    },
   
  },
  actions: {
    async updateUser(profile) {
      
    const { data, error } = await supabase.from('users').select().eq('username', profile.username)
    if (error) {
     return { e: true}
    } else {
      if (data.length&&data[0].id!==this.user.id) {
      return { e: true}
      } else {
        this.user ={...this.user,...profile }
        console.log('profile',this.user)
        const { error } = await supabase.from('users').update(this.user).eq('id', this.user.id)
        if (error) {
          return { e: true}
       }
       return { e: false}
      }
    }
    },
   async getUser() {
    
      //const { data } = await supabase.from('users').select().eq('id', this.userId)
        return this.user 
      },
      getUserId() {
        return this.user.id
      },
    saveUserData(user) {
      this.user = user
      this.userId = user.id
    },
    isNewUser() {
       
      return this.isNew
    },
    async init(userId) {
      const { data, error } = await supabase.from('users').select().eq('id', userId)
      if (error) {
       this.error = true
      } else {
        if (data.length) {
          this.saveUserData(data[0])
          this.isNew= false
        
     
        } else {
          const newUser ={
            id: userId,
            username: userId,
            password: userId,
            isNew: false,
            isPremium: false,
            avator: 'male'
          }
          const {error } = await supabase.from('users').insert(newUser)
          if (error) {
            console.error( "Please try again")
          } else {
            this.saveUserData(newUser)
            this.isNew= true
          }
        }
      }
    }
  }
})
export { useConfigStore }
