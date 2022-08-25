export const DialogManager = {
    state: {
        dialogVisibility: false,
        employeeInfo: {
            retrievedEmployeeId: null,
            isPastEmployee: null
        }
    },
    mutations: {
        TOGGLE_DIALOG(state: any): void {
            state.dialogVisibility = !state.dialogVisibility;
        },
        LOAD_USER_ID(state: any, employeeInfo: {id: number, past: boolean}): void {
            state.employeeInfo.retrievedEmployeeId = employeeInfo.id;
            state.employeeInfo.isPastEmployee = employeeInfo.past;
        },
        CLEAR_USER_ID(state: any): void {
            state.employeeInfo.retrievedEmployeeId = null;
            state.employeeInfo.isPastEmployee = null;
        }
    }
}