import Vuex from 'vuex';
import { Employee } from '../utility/TypesCollection';

import { DialogManager } from './DialogManager';
import { EmployeeManager } from './EmployeeManager';
import { CurrEmpManager } from './DataManagers/CurrEmpManager';
import { PastEmpManager } from './DataManagers/PastEmpManager';
import { PositionManager } from './DataManagers/PositionManager';

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