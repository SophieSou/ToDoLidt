const { result } = require('lodash')


function connectToPostgre() {

    const { Pool } = require('pg')

    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'todolist',
        password: 'Bambou01',
        // port: 3000,

    }

    )
    return pool
}

// Les taches
function dbGetTasks(fonction_traitement_resultat_bdd) {

    let connection = connectToPostgre()

    let query =
        `SELECT id, nom, description, to_char(dt_echeance,'DD-MM-YYYY') as dt_echeance, ind_priorite, type_task, Resp_task FROM TASKS  where top_fait='false' ORDER BY IND_PRIORITE `
    //"SELECT * FROM TASKS ORDER BY IND_PRIORITE"
    //    console.log(query)
    connection.query(query, fonction_traitement_resultat_bdd);

}

function dbUpdateTasks(values_to_update, fonction_apres_update) {
    console.log("values_to_update : ", values_to_update)
    let connection = connectToPostgre()

    let query = `update TASKS set top_fait ='true' where id = $1 `

    for (let i in values_to_update) {

        connection.query(query, values_to_update[i], (error, results) => {
            console.log("values_to_update[i] : ", values_to_update[i])
            if (error) {
                console.log(error)
            }
            console.log("results: ", results)
            console.log(query)
            console.log("après update")
        }
        )
    }
    //    connection.commit()
    connection.end()

    fonction_apres_update()
}

// let values_to_update = [['1'],['2']]
// console.log('values_to_update : ',values_to_update)
// dbUpdateTasks(values_to_update,fonction_apres_update)


function dbInsTasks(values_to_insert, fonction_apres_insertion) {

    let connection = connectToPostgre()

    let query = `INSERT INTO TASKS (NOM, DESCRIPTION, DT_ECHEANCE, TYPE_TASK, IND_PRIORITE,Resp_task, top_fait) VALUES ($1,$2,$3,$4,$5,$6,'false')`

    connection.query(query, values_to_insert, (error, results) => {

        if (error) {
            console.log(error)
        }
        console.log("results: ", results)
        console.log(query)
        console.log("après insertion")

        // connection.commit()
        connection.end()

        fonction_apres_insertion()
    })
}

function fonction_apres_insertion() {
    console.log("données insérées")
}

function fonction_apres_update() {
    console.log("données updatées")
}



// let values_to_insert = ['Task3','bla bla bla','2022-03-22','personnel',1]

//dbInsTasks(values_to_insert,fonction_apres_insertion)

// Identification
// function dbGetIdent(id_verif,fonction_apres_selection) {

//     let connection = connectToPostgre()

//     let query =
//         `SELECT identifiant, mdp, d_admin FROM IDENTIFICATION  where identifiant=$1 `

//     connection.query(query, id_verif, (error, results) => {
//         if (error) {
//             console.log(error)
//         }
//         console.log("results db1: ", results)
//         console.log(query)
//         console.log("après sélection")

//         // connection.commit()
//         connection.end()
//         fonction_apres_selection()
//     })

// function dbGetIdent(fonction_apres_selection) {

//     let connection = connectToPostgre()

//     let query =
//         `SELECT identifiant, mdp, d_admin FROM IDENTIFICATION`

//     connection.query(query, (error, results) => {
//         if (error) {
//             console.log(error)
//         }
//         console.log("results db1: ", results)
//         console.log(query)
//         console.log("après sélection")

//         // connection.commit()
//         connection.end()
//         fonction_apres_selection()
//     }
//     )



// }

function dbGetIdent(formData, fonction_apres_selection) {

    let connection = connectToPostgre()

    let query =
        `SELECT identifiant, mdp, d_admin FROM IDENTIFICATION where identifiant = $1 and mdp = $2 `

    //    console.log(query)
    connection.query(query, formData, fonction_apres_selection)

    // if (error) {
    //     console.log(error)
    // }
    // console.log("results: ", result)

    console.log("query: ")

    // connection.commit()
    connection.end()

    // fonction_apres_selection()




}



// function fonction_apres_selection() {
//     console.log("selection ok")
// }




// let id_verif =['SerenaS']
// dbGetIdent(id_verif)

module.exports = {
    dbGetTasks: dbGetTasks,
    dbInsTasks: dbInsTasks,
    dbUpdateTasks: dbUpdateTasks,
    dbGetIdent: dbGetIdent

}

