let hercules = {
	health : 100, 
    attacks : [{heavyAttack:25, name: "Sword"},{lightAttack:20, name: "Grapple"},{smallAttcak:5, name: "punch"}],
    name : "Hercules" 
    }
    
let lion = {
	health : 100, 
    attacks : [{heavyAttack:25, name: "Crunch"},{lightAttack:20, name: "Tackle"},{smallAtack:5, name: "Roar" }],
    name : "Nemean Lion"     
    }

let hydra = {
    health : 100, 
    attacks : [{heavyAttack:25, name: "Fire"},{lightAttack:20, name: "9 Head Tackle"},{smallAtack:5, name: "Spit Venom" }],
    name: "Lernaean Hydra"
    }

let dog = {
    health : 100, 
    attacks : [{heavyAttack:25, name: "Bite"},{lightAttack:20, name: "Tackle"},{smallAtack:5, name: "Scratch" }],
    name: "Cerberus" 
    }

function attackIt(a, d){
	d.health -= a.attacks[0].heavyAttack;
  
}


//let test = dog.attacks[Math.floor(Math.random()* dog.attacks.length)];
//console.log(test)

function slayDragon(a, d){
    while(a.health != 0 && d.health != 0){
 	    attackIt(a,d);
         console.log(`${a.name} used ${a.attacks[0].name}, ${d.name} health is now ${d.health}`);
         if(d.health != 0 && a.health != 0){
            attackIt(d,a);
             console.log(`${d.name} used ${d.attacks[0].name}, ${a.name} health is now ${a.health}`);
        }
    }
    
  
  console.log(hercules.health, lion.health)
 }

 slayDragon(hercules, lion)
