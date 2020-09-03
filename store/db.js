import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('dodgerManSaveTable.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS dodgerManSaveTable (id INTEGER PRIMARY KEY, midWorld REAL, world REAL, level REAL, powerUps TEXT, character REAL, playerStats TEXT, lockedStats TEXT);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                },
            );
        });
    });
    return promise;
};

export const insertInfo = (id, midWorld, world, level, powerUps, character, playerStats, lockedStats) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`REPLACE INTO dodgerManSaveTable (id, midWorld, world, level, powerUps, character, playerStats, lockedStats) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                [id, midWorld, world, level, powerUps, character, playerStats, lockedStats],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                },
            );
        });
    });
    return promise;
};

export const fetchInfo = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`SELECT * FROM dodgerManSaveTable`, // WHERE id > 1
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                },
            );
        });
    });
    return promise;
};