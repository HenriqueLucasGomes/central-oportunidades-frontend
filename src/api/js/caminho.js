import {protocolo} from "../controllers/protocolo.js";
import {dentro} from "../controllers/dentro.js";
import {fora} from "../controllers/fora.js";
// var $ = require ( 'jquery' ); 
// $("<h1>Include this using jquery</h1>").appendTo("body");
// console.log($("body").html());

// const protocolo=require('../controllers/protocolo.js')

console.log("foi")
// const imagemData=require("../models/foto.js")
$("#button_orange1").click(


function dent(){
    console.log("foi1")
    protocolo("1")
    dentro()

})


$("#button_orange2").click(

function fo(){
    console.log("foi2")

    protocolo("2")
    fora()
})

// console.log(protocolo.pdf)
// exports.dentro=protocolo.pdf

