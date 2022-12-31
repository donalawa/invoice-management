import  {  defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        themeMode: 'dark'
    }),

    getters: {
        getThemeMode: (state) => state.themeMode
    }
});

