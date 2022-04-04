import React from 'react';
import "../styles/MenuInicial.css";
import variable from "./menu.js"
import { useState, useEffect} from 'react';

function MenuInicial(){
    return(
        <div class="modal-container" id="modal_container">
            <div class="modal">
                <div class="flexbox">
                    <span class="reglas">TAIKO F - TECLAS: V B N M</span>
                </div>
                <div class="songs">
                    <button class="b-left" id="b-left"><img class="triangle" src=".images/icon-triangle.png" alt="b-left"/></button>
                    <div class="song" id="song1">
                        <div class="name_song" id="name_song1"></div>
                        <img class="image" id="image_song1"></img>
                        <div class="dif_song" id="dif_song1"></div>
                    </div>
                    <div class="song" id="song2">
                        <div class="name_song song2" id="name_song2"></div>
                        <img class="image" id="image_song2"></img>
                        <div class="dif_song song2" id="dif_song2"></div>
                        <button id="b-jugar" class="b-jugar"><img class="icon-jugar"src="images/play.webp" alt="play-icon"/></button>
                    </div>
                    <div class="song" id="song3">
                        <div class="name_song" id="name_song3"></div>
                        <img class="image" id="image_song3"></img>
                        <div class="dif_song" id="dif_song3"></div>
                    </div>
                    <button class="b-right" id="b-right"><img class="triangle" src="images/icon-triangle.png" alt="b-right"/></button>
                </div>
            </div>
            <script src="./menu.js"></script>
        </div>
    );
}

export default MenuInicial;