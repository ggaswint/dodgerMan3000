import { ADD_INFO, SET_INFO } from "./playerSaveInfo_action";
import SaveData from '../models/SaveData';
import appliedPowerUps from '../Game/Worlds/appliedPowerUps'
import lockedConfig from '../Game/Worlds/lockedConfig'
import playerStats from '../Game/Worlds/playerStatsConfig'

const initialState = {
    data: new SaveData(0, 0, 1, 1, JSON.stringify(appliedPowerUps), 1, JSON.stringify(playerStats), JSON.stringify(lockedConfig))
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_INFO:
            const saveInfo = new SaveData(action.infoData.id, action.infoData.midWorld, action.infoData.world, action.infoData.level, action.infoData.powerUps, action.infoData.character, action.infoData.playerStats, action.infoData.lockedStats);
            return {
                data: saveInfo
            };
        case SET_INFO:
            if (action.info.length == 0) {
                return {
                    data: new SaveData(0, 0, 1, 1, JSON.stringify(appliedPowerUps), 1, JSON.stringify(playerStats), JSON.stringify(lockedConfig))
                }
            } else {
                const actionInfo = action.info[0];
                return {
                    data: new SaveData(actionInfo.id, actionInfo.midWorld, actionInfo.world, actionInfo.level, actionInfo.powerUps, actionInfo.character, actionInfo.playerStats, actionInfo.lockedStats)
                }
            }
        default:
            return state;

    }
}