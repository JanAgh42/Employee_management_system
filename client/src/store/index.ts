import Vuex from 'vuex';

import { DataManager } from './DataManager';
import { DialogManager } from './DialogManager';

const store = new Vuex.Store({
    modules: {
        DataManager,
        DialogManager
    }
});

export default store;