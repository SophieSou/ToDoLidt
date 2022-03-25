// Pour la page ToDoList
function head_html() {
    return `
<html>

<head>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
        <meta charset="utf-8">
`
}

function titre_html() {

    return `
        <body>
        <div class="container">
            <div class="row">
                <div class="h2 col-12 col-md-12 col-lg-12  text-center">
                    To-Do-List :
                </div>
            </div>
            </br>
                <form method="GET">
                    <div class="row">
                         `
}

function titre_html_Fin() {

    return `  
                    </div>
                </form>

            `
}


function titre_col_html() {

    return `
    
            <div class="row">

                <div class="col-1 col-md-1 col-lg-1 border border-info">
                    <h4>Priorité</h4>
                </div>
                <div class="col-1 col-md-1 col-lg-1 border border-info">
                    <h4>Type</h4>

                </div>
                <div class="col-2 col-md-2 col-lg-2 border border-info">
                    <h4>Taches</h4>

                </div>
                <div class="col-3 col-md-3 col-lg-3 border border-info">
                    <h4>Description</h4>

                </div>
                <div class="col-2 col-md-2 col-lg-2 border border-info">
                    <h4>Acteur</h4>

                </div>
                <div class="col-2 col-md-2 col-lg-2 border border-info">
                    <h4>Date d'échéance</h4>

                </div>
                <div class="col-1 col-md-1 col-lg-1 border border-info">
                    <h4>Terminé</h4>

                </div>
            </div>

            `
}

function priorite_task_html() {
    return `
            <div class="col-1 col-md-1 col-lg-1  border border-info">

                `
}
function type_task_html() {
    return `
                <div class="col-1 col-md-1 col-lg-1  border border-info">

                    `
}
function tache_html() {
    return `
                    <div class="col-2 col-md-2 col-lg-2  border border-info">

                        `
}

function description_html() {
    return `

                        <div class="col-3 col-md-3 col-lg-3  border border-info">

                            `
}

function acteur_html() {
    return `
                            <div class="col-2 col-md-2 col-lg-2  border border-info">

                                `
}

function dt_ech_task_html() {
    return `
                                <div class="col-2 col-md-2 col-lg-2  border border-info">

                                    `
}

function id_task_html() {
    return `
                                    <form action="http://localhost:3000/get-task" method="POST">
                                        <div class="row">

                                            `
}



function bouton() {
    return `
                                            <div class="col-1 col-md-1 col-lg-1 border border-info">

                                                `
}


function boutonV() {
    return `
                                            </br>
                                            <div class="row">

                                                <div class="col-12 col-md-12 col-lg-12 text-center">
                                                 <button type="submit" class="btn  btn-primary btn-rounded" value="Valider">Valider</button>
                                                 </div>

                                            </div>
                                            `
}


//Pour le formulaire saisie de tâche

function headF_html() {
    return `
<html>

    <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/css/bootstrap-datepicker.css"
      rel="stylesheet"
    />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"></script>

            <style>
                .container {
                                                            `
}


function bodyF_htmlCreatT() {
    return `
            <div class="form-group col-6 col-md-6 col-lg-6">
                <label for="CreaTache"> Créateur : </label>
    
            `
}

function bodyF_htmlRespT() {
    return `
            <div class="form-group col-6 col-md-6 col-lg-6">
                <label for="RespTache"> Acteur : </label>
            
            `
}


function bodyF_htmlLibRespTSelect() {
    return `
     
            <select id="RespTache" required name="userRespTache" class="form-control">
            `}

function bodyF_htmlFinRespTachSelect() {
    return `
                                                        </select>
                                                        `
                                                    }
function bodyF_htmlFinRespTachFin() {
    return `                                            
                                                    </div>
                                                </br>
                                                `
}
                                                        

function bodyF_htmlPrioritaire() {
    return `
                                                <div class="form-group col-6 col-md-6 col-lg-6">
                                                    <label for="PrioriteTache"> Priorité : </label>
                                                    <select id="PrioriteTache" required name="userPrioTache" class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </br>
                `}
function bodyF_htmlLibTypTach() {
    return `
                                            <div class="form-group col-6 col-md-6 col-lg-6">
                                                <label for="typTache"> Type de tâche : </label>
                                                <select id="typTache" required name="userTypTache" class="form-control">
                                                    `
}


