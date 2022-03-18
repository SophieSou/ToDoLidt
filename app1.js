const express = require('express')
// const { createPool } = require('mysql')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
//var { response } = require('express');
const fetch = require("node-fetch")
//import fetch from "node-fetch"
app.use(express.urlencoded({ extended: true }))
const db = require('./get_db1.js')

const formatHtml = require('./Public/format_html.js')

// app.use(express.static('js.db')) 
app.use(express.static('Public'))

// app.use(express.static('Projet/Public/image'))

const { format } = require('express/lib/response')
const { get, result } = require('lodash')

function ShowTasks(results) {
  let resDB = ""

  for (let i in results.rows) {
    resDB = resDB + `<p> ${results.rows[i].nom}</p>`
  }

  return resDB
}

function ShowTasksDesc(results) {
  let resDB = ""
  for (let i in results.rows) {
    resDB = resDB + `<p>  ${results.rows[i].description} </p>`
  }
  return resDB
}

function ShowTasksTyp(results) {
  let resDB = ""

  for (let i in results.rows) {
    resDB = resDB + `<p>  ${results.rows[i].type_task} </p>`
  }
  return resDB
}

function ShowTasksPriorite(results) {
  let resDB = ""
  for (let i in results.rows) {
    resDB = resDB + `<p>  ${results.rows[i].ind_priorite} </p>`
  }
  return resDB
}

function ShowTasksDtEch(results) {
  let resDB = ""
  for (let i in results.rows) {
    resDB = resDB + `<p>  ${results.rows[i].dt_echeance} </p>`
  }
  return resDB
}

function ShowTasksbt(results) {
  let resDB = ""
  let tabId = []

  for (let i in results.rows) {
    resDB = resDB + `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name ="${results.rows[i].id}">
    <label class="form-check-label" for="flexSwitchCheckDefault">fait</label>
    </div>`

    tabId.push(results.rows[i].id)
    console.log("tabId :", tabId)
  }

  return resDB
}

function ShowTaskId(results) {
  let resDB = ""

  for (let i in results.rows) {
    resDB = resDB + `<input type="text" id="idTache" name="idTache" value="${results.rows[i].id}" hidden>`


  }
  console.log(resDB)
  return resDB
}

function ShowTaskImage(image) {
  let resIm = ""

  // resIm = `<div><img src="${image}"  class="img-fluid round-circle"  width="400px" length="400px"/></div> `
  resIm = `
        <style>
          .container {
            margin-left: 10%;
            margin-top: 5%;
          width: 30%;
          height: 50%;
          background-image: url("${image}");
          background-size: cover;
          }
          body{
              background-image: url("paysage.jpg");


              background-size: cover;
          }


          #titre {
              font-size: 30px;
          }

          </style>
          </head>`

  console.log(resIm)
  return resIm
}

function ShowTDL(adresse) {
  let resAd = ""

  // resIm = `<div><img src="${image}"  class="img-fluid round-circle"  width="400px" length="400px"/></div> `
  resAd = `
  <body>
  <div class="container width=500px">

          <div id="titre" class="col-12"> Que veux-tu faire ?
          </div>
          <form method="GET" enctype=application/x-www-form-urlencoded>
          <br/>
                  <div class="col-6">
                      <button id="bouton1" type="submit" formaction="http://localhost:3000/${adresse}"
                          class="btn btn-primary btn-rounded">ToDoList</button>
                  </div>
          `

  console.log(resAd)
  return resAd
}

function ShowFml(adresse) {
  let resAdF = ""

  // resIm = `<div><img src="${image}"  class="img-fluid round-circle"  width="400px" length="400px"/></div> `
  resAdF = `
  <br/>
  <div class="col-6">
      <button id="bouton2" type="submit" formaction="http://localhost:3000/${adresse}"
          class="btn btn-primary btn-rounded">Nouvelle tâche</button>
  </div>


</form>
</div>
</body>

</html>
          `

  console.log(resAdF)
  return resAdF
}

function ShowFmlImg(image) {
  let resFimg = ""

  // resIm = `<div><img src="${image}"  class="img-fluid round-circle"  width="400px" length="400px"/></div> `
  resFimg =
    `
  body {

      background-image: url("${image}")
     
      background-size: cover;
  }

  input:hover,
  textarea:hover,
  select:hover {
      border: 2px solid blueviolet;
  }

  #titre {
      text-align: center;
      font-size: larger;

  }

  label {
      color: white;
  }

  </style>
</head>
  
  `
  console.log(resFimg)
  return resFimg
}

//Test unitaire
function test_ShowTaskImage() {
  let image = "totoro_dodo.jpg"

  let test = ShowTaskImage(image)

  
  if (!test.includes("<style>")) {
    console.log("Test Unitaire : ERREUR")
  }
  else {
    console.log("Test Unitaire : Test OK")
  }
}

test_ShowTaskImage()
//Test Unitaire




function ShowTasksActor(results) {
  let resDB = ""
  for (let i in results.rows) {
    console.log(results)
    resDB = resDB + `<p>${results.rows[i].resp_task} </p>`
    console.log("resDB : ", resDB)
  }
  return resDB
}


