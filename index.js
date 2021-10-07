"use strict" ;
function generateAttack(attackArray, damageArray){
    return attackArray[Math.floor(Math.random() * attackArray.length)], damageArray[Math.floor(Math.random() * damageArray.length)];
}

function hercules(attack, damage){
    attack = generateAttack["Heavy Attack", "Light Attack", "Heavy Sword Attack"];
    damage = generateAttack[20, 30, 20, 25, 15];
    return attack, damage 
}

function nemeanLion(nAttack, nDamage){
    nAttack = generateAttack["Heavy Attack", "Light Attack", "Heavy Sword Attack"];
    nDamage = generateAttack[20, 30, 20, 25, 15];
    return nAttack, nDamage 
}

function hydra(hAttack, hDamage){
    hAttack = generateAttack["Heavy Attack", "Light Attack", "Heavy Sword Attack"];
    hDamage = generateAttack[20, 30, 20, 25, 15];
    return hAttack, hDamage 
}

function cerberus(cAttack, cDamage){
    cAttack = generateAttack["Heavy Attack", "Light Attack", "Heavy Sword Attack"];
    cDamage = generateAttack[20, 30, 20, 25, 15];
    return cAttack, cDamage 
}

