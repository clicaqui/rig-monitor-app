import * as SQLite from 'expo-sqlite';


const database = SQLite.openDatabase('settings.db')

export function init() {
    const promise = new Promise<void>((resolve, reject) => {
    database.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS settings (
                    user TEXT PRIMARY KEY NOT NULL,
                    transactionLimit INTEGER NOT NULL)`,
            [],
            () => {
                insertSettings();
                resolve();
            },
            (_,err) => {
                reject(err);
            });
        });
    });
    return promise;
}

export const fetchSettings = () => {

    const promise = new Promise<void>((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(`SELECT user, transactionLimit FROM settings`
            ,[],
            (_, result) => {
                console.log(result);
                resolve(result.rows._array);
            },
            (_, err) => {
                reject(err);
            });
        });
        
    });

    return promise;
}

export const insertSettings = () => {

    const promise = new Promise<void>((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(`INSERT INTO settings VALUES ("clicaqui",5)`
            ,[],
            (_, result) => {
                console.log(result);
                resolve();
            },
            (_, err) => {
                reject(err);
            });
        });
        
    });

    return promise;
}