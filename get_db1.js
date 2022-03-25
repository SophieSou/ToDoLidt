const { result } = require('lodash')


function connectToPostgre() {

    const { Pool } = require('pg')

    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'todolist',
        password: 'Bambou01',

    }

    )
    return pool
}

// Les taches
function dbGetTasks(fonction_traitement_resultat_bdd) {

    let connection = connectToPostgre()

    let query =
    `
    SELECT 
    id
    ,nom
    ,description
    ,to_char(dt_echeance,'DD-MM-YYYY') as dt_echeance
    ,ind_priorite
    ,type_task
    ,Resp_task
    ,to_char(DT_PREVUE,'DD-MM-YYYY') as DT_PREVUE 
    FROM TASKS_new 
    where top_fait='false' 
    and dt_prevue >= CURRENT_DATE
    ORDER BY dt_prevue, IND_PRIORITE
        `
    connection.query(query, fonction_traitement_resultat_bdd);

}

function dbGetTasksSso(fonction_traitement_resultat_bdd) {

    let connection = connectToPostgre()

    let query =
        `SELECT 
        id
        ,nom
        ,description
        ,to_char(dt_echeance,'DD-MM-YYYY') as dt_echeance
        ,ind_priorite
        ,type_task
        ,Resp_task
	    ,to_char(DT_PREVUE,'DD-MM-YYYY') as DT_PREVUE 
        FROM TASKS_new 
        where top_fait='false' 
        and dt_prevue >= CURRENT_DATE
        and Resp_task='Serena'
        ORDER BY dt_prevue, IND_PRIORITE
         `

    connection.query(query, fonction_traitement_resultat_bdd);

}

function dbGetTasksEso(fonction_traitement_resultat_bdd) {

    let connection = connectToPostgre()

    let query =
        `
        SELECT 
        id
        ,nom
        ,description
        ,to_char(dt_echeance,'DD-MM-YYYY') as dt_echeance
        ,ind_priorite
        ,type_task
        ,Resp_task
        ,CREATEUR_TASK
	    ,to_char(DT_PREVUE,'DD-MM-YYYY') as DT_PREVUE 
        FROM TASKS_new 
        where top_fait='false' 
        and dt_prevue >= CURRENT_DATE
        and Resp_task='Ethan'
        ORDER BY dt_prevue, IND_PRIORITE
        `
    
    connection.query(query, fonction_traitement_resultat_bdd);

}

function dbUpdateTasks(values_to_update, fonction_apres_update) {
    console.log("values_to_update : ", values_to_update)
    let connection = connectToPostgre()

    let query = `update TASKS_new set top_fait ='true' where id = $1 `

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

function dbInsTasks(values_to_insert, fonction_apres_insertion) {

    let connection = connectToPostgre()

    let query = `
    INSERT 
    INTO TASKS_new (
    NOM
    ,DESCRIPTION
    ,DT_ECHEANCE
    ,TYPE_TASK
    ,IND_PRIORITE
    ,Resp_task
    ,CREATEUR_TASK
    ,DT_PREVUE
    ,top_fait) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'false')`

    connection.query(query, values_to_insert, (error, results) => {

        if (error) {
            console.log(error)
        }


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


function dbGetIdent(formData, fonction_apres_selection) {

    let connection = connectToPostgre()

    let query =
        `SELECT identifiant, mdp, d_admin FROM IDENTIFICATION where identifiant = $1 and mdp = $2 `

    connection.query(query, formData, fonction_apres_selection)

    console.log("query: ")

    connection.end()

}

module.exports = {
    dbGetTasks: dbGetTasks,
    dbGetTasksSso:dbGetTasksSso,
    dbGetTasksEso:dbGetTasksEso,
    dbInsTasks: dbInsTasks,
    dbUpdateTasks: dbUpdateTasks,
    dbGetIdent: dbGetIdent

}

