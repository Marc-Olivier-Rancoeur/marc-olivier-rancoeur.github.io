function setLat(){
    if("geolocation" in navigator){
        getLat();
    }else{
        modifyLat("Erreur");
    }
}
function getLat(){
    navigator.geolocation.getCurrentPosition(function(position){
        modifyLat(position.coords.latitude);
    });
}
function modifyLat(posLat){
    document.getElementById('lat').innerHTML = posLat;
}

function setLong(){
    if("geolocation" in navigator){
        getLong();
    }else{
        modifyLong("Erreur");
    }
}
function getLong(){
    navigator.geolocation.getCurrentPosition(function(position){
        modifyLong(position.coords.longitude);
    });
}
function modifyLong(posLong){
    document.getElementById('long').innerHTML = posLong;
}

let b = document.querySelector("#reculer");
b.addEventListener("click", function(){
    let recul = document.getElementById('nbpages').value;
    if(recul > 0){
        window.history.go(-recul);
    }
});
let c = document.querySelector("#copier");
c.addEventListener("click", function(){
    let val = document.getElementById('textecopie').value;
    navigator.clipboard.writeText(val).then(function(){
        alert("Copié !");
    });
});
let d = document.querySelector("#coller");
d.addEventListener("click", function(){
    navigator.clipboard.readText().then(
        clipText => document.getElementById('textecolle').value = clipText
    );
});