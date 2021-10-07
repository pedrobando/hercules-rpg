"use strict" ;
function generateAttack(attackArray, damageArray){
    return attackArray[Math.floor(Math.random() * attackArray.length)], damageArray[Math.floor(Math.random() * damageArray.length)];
}

