import  {  defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        themeMode: 'light'
    }),

    getters: {
        getThemeMode: (state) => state.themeMode
    }
});