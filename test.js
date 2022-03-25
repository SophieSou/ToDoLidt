// const express = require('express')
// const app = express()
// const port = 3000
// app.use(express.urlencoded({ extended: true }))

const functionAp1 = require('./app1.js')


//Les tests


//Test unitaire 1
function test_ShowTaskImage() {
    let image = "totoro_dodo.jpg"
  
    let test = functionAp1.ShowTaskImage(image)
  
  
    if (!test.includes("<style>")) {
      console.log("Test Unitaire 1 : ERREUR")
    }
    else {
      console.log("Test Unitaire 1 : Test OK")
    }
  }
  
  test_ShowTaskImage()
  //Test Unitaire 1 fin

  //Test unitaire 2
function test_ShowTasksActor() {
    let result = "Sophie"
  
    let test = functionAp1.ShowTasksActor(result)
  
  
    if (!test.includes("Sophie")) {
      console.log("Test Unitaire 2 : ERREUR")
    }
    else {
      console.log("Test Unitaire 2 : Test OK")
    }
  }
  
  test_ShowTasksActor()
  //Test Unitaire 2 fin

    //Test unitaire 3
function test_ShowTasksDttrt() {
    let result = "2022-03-20"
  
    let test = functionAp1.ShowTasksDttrt(result)
  
  
    if (!test.includes("2022-03-20")) {
      console.log("Test Unitaire 3 : ERREUR")
    }
    else {
      console.log("Test Unitaire 3 : Test OK")
    }
  }
  
  test_ShowTasksDttrt()
  //Test Unitaire 3 fin