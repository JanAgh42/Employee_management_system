import Vuex from 'vuex';
import { Employee } from '../models/TypesCollection';

const store = new Vuex.Store({
    state: {
        data: [
            {
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
            }
        ]
    },
    mutations: {
    },
    actions: {},
    getters: {
        getCurrentEmployees(state): Employee[] {
            return state.data.filter((entry: Employee) => !entry.past);
        },
        getPastEmployees(state): Employee[] {
            return state.data.filter((entry: Employee) => entry.past);
        },
        getSpecificEmployee(state): Function {
            return (id: number) => state.data.find((entry: Employee) => entry.id === id);
        }
    }
});

export default store;