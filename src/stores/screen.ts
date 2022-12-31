import { defineStore } from 'pinia';

export const useScreenStore = defineStore('screen', {
    state: () => ({
        deviceSize: window.innerWidth
    }),

    getters: {
        getDeviceType: (state) => {
            if(state.deviceSize < 768) {
                return 'phone'
            } else if(state.deviceSize < 1440) {
                return 'tablet'
            }else {
                return 'desktop'
            }
        }
    }
})

