import Vuex from 'vuex';
import { Employee, Position } from '../models/TypesCollection';

import { DialogManager } from './DialogManager';
import { EmployeeManager } from './EmployeeManager';
import {CurrEmpManager } from './DataManagers/CurrEmpManager';
import { PastEmpManager } from './DataManagers/PastEmpManager';
import { PositionManager } from './DataManagers/PositionManager';

export const callAPI = async (URL: string, method: string, commit?: Function, body?: Employee | Position): Promise<any> => {
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

const store = new Vuex.Store({
    modules: {
        DialogManager,
        EmployeeManager,
        CurrEmpManager,
        PastEmpManager,
        PositionManager
    },
    getters: {
        getSpecificEmployee(state: any): Function {
            return (id: number,  past: boolean) => {
                return past ? state.PastEmpManager.pastData.find((entry: Employee) => entry.id === id) : 
                state.CurrEmpManager.currentData.find((entry: Employee) => entry.id === id);
            };
        }
    }
});

export default store;