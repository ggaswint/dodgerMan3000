class SaveData {
    constructor(id, midWorld, world, level, powerUps, character, playerStats, lockedStats) {
        this.id = id;
        this.midWorld = midWorld;
        this.world = world;
        this.level = level;
        this.powerUps = powerUps;
        this.character = character;
        this.playerStats = playerStats;
        this.lockedStats = lockedStats;
    }
}

export default SaveData;