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
alert("Hercules, the greatest of the Greek Heroes! You have been tasked by King Eurystheus to slay the vicious Nemean Lion, defeat the impossible nine-headed Lernaean Hydra, and capture the guard dog of the underworld—Cerberus. Will Hercules be successful?? Let's see!");
alert("Ohh no! Hercules is in trouble! Hades heard the King's order and sent the vicious Nemean Lion to Hercules location.");
alert("The Nemean Lion caught Hercules by surpriseee!!! Now their match begins....")
function slayDragon(a, d){
    while(a.health != 0 && d.health != 0){
 	    attackIt(a,d);
         alert(`${a.name} used ${a.attacks[0].name}, ${d.name} health is now ${d.health}!! Go go go ${a.name}`);
         console.log(`${a.name} used ${a.attacks[0].name}, ${d.name} health is now ${d.health}`);
         if(d.health != 0 && a.health != 0){
            attackIt(d,a);
            alert(`${d.name} used ${d.attacks[0].name}, ${a.name} health is now ${a.health} Buuuuuu Bu Buuuu ${d.name}`);
             console.log(`${d.name} used ${d.attacks[0].name}, ${a.name} health is now ${a.health}`);
        }
    }
    if(d.health == 0){
        alert(`${d.name} has been defeated by ${a.name} Hercules! Would Hades send the 9 headed Hydra? Or will they wait for Hercules to get there?`);
    }
    
  
  console.log(hercules.health, lion.health)
 }

 slayDragon(hercules, lion)
