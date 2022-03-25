const express = require('express')
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

function ShowTaskImage_margL(margL) {
  let resIm = ""

  resIm = `

  <style>
          .container {
          margin-left: ${margL};
    `
  return resIm
}

function ShowTaskImage_margT(margT) {
  let resIm = ""

  resIm = `
          margin-top: ${margT};
`
  return resIm
}

function ShowTaskImage_width(width) {
  let resIm = ""

  resIm = `

          width: ${width};
`
  return resIm
}

function ShowTaskImage_height(height) {
  let resIm = ""

  resIm = `
          height: ${height};
`
  return resIm
}

function ShowTaskImage_bckPos(bckPos) {
  let resIm = ""

  resIm = `

          background-position :${bckPos};
  `
  return resIm
}

function ShowTaskImage(image) {
  let resIm = ""

  resIm = `
          background-image: url("${image}");
          background-repeat: no-repeat;
          background-position :right top;
          background-size: 80%;
          }

`
  return resIm
}

function ShowTaskBackIm(image) {
  let resBcIm = ""
  resBcIm = `

          body{
              background-image: url("${image}");
              background-size: cover;
          }

`
  return resBcIm
}

function ShowTaskTitre(color) {
  let resBcIm = ""
  resBcIm = `

          #titre {
              font-size: 30px;
              color : ${color};

              `

  return resBcIm
}

function ShowTaskTitre_pdng(pdng) {
  let resBcIm = ""
  resBcIm = `
              padding-left : ${pdng};
          }
          `

  return resBcIm
}

function ShowTaskbtn1(marginT1) {
  let resBcIm = ""
  resBcIm = `
  #bouton1{
    
    margin-top: ${marginT1}
    ;
}
          `

  return resBcIm
}

function ShowTaskbtn2(marginT2) {
  let resBcIm = ""
  resBcIm = `

  #bouton2{
    
    margin-top: ${marginT2}
    
}`
return resBcIm
}

function ShowTaskbtn3(marginT3) {
  let resBcIm = ""
  resBcIm = `

  #bouton3{
    
    margin-top: ${marginT3}
    ;
}
          </style>
          </head>
          `

  return resBcIm
}


function ShowTDL(adresse) {
  let resAd = ""

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

  return resAd
}

//changement deb
function ShowTasksDttrt(date) {
  let resDB_dt = ""

  resDB_dt = `
  </br>
      <div class="row">
            <div class="col-2 col-md-2 col-lg-2">
             <h4>${date}</h4>
            </div>
      </div>  
            `
  return resDB_dt
}

function ShowTasksPriorite(results) {
  let resDB = ""

  resDB = `
          <div class="row">
            <div class="col-1 col-md-1 col-lg-1  border border-info">
              <p>${results}</p>
            </div>
            `
  return resDB
}

function ShowTasksTyp(results) {
  let resDB = ""

  resDB = `
    <div class="col-1 col-md-1 col-lg-1  border border-info">
      <p>  ${results} </p>
      </div>
    `
  return resDB
}

function ShowTasks(results) {
  let resDB = ""

  resDB = `
    <div class="col-2 col-md-2 col-lg-2  border border-info">
      <p> ${results}</p>
      </div>
        `

  return resDB
}


function ShowTasksDesc(results) {
  let resDB = ""

  resDB = `
        <div class="col-3 col-md-3 col-lg-3  border border-info">
          <p>  ${results} </p>
        </div>
                            `

  return resDB
}

function ShowTasksActor(results) {
  let resDB = ""

  resDB = `
    <div class="col-2 col-md-2 col-lg-2  border border-info">
      <p>${results} </p>
    </div>
    `
  return resDB
}


function ShowTasksDtEch(results) {
  let resDB = ""

  resDB = `
    <div class="col-2 col-md-2 col-lg-2  border border-info">
      <p>  ${results} </p>
      </div>  
      `
  return resDB
}


