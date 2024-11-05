let nome = "Vitor";
let XP = 4322;
let rank = "";

if ( XP <= 1000){
    rank = "Ferro";
}
else if ( XP <= 2000){
    rank = "Bronze"
}
else if ( XP <= 5000){
    rank = "Prata"
}
else if ( XP <= 7000){
    rank = "Ouro"
}
else if ( XP <= 8000){
    rank = "Platina"
}
else if ( XP <= 9000){
    rank = "Ascendente";
}
else if ( XP <= 10000){
    rank = "Imortal";
}
else {
    rank = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${rank}`);