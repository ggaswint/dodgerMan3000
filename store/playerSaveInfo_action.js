import { insertInfo, fetchInfo } from './db';

export const ADD_INFO = 'ADD_INFO';
export const SET_INFO = 'SET_INFO';

export const addInfo = (id, midWorld, world, level, powerUps, character, playerStats, lockedStats) => {
    return async dispatch => {
        try {
            const dbResult = await insertInfo(id, midWorld, world, level, powerUps, character, playerStats, lockedStats);
            dispatch({ type: ADD_INFO, infoData: { id: id, midWorld: midWorld, world: world, level: level, powerUps: powerUps, character: character, playerStats: playerStats, lockedStats: lockedStats } });
        } catch (err) {
            throw err;
        }

    }
}

export const loadInfo = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchInfo();
            dispatch({ type: SET_INFO, info: dbResult.rows._array })
        } catch (err) {
            throw err;
        }
    }
};