let hercules = {
	health : 100, 
    attacks : [{heavyAttack:25},{lightAttack:20},{punch:5}] 
    }
    
let lion = {
	health : 100, 
    attacks : [{heavyAttack:25, name: "Hammer"},{lightAttack:20},{punch:5}] 
    }
    
let fighters = [lion, hercules];

function attackIt(a, d){
	d.health -= a.attacks[0].heavyAttack;
  
}
function slayDragon(a, d)
{
 while(a.health > 0 && d.health > 0){
 	attackIt(fighters[Math.floor(Math.random() * fighters.length)], fighters[Math.floor(Math.random() * fighters.length)]);
  
  console.log(hercules.health, lion.health)
 }
}
attackIt(hercules, lion);
console.log(hercules.health, lion.health)

attackIt(lion, hercules);
console.log(hercules.health, lion.health)