function ShowTasksbt(results) {
  let resDB = ""

  resDB = `
    <div class="col-1 col-md-1 col-lg-1 border border-info">
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name ="${results}">
        <label class="form-check-label" for="flexSwitchCheckDefault">fait</label>
      </div>
    </div>
    </div>
    `

  return resDB
}



//changement fin

// Formulaire
function ShowFmlHead_marginL(marginL) {
  let resHMarL = ""

  resHMarL =
    `
    margin-left: ${marginL};
    `
  return resHMarL
}

function ShowFmlHead_marginT(marginT) {
  let resHMarL = ""

  resHMarL =
    `
      margin-top: ${marginT};
      `
  return resHMarL
}

function ShowFmlHead_width(HWidth) {
  let resHWidth = ""

  resHWidth =
    `
     width: ${HWidth};
        `
  return resHWidth
}

function ShowFmlHead_height(Hheight) {
  let resHHeight = ""

  resHHeight =
    `
    height: ${Hheight};
          `
  return resHHeight
}

function ShowFmlHead_colour(HColour) {
  let resHColour = ""

  resHColour =
    `
    color: ${HColour};
}
          `
  return resHColour
}


function ShowFmlImg(image) {
  let resFimg = ""

  resFimg =
    `
  body {

      background-image: url("${image}");
     
      background-size: cover;
  }

  input:hover,
  textarea:hover,
  select:hover {
      border: 2px solid blueviolet;
  }
`
  return resFimg
}

function ShowFmlTitreTxtAl(TxtAlig) {
  let resTxtAlig = ""

  resTxtAlig =
    `
  #titre {
      text-align: ${TxtAlig};
      font-size: larger;

  }

  </style>
</head>
  
  `
  return resTxtAlig
}

function ShowFmlAdAcc(FmlAdAcc) {
  let resFmlAdAcc = ""

  resFmlAdAcc =
    `
    <body>
        <div id = "fond" class="container">
        <form method="GET">
            <div class="row">
                <div class="col-4 col-md-4 col-lg-4 text-center">
                   <button type="submit" formaction="http://localhost:3000/${FmlAdAcc}" method="GET"
                     class="btn btn-primary btn-rounded">Accueil</button>
                </div>
                <div class="col-4 col-md-4 col-lg-4 text-left">
                   <button type="submit" formaction="http://localhost:3000/" method="GET"
                     class="btn btn-outline-danger">Sortir</button>
                </div>
            </div> 
            </br>
            <div class="row">
                <div id="titre" class="col-4 col-md-4 col-lg-4">
                    <em>Nouvelle tâche : </em>
                </div>
            </div>
        </form>
        `

  return resFmlAdAcc
}

function ShowFmlAdTach(FmlAdTach) {
  let resFmlAdTach = ""

  resFmlAdTach =
    `
    <form action="http://localhost:3000/${FmlAdTach}" method="POST">
        `

  return resFmlAdTach
}

function ShowFmlRespTach(FmlRespTach) {
  let resFmlRespTach = ""

  resFmlRespTach =
    `
    <option>${FmlRespTach}</option>
        `

  return resFmlRespTach
}


function ShowFmlRespTachInd(FmlRespTachInd) {
  let resFmlRespTachInd = ""

  resFmlRespTachInd =
    `
      <input id="RespTache" value = "${FmlRespTachInd}" readonly = "readonly" name="userRespTache" class="form-control"/>

        `

  return resFmlRespTachInd
}

function ShowFmlCreatT(FmlCreatT) {
  let resFmlCreatT = ""

  resFmlCreatT =
    `
      <input id="CreaTache" value = "${FmlCreatT}" readonly = "readonly" name="userCreaTache" class="form-control"/>
    
        `

  return resFmlCreatT
}



function ShowFmlTypTach(FmlTypTach) {
  let resFmlTypTach = ""

  resFmlTypTach =
    `
    <option>${FmlTypTach}</option>
        `

  return resFmlTypTach
}

