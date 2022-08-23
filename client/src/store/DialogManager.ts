export const DialogManager = {
    state: {
        dialogVisibility: false,
        retrievedEmployeeId: null
    },
    mutations: {
        TOGGLE_DIALOG(state: any): void {
            state.dialogVisibility = !state.dialogVisibility;
        },
        LOAD_USER_ID(state: any, id: number): void {
            state.retrievedEmployeeId = id;
        },
        CLEAR_USER_ID(state: any): void {
            state.retrievedEmployeeId = null;
        }
    },
    actions: {

    },
    getters: {

    }
}