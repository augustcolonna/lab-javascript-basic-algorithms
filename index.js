// Iteration 1: Names and Input
const hacker1 = "Gus";
console.log(`The drivers name is ${hacker1}.`);

const hacker2 = "Togara";
console.log(`The Navigators name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else if (hacker2.length == hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
//3.1
let spacedName = ""

for (let i = 0; i < hacker1.length; i++){
    
    spacedName += hacker1[i].toLocaleUpperCase()
    
        if (i < hacker1.length - 1){
            spacedName += " ";
        }
}

console.log(spacedName);

//3.2

let reverseName = ""
for (let j = hacker2.length - 1; j >= 0; j--){
    reverseName += hacker2[j]
}
console.log(reverseName);


//3.3
const array = [hacker1, hacker2];

for (let i=0; i < array.length ;i++) {
    if (hacker1 === hacker2){
        console.log("What?! You both have the same name?")
    }
    else if (hacker1[i] === hacker2[i]){
        continue;
    }

    else if (hacker1[i] < hacker2[i]){
        console.log("The driver's name goes first.")
    break}

    else if (hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first, definitely")
    break}

    else{
        console.log("No names in Array");
    break}
    }

//Bonus 1

const longText =` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet eget odio vitae ullamcorper. Suspendisse potenti. Donec vitae varius ligula. Nullam a fringilla orci. Praesent ultricies turpis a est pellentesque, at mattis quam tincidunt. Fusce vel sollicitudin mauris. Proin sem nisl, vestibulum sit amet dictum ac, congue a nulla. Curabitur scelerisque ipsum in elit aliquam malesuada. Ut non leo ac mauris dictum sodales vitae non ex.

Maecenas pulvinar dui id pellentesque auctor. In sollicitudin, magna in finibus tincidunt, neque lorem malesuada dolor, vel lacinia massa odio sed nisl. Nulla non urna sem. Nulla eu magna eget ligula aliquet blandit eget nec est. Sed viverra tortor a urna ullamcorper aliquet. Aenean tortor arcu, suscipit eget nulla nec, cursus finibus ante. Proin rhoncus, velit vitae imperdiet finibus, mauris urna hendrerit arcu, eu fermentum enim sapien ac eros. Nunc urna nisi, efficitur ac arcu a, lobortis mollis lorem. Cras ex nulla, porta in malesuada eu, mollis non urna. Morbi magna risus, venenatis eu dui quis, sollicitudin bibendum massa. Aliquam placerat gravida ligula ornare tempus. Curabitur velit purus, ultricies et mi in, faucibus varius ipsum. Suspendisse posuere neque orci, in dapibus dolor maximus ac. Nulla accumsan neque vel tortor viverra sollicitudin. Pellentesque dictum mauris sit amet felis suscipit, quis porta urna efficitur. 

Morbi ultricies, dui quis sollicitudin vehicula, lectus nunc euismod metus, eget porttitor felis velit consequat nisl. Nullam dictum placerat commodo. Nullam nec velit venenatis, viverra lorem nec, accumsan leo. Mauris dignissim elit a vehicula venenatis. Mauris nec pharetra nisl, eu porta nisl. In hac habitasse platea dictumst. Vestibulum eleifend sit amet nulla ut semper. Duis tempor dui eget sem consectetur, ut cursus sapien volutpat. Integer eu tortor nibh. `

let count = 0;
for (let i=0 ; i < longText.length ; i++){
    if (longText[i] === " "){
        count++;
    }
}
console.log(count);


//bonus 2

const phraseToCheck = "race car"
const newPhrase = phraseToCheck.replace(/[^A-Za-z0-9]/g, '')

let palindrome = "";


for (let i = newPhrase.length - 1; i > -1; i--){
    palindrome += newPhrase[i];
}

if (palindrome === newPhrase){
    console.log(palindrome);
}
else{
    console.log('not a palindrome')
}