app.get('/get-task', (req, res) => {
  db.dbGetTasks(
    function (error, results, fields) {

      let html = formatHtml.head_html();
      html = html + formatHtml.titre_html()

      html = html + formatHtml.titre_col_html()

      html = html + formatHtml.id_task_html()

      html = html + formatHtml.priorite_task_html()
      html = html + ShowTasksPriorite(results)
      html = html + formatHtml.ferm_div_html()

      html = html + formatHtml.type_task_html()
      html = html + ShowTasksTyp(results)
      html = html + formatHtml.ferm_div_html()

      html = html + formatHtml.tache_html()
      html = html + ShowTasks(results)
      html = html + formatHtml.ferm_div_html()

      html = html + formatHtml.description_html()
      html = html + ShowTasksDesc(results)
      html = html + formatHtml.ferm_div_html()

      html = html + formatHtml.acteur_html()
      html = html + ShowTasksActor(results)
      html = html + formatHtml.ferm_div_html()


      html = html + formatHtml.dt_ech_task_html()
      html = html + ShowTasksDtEch(results)
      html = html + formatHtml.ferm_div_html()

      html = html + formatHtml.bouton()
      html = html + ShowTasksbt(results)
      html = html + formatHtml.ferm_div_html()

      html = html + formatHtml.boutonV()

      html = html + formatHtml.ferm_div_html()
      html = html + formatHtml.ferm_form_html()

      html = html + formatHtml.ferm_div_html()
      html = html + formatHtml.queue_html()

      console.log(html)

      res.send(html)
    },

  )

})

app.get('/accueil_Soso', (req, res) => {

  let image = "totoro_question2.png"
  let adresse1 = "get-task"
  let adresse2 = "Formulaire_taches"

  let html = formatHtml.accueil1_html();
  html = html + ShowTaskImage(image);
  html = html + ShowTDL(adresse1)
  html = html + ShowFml(adresse2);

  console.log(html)

  res.send(html)
})

app.get('/accueil_Serena', (req, res) => {

  let image = "le-voyage-de-chihiro5.jpg"
  let adresse1 = "get-task"
  let adresse2 = "Formulaire_taches_Sso"

  let html = formatHtml.accueil1_html();
  html = html + ShowTaskImage(image);
  html = html + ShowTDL(adresse1)
  html = html + ShowFml(adresse2);

  console.log(html)

  res.send(html)
})

app.get('/accueil_Ethan', (req, res) => {

  let image = "bebe_chihiro.jpg"
  let adresse1 = "get-task"
  let adresse2 = "Formulaire_taches_Eso"

  let html = formatHtml.accueil1_html();
  html = html + ShowTaskImage(image);
  html = html + ShowTDL(adresse1)
  html = html + ShowFml(adresse2);

  console.log(html)

  res.send(html)
})


app.post("/get-task", (request, response) => {

  let formData = []

  for (let k in request.body) {
    formData.push([k])
  }

  db.dbUpdateTasks(formData, function () {
    response.redirect("/get-task")
  })

})


app.post("/TodoList_react", (request, response) => {
  let formData = []
  for (let k in request.body) {
    formData.push([k])
  }
  db.dbUpdateTasks(formData, function () {
    response.redirect("/get-task")
  })

})


app.get('/Formulaire_taches', (req, res) => {
  let image = "toto_dodo.jpg"

  let html = formatHtml.headF_html();
  html = html + ShowFmlImg(image)
  html = html + formatHtml.bodyF_html()
  html = html + formatHtml.queue_html()

  console.log(html)

  res.send(html)
})

app.get('/Formulaire_taches_Sso', (req, res) => {

  let image = "une-studio-ghibli.jpg"

  let html = formatHtml.headF_html();
  html = html + ShowFmlImg(image)
  html = html + formatHtml.bodyF_html()
  html = html + formatHtml.queue_html()

  console.log(html)

  res.send(html)
})

app.get('/Formulaire_taches_Eso', (req, res) => {
  let image = "toto_dodo.jpg"

  let html = formatHtml.headF_html();
  html = html + ShowFmlImg(image)
  html = html + formatHtml.bodyF_html()
  html = html + formatHtml.queue_html()

  console.log(html)

  res.send(html)
})

app.post("/Formulaire_taches", (request, response) => {


  let formData = [request.body['userTache'], request.body['userDescription'], request.body['userdateEch'], request.body['userTypTache'], request.body['userPrioTache'], request.body['userRespTache']]
  console.log(formData)

  db.dbInsTasks(formData, function () {

    response.redirect("/get-task")

  })

})

// app.get("/get-data",(request,response)=>{

// let data ={
//   age:25,
//   ville:"New York"
// }
// response.json(data)

// })

app.get('/get-data', (req, res) => {
  db.dbGetTasks(

    function (error, results, fields) {

      console.log(results.rows)

      res.json(results.rows)
    }

  )

})

//identification

app.get('/', (req, res) => {

  let html = formatHtml.FAuthentificationH();

  console.log(html)

  res.send(html)


})

app.post("/Formulaire_authent", (request, response) => {

  console.log("request.body['userIdent'] : ", request.body['userIdent'])
  console.log("request.body['userMdp'] : ", request.body['userMdp'])

  let idIdent = request.body['userIdent']
  let pageIdent = "/accueil_" + idIdent
  console.log("pageIdent :", pageIdent)

  let formData = [request.body['userIdent'], request.body['userMdp']]
  console.log(formData)

  db.dbGetIdent(formData, function (error, results, fields) {

    if (results.rowCount == 0) {
      response.redirect("/")
    }
    else {
      // response.redirect("/accueil")
      response.redirect(pageIdent)
    }

    console.log("response app1 : ", response)




  })


})

app.get('/get-id', (req, res) => {
  db.dbGetIdent(

    function (error, results, fields) {

      console.log(results.rows)

      res.json(results.rows)
    }

  )

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} `)
})