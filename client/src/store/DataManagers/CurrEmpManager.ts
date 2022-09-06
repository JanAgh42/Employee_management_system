import { Employee } from "../../utility/TypesCollection";
import { callAPI } from "../../utility/Miscellaneous";
import { curEndpoint, empEndpoint } from "../../utility/Constants";

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
            callAPI(curEndpoint, 'GET').then((data: Employee[]) => commit('GET_CURRENT_EMP_DATA', data));
        },
        POST_EMP_DATA({ commit }: { commit: Function }, entry: Employee) {
            callAPI(empEndpoint, 'POST', commit, entry).then(data => commit('GET_CURRENT_EMP_DATA', data));
        },
        DELETE_CURRENT_EMP({ commit }: { commit: Function }, id: number) {
            callAPI(empEndpoint + '/' + id, 'DELETE', commit).then(data => commit('GET_CURRENT_EMP_DATA', data));
        },
        EDIT_CURRENT_EMP({ commit }: { commit: Function }, entry: Employee) {
            callAPI(empEndpoint, 'PUT', commit, entry).then(data => commit('GET_CURRENT_EMP_DATA', data));
        }
    }
}