function bodyF_htmlFinTypTach() {
    return `
                                                </select>
                                            </div>
                                            `
}
function bodyF_htmlFin() {
    return `
                                        </br>
                                        <div class="form-group col-md-6">
                                            <label for="tache"> Tâche : </label>
                                            <input type="text" required id="tache" name="userTache" class="form-control" placeholder="Titre de la tâche">
                                        </div>
                                    </br>
                                    <div class="form-group col-md-6">
                                        <label for="description"> Description : </label>
                                        <input type="text" required id="description" name="userDescription" class="form-control" placeholder="Décris la tâche">
                                    </div>
                                </br>
                                <div class="form-group col-md-6">
                                    <label for="dateEch"> Deadline : </label>
                                    <input type="date" min="2022-01-01" required id="dateEch" name="userdateEch" class="form-control">
                                </div>
                                </br>
                                <div class="form-group col-md-6">
                                    <label for="dateTrait"> Date de traitement : </label>
                                    <input type="date" id="dateTrait" min="2022-01-01" required name="userdateTrait" class="form-control">
                                </div>
                            </br>
                            <div id="fin" class="col-6 text-center">
                                <input type="submit" value="Valider" class="btn  btn-primary btn-rounded">
                            </div>
                        </div>
                    </form>
                    
                    <script>
                        let formulaire = document.getElementById("fin")
                        let dateC = document.getElementById("dateEch")

                      formulaire.addEventListener("click", (event) => {
                            // console.log("comment.value :", comment.value)
                            let today = new Date;

                        let moisToday = today.getMonth() + 1

                        if (moisToday < 10) {
                            moisToday = '0' + moisToday
                        }

                        let dateToday =
                        today.getFullYear() + '-'
                        + moisToday + '-'
                        + today.getDate();


                        console.log("dateToday :", dateToday)
                        console.log("dateC:", dateC.value)

                        if (dateC.value < dateToday) {
                            event.preventDefault()
                alert("la deadline est antérieure à la date du jour !")
            }


        })
                    </script>

                    `
}



function ferm_div_html() {
    return `

                </div>

                `
}

function ferm_form_html() {
    return `

            </form>

            `
}


function queue_html() {

    return `
        </div>
    </body>

    </html>

        `
}

// page d'accueil

function accueil1_html() {
    return `
        <html>

        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossorigin="anonymous"></script>
                <meta charset="utf-8">
                    `
}


function FAuthentificationH() {
    return `
        <html>

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <style>
        .container {

            width: 500px;
            height: 250px;
            margin-left: 60%;
        }

        body {
            background-image: url("Ponyo-sur-la-falaise.jpg");
            background-size: cover;
        }
    </style>
</head>


<body>
    <div class="container">
        <div id="titre" class="h1 col-12 col-md-12 col-lg-12">
            Qui es tu ?
        </div>
        <form action="http://localhost:3000/Formulaire_authent" method="post" enctype=application/x-www-form-urlencoded>
                <div class="col-4 col-md-4 col-lg-4 form-group">
                <label for="ident"> Identifiant : </label>
                <input type="text" id="ident" required name="userIdent" class="form-control"/>
            </div>

            <div class="col-4 col-md-4 col-lg-4 form-group">
                <label for="mdp"> Mot de passe : </label>
                <input type="password" id="mdp" required name="userMdp" class="form-control" />
            </div>

            <!-- <div id="boutonV" class="col-4 col-md-4 col-lg-4">
                <input type="submit" value="Valider" />
            </div> -->
            </br>
            <div id="boutonV" class="col-4 col-md-4 col-lg-4 text-center">
                <button type="submit" class="btn  btn-primary btn-rounded" >Valider</button>
            </div>

        </form>
    </div>

    <script>

    </script>

</body>

</html>
                
        
        `

}

module.exports = {
    head_html: head_html,
    titre_html: titre_html,
    titre_col_html: titre_col_html,
    titre_html_Fin: titre_html_Fin,
    type_task_html: type_task_html,
    id_task_html: id_task_html,
    priorite_task_html: priorite_task_html,
    dt_ech_task_html: dt_ech_task_html,
    tache_html: tache_html,
    description_html: description_html,
    acteur_html: acteur_html,
    ferm_div_html: ferm_div_html,
    bouton: bouton,
    queue_html: queue_html,
    boutonV: boutonV,
    headF_html: headF_html,
    ferm_form_html: ferm_form_html,
    bodyF_htmlCreatT : bodyF_htmlCreatT,
    bodyF_htmlRespT:bodyF_htmlRespT,
    bodyF_htmlLibRespTSelect:bodyF_htmlLibRespTSelect,
    bodyF_htmlFinRespTachSelect:bodyF_htmlFinRespTachSelect,
    bodyF_htmlFinRespTachFin:bodyF_htmlFinRespTachFin,
    bodyF_htmlPrioritaire: bodyF_htmlPrioritaire,
    bodyF_htmlLibTypTach: bodyF_htmlLibTypTach,
    bodyF_htmlFinTypTach: bodyF_htmlFinTypTach,
    bodyF_htmlFin: bodyF_htmlFin,
    accueil1_html: accueil1_html,
    FAuthentificationH: FAuthentificationH
}