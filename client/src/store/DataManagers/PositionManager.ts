import { Position } from "../../models/TypesCollection";
import { callAPI } from "..";

export const PositionManager = {
    state: {
        positionData: []
    },
    mutations: {
        GET_POS_DATA(state: any, data: Position[]) {
            state.positionsData = data;
        }
    },
    actions: {
        GET_POS_DATA({ commit }: { commit: Function }) {
            callAPI('http://localhost:5000/positions', 'GET').then(data => commit('GET_POS_DATA', data));
        },
    }
}