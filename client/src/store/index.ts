import Vuex from 'vuex';

import { DataManager } from './DataManager';
import { DialogManager } from './DialogManager';
import { EmployeeManager } from './EmployeeManager';

const store = new Vuex.Store({
    modules: {
        DataManager,
        DialogManager,
        EmployeeManager
    }
});

export default store;