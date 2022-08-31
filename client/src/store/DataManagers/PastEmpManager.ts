import { Employee } from "../../utility/TypesCollection";
import { callAPI } from "../../utility/Miscellaneous";

export const PastEmpManager = {
    state: {
        pastData: []
    },
    mutations: {
        GET_PAST_EMP_DATA(state: any, data: Employee[]) {
            for(let entry of data){
                entry.dateOfBirth = new Date(entry.dateOfBirth);
                entry.workingSince = new Date(entry.workingSince);
            }
            state.pastData = data;
        }
    },
    actions: {
        GET_PAST_EMP_DATA({ commit }: { commit: Function }) {
            callAPI('http://localhost:5000/past', 'GET').then(data => commit('GET_PAST_EMP_DATA', data));
        },
        DELETE_PAST_EMP({ commit }: { commit: Function }, id: number) {
            callAPI('http://localhost:5000/Employee/' + id, 'DELETE', commit).then(data => commit('GET_PAST_EMP_DATA', data));
        },
    }
}