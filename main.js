var canvas=new fabric.Canvas("myCanvas");
var posicionx=500;
var posiciony=300;
var blocktamaño=50;
var player="";
var block="";

function dibujar_jugador(){
    fabric.Image.fromURL("pug_minecraft.png",function(Img){
        player=Img;
        player.scaleToWidth(150);
        player.scaleToHeight(200);
        player.set({
            top:posiciony,
            left:posicionx
        })
        canvas.add(player);
    });
}
function dibujar_block(blocke_seleccionado){
    fabric.Image.fromURL(blocke_seleccionado,function(Img){
        block=Img;
        block.scaleToWidth(blocktamaño);
        block.scaleToHeight(blocktamaño);
        block.set({
            top:posiciony,
            left:posicionx
        })
        canvas.add(block);
    });
}
window.addEventListener("keydown", elegirblocke);
function elegirblocke(h){
    var tecla_presionada=h.keyCode;
    console.log(tecla_presionada);
    if(tecla_presionada==67){
        dibujar_block("cloud.jpg");
        console.log("c");
    }
    if(tecla_presionada==68){
        dibujar_block("dark_green.png");
        console.log("d");
    }
    if(tecla_presionada==71){
        dibujar_block("ground.png");
        console.log("g");
    }
    if(tecla_presionada==76){
        dibujar_block("light_green.png");
        console.log("l");
    }
    if(tecla_presionada==82){
        dibujar_block("roof.jpg");
        console.log("r");
    }
    if(tecla_presionada==84){
        dibujar_block("trunk.jpg");
        console.log("t");
    }
    if(tecla_presionada==85){
        dibujar_block("unique.png");
        console.log("u");
    }
    if(tecla_presionada==87){
        dibujar_block("wall.jpg");
        console.log("w");
    }
    if(tecla_presionada==89){
        dibujar_block("yellow_wall.png");
        console.log("y");
    }
    if(tecla_presionada==80&&h.shiftKey==true){
        blocktamaño=blocktamaño+5;
        document.getElementById("current_width").innerHTML=blocktamaño;
        document.getElementById("current_height").innerHTML=blocktamaño;
    }
    if(tecla_presionada==77&&h.shiftKey==true){
        blocktamaño=blocktamaño-5;
        document.getElementById("current_width").innerHTML=blocktamaño;
        document.getElementById("current_height").innerHTML=blocktamaño;
    }
    if(tecla_presionada==37){
        console.log("left");
        izquierda();
    }
    if(tecla_presionada==38){
        console.log("arriba");
        arriba();
    }
    if(tecla_presionada==39){
        console.log("right");
        derecha();
    }
    if(tecla_presionada==40){
        console.log("down");
        abajo();
    }
}
function derecha(){
    if(posicionx<=900){
        posicionx=posicionx+blocktamaño;
        console.log("tamaño de blocke"+blocktamaño);
        console.log("su posición en x es:"+posicionx);
        console.log("su posición en y es:"+posiciony);
        canvas.remove(player);
        dibujar_jugador();
    }
}
function izquierda(){
    if(posicionx>0){
        posicionx=posicionx-blocktamaño;
        console.log("tamaño de blocke"+blocktamaño);
        console.log("su posición en x es:"+posicionx);
        console.log("su posición en y es:"+posiciony);
        canvas.remove(player);
        dibujar_jugador();
    }
}
function arriba(){
    if(posiciony>=0){
        posiciony=posiciony-blocktamaño;
        console.log("tamaño de blocke"+blocktamaño);
        console.log("su posición en x es:"+posicionx);
        console.log("su posición en y es:"+posiciony);
        canvas.remove(player);
        dibujar_jugador();
    }
}
function abajo(){
    if(posiciony<=500){
        posiciony=posiciony+blocktamaño;
        console.log("tamaño de blocke"+blocktamaño);
        console.log("su posición en x es:"+posicionx);
        console.log("su posición en y es:"+posiciony);
        canvas.remove(player);
        dibujar_jugador();
    }
}