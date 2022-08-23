import { Employee } from '../models/TypesCollection';

export const DataManager = {
    state: {
        data: []
    },
    mutations: {
        RETRIEVE_DATA(state: any, data: Employee[]) {
            state.data = data;
        }
    },
    actions: {
        async RETRIEVE_DATA({ commit }: { commit: Function }) {
            const response = await fetch('http://localhost:5000/Employee');
            
            const data = await response.json();
            commit('RETRIEVE_DATA', data);
        }
    },
    getters: {
        getCurrentEmployees(state: any): Employee[] {
            return state.data.filter((entry: Employee) => !entry.past);
        },
        getPastEmployees(state: any): Employee[] {
            return state.data.filter((entry: Employee) => entry.past);
        },
        getSpecificEmployee(state: any): Function {
            return (id: number) => state.data.find((entry: Employee) => entry.id === id);
        }
    }
}

/* {
                id: 1,
                firstName: 'f1',
                lastName: 'l1',
                address: 'example',
                position: 'pos1',
                past: false
            },
            {
                id: 2,
                firstName: 'f2',
                lastName: 'l2',
                address: 'example',
                position: 'pos2',
                past: true
            },
            {
                id: 3,
                firstName: 'f3',
                lastName: 'l3',
                address: 'example',
                position: 'pos3',
                past: false
            },
            {
                id: 4,
                firstName: 'f4',
                lastName: 'l4',
                address: 'example',
                position: 'pos3',
                past: true
            }*/