function ShowFml(adresse) {
  let resAdF = ""


  resAdF = `
  <br/>
  <div class="col-6">
      <button id="bouton2" type="submit" formaction="http://localhost:3000/${adresse}"
          class="btn btn-primary btn-rounded">Nouvelle tâche</button>
  </div>
  <div class="col-6 col-md-6 col-lg-6 text-left">
  <button id="bouton3" type="submit" formaction="http://localhost:3000/" method="GET"
    class="btn btn-outline-danger">Sortir</button>
</div>

</form>
</div>
</body>

</html>
          `

  return resAdF
}



function ShowTDL_Style_color(color) {
  let resTDL_Style_color = ""

  resTDL_Style_color =
    `
    <style>
    div>p{
        height: 10;
         }

         .container{
            width: 100%;
            color: ${color};
   
        }
        #idTache{
            display: none;
        }
        `

  return resTDL_Style_color
}

function ShowTDL_Style_img(img) {
  let resTDL_Style_img = ""

  resTDL_Style_img =
    `
    body{
      background-image: url("${img}");
  
      background-size: cover;
      background-repeat: no-repeat
  }
  </style >
</head >
        `

  return resTDL_Style_img
}

function ShowTDL_adr_Form(adr1) {
  let resTDL_adr_Form = ""

  resTDL_adr_Form =
    `
    <div class="col-4 col-md-4 col-lg-4 text-center">
    <button type="submit" formaction="http://localhost:3000/${adr1}" method="GET"
    class="btn btn-primary btn-rounded">Formulaire</button>
</div>
        `

  return resTDL_adr_Form
}

function ShowTDL_adr_Accueil(adr2) {
  let resDL_adr_Accueil = ""

  resDL_adr_Accueil =
    `
    <div class="col-4 col-md-4 col-lg-4 text-center">
    <button type="submit" formaction="http://localhost:3000/${adr2}" method="GET"
        class="btn btn-primary btn-rounded">Accueil</button>
</div>
        `

  return resDL_adr_Accueil
}

function ShowresDL_adr_Authent() {
  resDL_adr_Authent =
    `
<div class="col-4 col-md-4 col-lg-4 text-center">
<button type="submit" formaction="http://localhost:3000/" method="GET"
    class="btn btn-outline-danger">Sortir</button>
</div>
    `
  return resDL_adr_Authent
}

function ShowTDL_dateTab(date) {
  let resTDL_dateTab = ""

  resTDL_dateTab =
    `
    <div class="row">
         <div class="col-2 col-md-2 col-lg-2">
              <h4>${date}</h4>
        </div>  
  </div>
        `
  return resTDL_dateTab
}

function ShowTDL_id_task(adr3) {
  let resTDL_id_task = ""

  resTDL_id_task =
    `
    <form action="http://localhost:3000/${adr3}" method="POST">

        `

  return resTDL_id_task
}

app.get('/get-task', (req, res) => {
  db.dbGetTasks(
    function (error, results, fields) {
      let image = "totoro_et.jpg"
      let color = "lightslategray"
      let adr1 = "Formulaire_taches"
      let adr2 = "accueil_Soso"
      let adr3 = "get-task"

      let html = formatHtml.head_html();
      html = html + ShowTDL_Style_color(color)
      html = html + ShowTDL_Style_img(image)
      html = html + formatHtml.titre_html()
      html = html + ShowTDL_adr_Form(adr1)
      html = html + ShowTDL_adr_Accueil(adr2)
      html = html + ShowresDL_adr_Authent()
      html = html + formatHtml.titre_html_Fin()

      let dt_temp = "01-01-2020"
      for (let i in results.rows) {
        if (dt_temp < results.rows[i].dt_prevue) {
          html = html + ShowTasksDttrt(results.rows[i].dt_prevue)
          html = html + formatHtml.titre_col_html()
          html = html + ShowTDL_id_task(adr3)
        }
        html = html + ShowTasksPriorite(results.rows[i].ind_priorite)
        html = html + ShowTasksTyp(results.rows[i].type_task)
        html = html + ShowTasks(results.rows[i].nom)
        html = html + ShowTasksDesc(results.rows[i].description)
        html = html + ShowTasksActor(results.rows[i].resp_task)
        html = html + ShowTasksDtEch(results.rows[i].dt_echeance)
        html = html + ShowTasksbt(results.rows[i].id)
        dt_temp = results.rows[i].dt_prevue
      }
      html = html + formatHtml.boutonV()
      html = html + formatHtml.ferm_form_html()
      html = html + formatHtml.queue_html()
      res.send(html)
    },

  )

})

