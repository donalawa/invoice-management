import  { defineStore } from 'pinia';

export const useFormStore = defineStore("form", {
    state: () => ({
        isActive: false,
        isEditing: false,
        data: { }
    }),

    getters: {
        sidebarMode: (state) => state.isActive
    },

    actions: {
        editInvoice() {
            // OPEN  MODAL
            this.isActive = true;
            // SET  ACTIVE DATA TO THAT OF  EDITING INVOICE
        }
    }
})
