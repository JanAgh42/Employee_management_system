import { Employee } from "../../utility/TypesCollection";
import { callAPI } from "../../utility/Miscellaneous";

export const CurrEmpManager = {
    state: {
        currentData: []
    },
    mutations: {
        GET_CURRENT_EMP_DATA(state: any, data: Employee[]) {
            for(let entry of data){
                entry.dateOfBirth = new Date(entry.dateOfBirth);
                entry.workingSince = new Date(entry.workingSince);
            }
            state.currentData = data;
        }
    },
    actions: {
        GET_CURRENT_EMP_DATA({ commit }: { commit: Function }) {
            callAPI('http://localhost:5000/current', 'GET').then((data: Employee[]) => commit('GET_CURRENT_EMP_DATA', data));
        },
        POST_EMP_DATA({ commit }: { commit: Function }, entry: Employee) {
            callAPI('http://localhost:5000/Employee', 'POST', commit, entry).then(data => commit('GET_CURRENT_EMP_DATA', data));
        },
        DELETE_CURRENT_EMP({ commit }: { commit: Function }, id: number) {
            callAPI('http://localhost:5000/Employee/' + id, 'DELETE', commit).then(data => commit('GET_CURRENT_EMP_DATA', data));
        },
        EDIT_CURRENT_EMP({ commit }: { commit: Function }, entry: Employee) {
            callAPI('http://localhost:5000/Employee', 'PUT', commit, entry).then(data => commit('GET_CURRENT_EMP_DATA', data));
        }
    }
}