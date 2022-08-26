export const EmployeeManager = {
    state: {
        employeeInfo: {
            retrievedEmployeeId: null,
            isPastEmployee: null
        }
    },
    mutations: {
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