app.get('/get-task-Sso', (req, res) => {
  db.dbGetTasksSso(
    function (error, results, fields) {

      let image = "chihiro_bleu.jpg"
      let color = "whitesmoke"
      let adr1 = "Formulaire_taches_Sso"
      let adr2 = "accueil_Serena"
      let adr3 = "get-task-Sso"

      let html = formatHtml.head_html();
      html = html + ShowTDL_Style_color(color)
      html = html + ShowTDL_Style_img(image)
      html = html + formatHtml.titre_html()
      html = html + ShowTDL_adr_Form(adr1)
      html = html + ShowTDL_adr_Accueil(adr2)
      html = html + ShowresDL_adr_Authent()
      html = html + formatHtml.titre_html_Fin()
      let dt_temp = "01-01-2020"

      for (let i in results.rows) {
        if (dt_temp < results.rows[i].dt_prevue) {
          html = html + ShowTasksDttrt(results.rows[i].dt_prevue)
          html = html + formatHtml.titre_col_html()
          html = html + ShowTDL_id_task(adr3)
        }
        html = html + ShowTasksPriorite(results.rows[i].ind_priorite)
        html = html + ShowTasksTyp(results.rows[i].type_task)
        html = html + ShowTasks(results.rows[i].nom)
        html = html + ShowTasksDesc(results.rows[i].description)
        html = html + ShowTasksActor(results.rows[i].resp_task)
        html = html + ShowTasksDtEch(results.rows[i].dt_echeance)
        html = html + ShowTasksbt(results.rows[i].id)
        dt_temp = results.rows[i].dt_prevue
      }
      html = html + formatHtml.boutonV()
      html = html + formatHtml.ferm_form_html()
      html = html + formatHtml.queue_html()
      res.send(html)
    },

  )

})

app.get('/get-task-Eso', (req, res) => {
  db.dbGetTasksEso(
    function (error, results, fields) {

      let image = "kohoha_black.jpg"
      let color = "antiquewhite"
      let adr1 = "Formulaire_taches_Eso"
      let adr2 = "accueil_Ethan"
      let adr3 = "get-task-Eso"

      let html = formatHtml.head_html();
      html = html + ShowTDL_Style_color(color)
      html = html + ShowTDL_Style_img(image)
      html = html + formatHtml.titre_html()
      html = html + ShowTDL_adr_Form(adr1)
      html = html + ShowTDL_adr_Accueil(adr2)
      html = html + ShowresDL_adr_Authent()
      html = html + formatHtml.titre_html_Fin()

      let dt_temp = "01-01-2020"

      for (let i in results.rows) {
        if (dt_temp < results.rows[i].dt_prevue) {
          html = html + ShowTasksDttrt(results.rows[i].dt_prevue)
          html = html + formatHtml.titre_col_html()
          html = html + ShowTDL_id_task(adr3)
        }
        html = html + ShowTasksPriorite(results.rows[i].ind_priorite)
        html = html + ShowTasksTyp(results.rows[i].type_task)
        html = html + ShowTasks(results.rows[i].nom)
        html = html + ShowTasksDesc(results.rows[i].description)
        html = html + ShowTasksActor(results.rows[i].resp_task)
        html = html + ShowTasksDtEch(results.rows[i].dt_echeance)
        html = html + ShowTasksbt(results.rows[i].id)
        dt_temp = results.rows[i].dt_prevue
      }
      html = html + formatHtml.boutonV()
      html = html + formatHtml.ferm_form_html()
      html = html + formatHtml.queue_html()
      res.send(html)
    },

  )

})

