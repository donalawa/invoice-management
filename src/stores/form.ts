import  { defineStore } from 'pinia';


export const useFormStore = defineStore("form", {
    state: () => ({
        count: window.screen,
    })
})

