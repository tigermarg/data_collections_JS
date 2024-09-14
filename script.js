// Part 1: Refactoring Old Code-----------------------------------------------------------------------

//Variables
let string= `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

//Memory allocation for future values
let cell = ' ';
let row = [];

for(let i in string){ //for...in gives access to index numbers in index
        // console.log(string[i], i) //Tests for loop
        switch(string[i]){
            case ",":
                // console.log(cell); //Print cell
                row.push (cell); //Add cell to row //Changed to array method
                cell = ''; //Emptying cell to reuse
                // console.log(`Found comma`); //Test case 1 *work on this 2nd bc you see commas next!
                break;
            case "\n":
                row.push (cell); //Add final cell to row //Array
                cell = ''; //clear cell
                console.log(row); //Print row
                row = []; //Clear row //Array
                // console.log(`NewLine`); //Test case 2 *work on last to get new line
                break;
            default:    
                // console.log(string[i]); //Test case 3 *work on this 1st bc you run into char first!
                cell += string[i]; //If char, add to current cell
                break;
        }
    
        //If we reach final character in string, print final row
        if(i == string.length - 1){
            //string.length is length of string - 114 - index is 114
            row.push (cell); //Add final cell //Array 
            console.log(row) //Print row
        }
    }