app.get('/accueil_Soso', (req, res) => {

  let margL = "60%"
  let margT = "20%"
  let width = "40vw"
  let height = "90vh"
  let bckPos = "right top"
  let image = "totoro_question2.png"
  let image2 = "paysage.jpg"
  let adresse1 = "get-task"
  let adresse2 = "Formulaire_taches"
  let color = "blue"
  let pdng = "100px"
  let marginT1 = "10%"
  let marginT2 = "5%"
  let marginT3 = "10%"

  let html = formatHtml.accueil1_html();
  html = html + ShowTaskImage_margL(margL)
  html = html + ShowTaskImage_margT(margT)
  html = html + ShowTaskImage_width(width)
  html = html + ShowTaskImage_height(height)
  html = html + ShowTaskImage_bckPos(bckPos)
  html = html + ShowTaskImage(image);
  html = html + ShowTaskBackIm(image2);
  html = html + ShowTaskTitre(color);
  html = html + ShowTaskTitre_pdng(pdng);
  html = html + ShowTaskbtn1(marginT1);
  html = html + ShowTaskbtn2(marginT2);
  html = html + ShowTaskbtn3(marginT3);
  html = html + ShowTDL(adresse1);
  html = html + ShowFml(adresse2);

  res.send(html)
})

app.get('/accueil_Serena', (req, res) => {

  let margL = "60%"
  let margT = "10%"
  let width = "30vw"
  let height = "80vh"
  let bckPos = "right top"
  let image = "chihiro.png"
  let image2 = "paysage chihiro.jpg"
  let adresse1 = "get-task-Sso"
  let adresse2 = "Formulaire_taches_Sso"
  let color = "red"
  let pdng = "0"
  let marginT1 = "10%"
  let marginT2 = "10%"
  let marginT3 = "20%"

  let html = formatHtml.accueil1_html();
  html = html + ShowTaskImage_margL(margL)
  html = html + ShowTaskImage_margT(margT)
  html = html + ShowTaskImage_width(width)
  html = html + ShowTaskImage_height(height)
  html = html + ShowTaskImage_bckPos(bckPos)
  html = html + ShowTaskImage(image);
  html = html + ShowTaskBackIm(image2);
  html = html + ShowTaskTitre(color);
  html = html + ShowTaskTitre_pdng(pdng);
  html = html + ShowTaskbtn1(marginT1);
  html = html + ShowTaskbtn2(marginT2);
  html = html + ShowTaskbtn3(marginT3);
  html = html + ShowTDL(adresse1);
  html = html + ShowFml(adresse2);

  res.send(html)
})

