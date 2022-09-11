//Your Code here
const name = window.prompt("what is your name?")
console.log (name)
let firstAnswer = window.prompt ('Do you head left or right?');
console.log (firstAnswer)

//if user picked left...
if (firstAnswer === "left") {
    console.log("user picked left");
    let secondAnswer = window.prompt (`${name} chose to go left and you encounter a dragon! Do you fight or run?`)
    console.log (secondAnswer)
    if (secondAnswer === "run") {
        window.alert(`You win, ${name}! You escaped to fight another day!`);} 
            else if (secondAnswer === "fight") {
            console.log("user picks fight");
            let thirdAnswer = window.prompt ("While dodging a fiery flameball you stumble into the dragons hoard and discover an beautiful bejewled sword. Do you take it? yes or no")
            console.log (thirdAnswer)
                if (thirdAnswer === "yes") {
                    window.alert("The sword is cursed and sucks all your life away in moments. Game Over.");
                } else if (thirdAnswer === "no") {
                    window.alert(`A companion grabs the sword and dies almost instatly. You grab a sachel and a handfuls of gold and escape. Congrats, you live to fight again!`);
                }

    } else {
        window.alert("user error, game over");
    }
    }    

//if user picked right...
else if (firstAnswer === "right") {
    console.log("user picked right");
    let rightSecondAnswer = window.prompt (`${name}, you follow a long corrider that splits ito 3 paths. The left is cold and icelces hand from the roof, the center is dripping with strange slime, and the right has stairs leading up with soft music. left, center or right?`);    
   console.log (rightSecondAnswer);
//2nd choice left
    if (rightSecondAnswer === "left") {
        console.log (rightSecondAnswer);
            let rightThirdAnswer = window.prompt ("Wrapping your cloak tight you venture down the col pathway. After hours of shivering you find a forzen body. Do you loot the corpse? yes or no");
            console.log (rightThirdAnswer);
              if (rightThirdAnswer === "yes") {
                 window.alert("On him you find scorlls, potions and a safebox key. When you return home you discover the safebox is filled with riches. You never want in life again. Game Over.");
               } else if (rightThirdAnswer === "no") {
                   window.alert(`You pass the corpse and start to feel a breeze. Following the breeze you discover the pathway leads to the outside. Congrats, you live to fight again!`);
               } else {
              window.alert("user error, game over");}}
//2nd choice center
    else if (secondAnswer === "center"){
        console.log (rightThirdAnswer);
        let thirdAnswer = window.prompt ("The ground squishes beneath your feet, as you wallk deeper the air gets musty and uncomforable. You look back to see the cave closing. Do you continue forward or go back to pry open the cave? continue or return.");
        console.log (thirdAnswer)
            if (thirdAnswer === "return") {
                window.alert("With swords and spears you pry open the dave to discover the cave was actually a creature. You escape and live to adventure again!");
            } else if (thirdAnswer === "continue") {
                window.alert(`Suddenly, as if being swallowed your pushed further down and fall into a sea of stomach acid. Your death was quick-ish but painful. Game over.`);
            } else {
            window.alert("user error, game over");}
}}
//2nd choice right

/*        
else {
    window.alert("user error, game over");

    }
//if user picked neither
*/