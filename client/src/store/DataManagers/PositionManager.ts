import { Position } from "../../utility/TypesCollection";
import { callAPI } from "../../utility/Miscellaneous";
import { posEndpoint } from "../../utility/Constants";

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
            callAPI(posEndpoint, 'GET').then(data => commit('GET_POS_DATA', data));
        },
        POST_POS_DATA({ commit }: { commit: Function }, entry: Position) {
            callAPI(posEndpoint, 'POST', commit, entry).then(data => commit('GET_POS_DATA', data));
        },
        DELETE_POS({ commit }: { commit: Function }, id: number) {
            callAPI(posEndpoint + '/' + id, 'DELETE', commit).then(data => commit('GET_POS_DATA', data));
        }
    }
}