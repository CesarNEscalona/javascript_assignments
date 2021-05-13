/**
 * Author: Cesar Escalona
 * SDEV 328 - Full stack Web Dev
 * @type {checkName} this function will check for a name that a user inputs and will compare it to
 * names in the JSON obj. It should return partial name searches and should be case insensitive
 */

// create a JSON variable with data for 5 people
let names = '{ "names" : [' +
    '{ "First":"Bill Gates" , "Sex":"Male" , "Born": "1955" ,' +
    ' "Died": "2052" , "Father": "William Henry Gates" , "Mother": "Mimi Gardner" },' +

    '{ "First":"Jane Doe" , "Sex":"Female" , "Born": "1990" ,' +
    ' "Died": "2020" , "Father": "Charlie Doe" , "Mother": "Mary Doe" },' +

    '{ "First":"Jane Ramirez" , "Sex":"Female" , "Born": "1980" ,' +
    ' "Died": "1999" , "Father": "Pedro Ramirez" , "Mother": "Maria Ramirez" },' +

    '{ "First":"Dom Toretto" , "Sex":"Male" , "Born": "1980" ,' +
    ' "Died": "2047" , "Father": "Roberto Toretto" , "Mother": "Mia Toretto" },' +

    '{ "First":"Brian Spilner" , "Sex":"Male" , "Born": "1973" ,' +
    ' "Died": "2013" , "Father": "Paul Spilner III" , "Mother": "Cheryl Spilner" }]}';

// use Json parse to convert string to object
let convert = JSON.parse(names);

console.log("All Done");
// When button is clicked, run the checkName function
document.getElementById("button").onclick = checkName;


// create a function that will check the name searched with the Json info
function checkName() {
    // flag variable used in line 95 and 99
    let total = 0;
    // this grabs what the user types in and converts it to lower case
    let fname = document.getElementById("search").value.toLowerCase();

    // If the input field is empty and they click submit...
    if(fname.length === 0){
        document.getElementById("print").innerHTML = "Text Box Must Contain a Name.";
    }
    // If they search a valid name
    else if (fname.length !== 0){
        // loop over elements checking for name
        for (let i = 0; i < convert.names.length; i++) {

            // Create the necessary elements to display on html page
            let Names = document.createElement("p");
            let Gender = document.createElement("p");
            let Born = document.createElement("p");
            let Died = document.createElement("p");
            let Father = document.createElement("p");
            let Mother = document.createElement("p");
            let br = document.createElement("br");

            // First name in the JSON file in lower case
            let first = convert.names[i].First.toLowerCase();
            // if the searched string has a few letters matching the first name, then display the match
            let isMatch = first.includes(fname);

            // If there is a match...
            if(isMatch === true) {
                // These variables will save the output that should display in the html page
                let String1 = "Name: " + convert.names[i].First;
                let String2 = "Sex: " + convert.names[i].Sex;
                let String3 = "Born: " + convert.names[i].Born;
                let String4 = "Died: " + convert.names[i].Died;
                let String5 = "Father: " + convert.names[i].Father;
                let String6 = "Mother: " + convert.names[i].Mother;

                // This assigns the strings above as text content for the html page
                Names.textContent = String1;
                Gender.textContent = String2;
                Born.textContent = String3;
                Died.textContent = String4;
                Father.textContent = String5;
                Mother.textContent = String6;

                // This grabs the parent element
                let text = document.getElementsByTagName("h4")[0];

                // This connects the child variables to the parents to print out
                text.appendChild(Names);
                text.appendChild(Gender);
                text.appendChild(Born);
                text.appendChild(Died);
                text.appendChild(Father);
                text.appendChild(Mother);
                text.appendChild(br);
            }
            // Save a flag variable that checks if all the names searched are not a match
            if (isMatch === false){
                total++;
            }

            // if the total is 5, then there wasn't a match
            if (total > 4) {
                document.getElementById("print").innerHTML = "No Person Found.";
            }
        }
    }
}
