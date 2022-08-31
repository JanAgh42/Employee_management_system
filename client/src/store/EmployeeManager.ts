export const EmployeeManager = {
    state: {
        entryInfo: {
            retrievedEmployeeId: null,
            isPastEmployee: null,
            isPosition: null
        }
    },
    mutations: {
        LOAD_USER_ID(state: any, entryInfo: {id: number, past: boolean, position?: boolean}): void {
            state.entryInfo.retrievedEmployeeId = entryInfo.id;
            state.entryInfo.isPastEmployee = entryInfo.past;
            state.entryInfo.isPosition = entryInfo.position;
        },
        CLEAR_USER_ID(state: any): void {
            state.entryInfo.retrievedEmployeeId = null;
            state.entryInfo.isPastEmployee = null;
            state.entryInfo.isPosition = null
        }
    }
}