app.get('/accueil_Ethan', (req, res) => {

  let margL = "10%"
  let margT = "10%"
  let width = "30vw"
  let height = "80vh"
  let bckPos = "right top"
  let image = "naruto4.png"
  let image2 = "konoha3.jpg"
  let adresse1 = "get-task-Eso"
  let adresse2 = "Formulaire_taches_Eso"
  let color = "white"
  let pdng = "0"
  let marginT1 = "10%"
  let marginT2 = "10%"
  let marginT3 = "20%"

  let html = formatHtml.accueil1_html();
  html = html + ShowTaskImage_margL(margL)
  html = html + ShowTaskImage_margT(margT)
  html = html + ShowTaskImage_width(width)
  html = html + ShowTaskImage_height(height)
  html = html + ShowTaskImage_bckPos(bckPos)
  html = html + ShowTaskImage(image);
  html = html + ShowTaskBackIm(image2);
  html = html + ShowTaskTitre(color);
  html = html + ShowTaskTitre_pdng(pdng);
  html = html + ShowTaskbtn1(marginT1);
  html = html + ShowTaskbtn2(marginT2);
  html = html + ShowTaskbtn3(marginT3);
  html = html + ShowTDL(adresse1);
  html = html + ShowFml(adresse2);

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

app.post("/get-task-Eso", (request, response) => {

  let formData = []

  for (let k in request.body) {
    formData.push([k])
  }

  db.dbUpdateTasks(formData, function () {
    response.redirect("/get-task-Eso")
  })

})

app.post("/get-task-Sso", (request, response) => {

  let formData = []

  for (let k in request.body) {
    formData.push([k])
  }

  db.dbUpdateTasks(formData, function () {
    response.redirect("/get-task-Sso")
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
  let marginL = "75%"
  let marginT = "0%"
  let HWidth = "500px"
  let Hheight = "700px"
  let HColour = "aliceblue"
  let TxtAlig = "center"

  let image = "toto_dodo.jpg"
  let adr1 = "accueil_Soso"
  let adr2 = "Formulaire_taches"
  let FmlCreatT = "Sophie"
  let RespTach1 = "Serena"
  let RespTach2 = "Sophie"
  let RespTach3 = "Ethan"
  let TypTach1 = "Professionnel"
  let TypTach2 = "Famille"
  let TypTach3 = "Personnel"


  let html = formatHtml.headF_html();
  html = html + ShowFmlHead_marginL(marginL)
  html = html + ShowFmlHead_marginT(marginT)
  html = html + ShowFmlHead_width(HWidth)
  html = html + ShowFmlHead_height(Hheight)
  html = html + ShowFmlHead_colour(HColour)


  html = html + ShowFmlImg(image)
  html = html + ShowFmlTitreTxtAl(TxtAlig)
  html = html + ShowFmlAdAcc(adr1)
  html = html + ShowFmlAdTach(adr2)

  html = html + formatHtml.bodyF_htmlCreatT()
  html = html + ShowFmlCreatT(FmlCreatT)
  html = html + formatHtml.bodyF_htmlFinRespTachFin()

  html = html + formatHtml.bodyF_htmlRespT()
  html = html + formatHtml.bodyF_htmlLibRespTSelect()

  html = html + ShowFmlRespTach(RespTach1)
  html = html + ShowFmlRespTach(RespTach2)
  html = html + ShowFmlRespTach(RespTach3)
    html = html + formatHtml.bodyF_htmlFinRespTachSelect()
  html = html + formatHtml.bodyF_htmlFinRespTachFin()

  html = html + formatHtml.bodyF_htmlPrioritaire()
  html = html + formatHtml.bodyF_htmlLibTypTach()
  html = html + ShowFmlTypTach(TypTach1)
  html = html + ShowFmlTypTach(TypTach2)
  html = html + ShowFmlTypTach(TypTach3)
  html = html + formatHtml.bodyF_htmlFinTypTach()
  html = html + formatHtml.bodyF_htmlFin()
  html = html + formatHtml.queue_html()

  res.send(html)
})

app.get('/Formulaire_taches_Sso', (req, res) => {
  let marginL = "10%"
  let marginT = "3%"
  let HWidth = "500px"
  let Hheight = "700px"
  let HColour = "aliceblue"
  let TxtAlig = "left"

  let image = "chihiro_charbon.jpg"
  let adr1 = "accueil_Serena"
  let adr2 = "Formulaire_taches"
  let FmlCreatT = "Serena"
  let RespTach = "Serena"
  let TypTach1 = "Famille"
  let TypTach2 = "Personnel"

  let html = formatHtml.headF_html();
  html = html + ShowFmlHead_marginL(marginL)
  html = html + ShowFmlHead_marginT(marginT)
  html = html + ShowFmlHead_width(HWidth)
  html = html + ShowFmlHead_height(Hheight)
  html = html + ShowFmlHead_colour(HColour)

  html = html + ShowFmlImg(image)
  html = html + ShowFmlTitreTxtAl(TxtAlig)
  html = html + ShowFmlAdAcc(adr1)
  html = html + ShowFmlAdTach(adr2)

  html = html + formatHtml.bodyF_htmlCreatT()
  html = html + ShowFmlCreatT(FmlCreatT)
  html = html + formatHtml.bodyF_htmlFinRespTachFin()

  html = html + formatHtml.bodyF_htmlRespT()
  html = html + ShowFmlRespTachInd(RespTach)

  html = html + formatHtml.bodyF_htmlFinRespTachFin()
  html = html + formatHtml.bodyF_htmlPrioritaire()
  html = html + formatHtml.bodyF_htmlLibTypTach()
  html = html + ShowFmlTypTach(TypTach1)
  html = html + ShowFmlTypTach(TypTach2)
  html = html + formatHtml.bodyF_htmlFinTypTach()
  html = html + formatHtml.bodyF_htmlFin()
  html = html + formatHtml.queue_html()

  res.send(html)
})

app.get('/Formulaire_taches_Eso', (req, res) => {
  let marginL = "30%"
  let marginT = "2%"
  let HWidth = "500px"
  let Hheight = "700px"
  let HColour = "aliceblue"
  let TxtAlig = "center"

  let image = "fd_naruto.jpg"
  let adr1 = "accueil_Ethan"
  let adr2 = "Formulaire_taches"
  let FmlCreatT = "Ethan"
  let RespTach = "Ethan"
  let TypTach1 = "Famille"
  let TypTach2 = "Personnel"

  let html = formatHtml.headF_html();
  html = html + ShowFmlHead_marginL(marginL)
  html = html + ShowFmlHead_marginT(marginT)
  html = html + ShowFmlHead_width(HWidth)
  html = html + ShowFmlHead_height(Hheight)
  html = html + ShowFmlHead_colour(HColour)


  html = html + ShowFmlImg(image)
  html = html + ShowFmlTitreTxtAl(TxtAlig)
  html = html + ShowFmlAdAcc(adr1)
  html = html + ShowFmlAdTach(adr2)
  html = html + formatHtml.bodyF_htmlCreatT()
  html = html + ShowFmlCreatT(FmlCreatT)
  html = html + formatHtml.bodyF_htmlFinRespTachFin()
  html = html + formatHtml.bodyF_htmlRespT()
  html = html + ShowFmlRespTachInd(RespTach)
  html = html + formatHtml.bodyF_htmlFinRespTachFin()
  html = html + formatHtml.bodyF_htmlPrioritaire()


  html = html + formatHtml.bodyF_htmlLibTypTach()
  html = html + ShowFmlTypTach(TypTach1)
  html = html + ShowFmlTypTach(TypTach2)
  html = html + formatHtml.bodyF_htmlFinTypTach()
  html = html + formatHtml.bodyF_htmlFin()
  html = html + formatHtml.queue_html()

  res.send(html)
})

app.post("/Formulaire_taches", (request, response) => {


  let formData = [
    request.body['userTache'],
    request.body['userDescription'],
    request.body['userdateEch'],
    request.body['userTypTache'],
    request.body['userPrioTache'],
    request.body['userRespTache'],
    request.body['userCreaTache'],
    request.body['userdateTrait']

  ]

  let createur = request.body['userCreaTache']


  db.dbInsTasks(formData, function () {

    switch (createur) {

      case "Serena":
        response.redirect("/get-task-Sso")
        break;

      case "Ethan":
        response.redirect("/get-task-Eso")
        break;

      case "Sophie":
        response.redirect("/get-task")
        break;

    }


  })

})


app.get('/get-data', (req, res) => {
  db.dbGetTasks(

    function (error, results, fields) {

      res.json(results.rows)
    }

  )

})

//identification

app.get('/', (req, res) => {

  let html = formatHtml.FAuthentificationH();

  res.send(html)


})

app.post("/Formulaire_authent", (request, response) => {

  let idIdent = request.body['userIdent']
  let pageIdent = "/accueil_" + idIdent

  let formData = [request.body['userIdent'], request.body['userMdp']]

  db.dbGetIdent(formData, function (error, results, fields) {


    if (results.rowCount == 0) {

      response.redirect("/")

    }
    else {

      response.redirect(pageIdent)

    }

  })


})





app.get('/get-id', (req, res) => {
  db.dbGetIdent(

    function (error, results, fields) {

      res.json(results.rows)
    }

  )

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} `)
})



module.exports = {
  ShowTaskImage: ShowTaskImage,
  ShowTasksActor: ShowTasksActor,
  ShowTasksDttrt: ShowTasksDttrt

}