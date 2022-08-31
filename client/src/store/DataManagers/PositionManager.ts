import { Position } from "../../utility/TypesCollection";
import { callAPI } from "../../utility/Miscellaneous";

export const PositionManager = {
    state: {
        positionData: []
    },
    mutations: {
        GET_POS_DATA(state: any, data: Position[]) {
            state.positionData = data;
        }
    },
    actions: {
        GET_POS_DATA({ commit }: { commit: Function }) {
            callAPI('http://localhost:5000/positions', 'GET').then(data => commit('GET_POS_DATA', data));
        },
        POST_POS_DATA({ commit }: { commit: Function }, entry: Position) {
            callAPI('http://localhost:5000/positions', 'POST', commit, entry).then(data => commit('GET_POS_DATA', data));
        },
        DELETE_POS({ commit }: { commit: Function }, id: number) {
            callAPI('http://localhost:5000/positions/' + id, 'DELETE', commit).then(data => commit('GET_POS_DATA', data));
        }
    }
}