import { Employee } from '../models/TypesCollection';

const callAPI = async (URL: string, method: string, commit?: Function, body?: Employee): Promise<any> => {
    const response = await fetch(URL, {
        method,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    if(commit !== undefined && response.status === 200){
        commit('TOGGLE_CONFIRM_DIALOG', 'Action completed successfully.');
    }
    return await response.json();
}

export const DataManager = {
    state: {
        currentData: [],
        pastData: []
    },
    mutations: {
        GET_CURRENT_EMP_DATA(state: any, data: Employee[]) {
            state.currentData = data;
        },
        GET_PAST_EMP_DATA(state: any, data: Employee[]){
            state.pastData = data;
        }
    },
    actions: {
        GET_CURRENT_EMP_DATA({ commit }: { commit: Function }) {
            callAPI('http://localhost:5000/current', 'GET').then(data => commit('GET_CURRENT_EMP_DATA', data));
        },
        GET_PAST_EMP_DATA({ commit }: { commit: Function }) {
            callAPI('http://localhost:5000/past', 'GET').then(data => commit('GET_PAST_EMP_DATA', data));
        },
        POST_DATA({ commit }: { commit: Function }, entry: Employee) {
            callAPI('http://localhost:5000/Employee', 'POST', commit, entry).then(data => commit('GET_CURRENT_EMP_DATA', data));
        },
        DELETE_CURRENT_EMP({ commit }: { commit: Function }, id: number) {
            callAPI('http://localhost:5000/Employee/' + id, 'DELETE', commit).then(data => commit('GET_CURRENT_EMP_DATA', data));
        },
        DELETE_PAST_EMP({ commit }: { commit: Function }, id: number) {
            callAPI('http://localhost:5000/Employee/' + id, 'DELETE', commit).then(data => commit('GET_PAST_EMP_DATA', data));
        },
        EDIT_CURRENT_EMP({ commit }: { commit: Function }, entry: Employee) {
            callAPI('http://localhost:5000/Employee', 'PUT', commit, entry).then(data => commit('GET_CURRENT_EMP_DATA', data));
        }
    },
    getters: {
        getSpecificEmployee(state: any): Function {
            return (id: number,  past: boolean) => {
                return past ? state.pastData.find((entry: Employee) => entry.id === id) : 
                state.currentData.find((entry: Employee) => entry.id === id);
            };
        }
    }
}