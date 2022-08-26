import { Employee } from "../../models/TypesCollection";
import { callAPI } from "..";

export const CurrEmpManager = {
    state: {
        currentData: []
    },
    mutations: {
        GET_CURRENT_EMP_DATA(state: any, data: Employee[]) {
            state.currentData = data;
        }
    },
    actions: {
        GET_CURRENT_EMP_DATA({ commit }: { commit: Function }) {
            callAPI('http://localhost:5000/current', 'GET').then(data => commit('GET_CURRENT_EMP_DATA', data));
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