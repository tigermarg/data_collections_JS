// Part 1: Refactoring Old Code-----------------------------------------------------------------------

//Variables
let string= `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

// Memory allocation for future values
let cell = ``;
let row = ``;
let array = [];

for(let i in string){ //for...in gives access to index numbers in index
        // console.log(string[i], i) //Tests for loop
        switch(string[i]){
            case ",":
                row += cell + ' '; //Add cell to row 
                cell = ``; //Emptying cell to reuse
                break;
            case "\n":
                row += cell; //Add final cell to row 
                array.push(row); //Add row to end of array
                cell = ``; //clear cell
                row = ``; //Clear row           
                break;
            default:    
                cell += string[i]; //If char, add to current cell
                break;
        }
    
        //If we reach final character in string, print final row
        if(i == string.length - 1){
            row += cell //Add final cell 
            array.push(row) //Add row to end of array
        }
    }

                console.log(array)


// Part 2: Expanding Functionality--------------------------------------------------------------------------------
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

//Variables
let string= `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

//Memory allocation for future values
let cell = ``;
let row = [];
let array = []

for(let i in string){ //for...in gives access to index numbers in index
        switch(string[i]){
            case ",":
                row.push (cell); //Add cell to end of row
                cell = ''; //Emptying cell to reuse
                break;
            case "\n":
                row.push (cell); //Add final cell to end of row
                cell = ''; //clear cell
                array.push(row); //Add row to end of array
                row = []; //Clear row //Array
                break;
            default:    
                cell += string[i]; //If char, add to current cell
                break;
        }
    
        //If we reach final character in string, print final row
        if(i == string.length - 1){
            row.push (cell); //Add final cell to end of row
            array.push(row) //Add row to array
        }
    }

    console.log(array)


    let column = row.length //Number of columns in each row
    console.log(`Total columns in row`, column)

// Part 3: Transforming Data -----------------------------------------------------------------------
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let arr = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
]

let delHeadings= arr.shift() //remove 1st row (headers) from array
let key = ["id", "name", "occupation", "age"] //create new array for headers

let row1 = {} //Turn array of rows into objects
let row2 = {}
let row3 = {}
let row4 = {}
let newArr = [] //Push objects into single array

for(let i = 0; i < arr.length; i++) {
    row1[key[i]] = arr[0][i]; // key = values in index 0
} newArr.unshift(row1)   //Add object to beginning of array
    for(let i = 0; i < arr.length; i++) { 
        row2[key[i]] = arr[1][i];    //key = values in index 1
    } newArr.push(row2)  //Add to end of array
        for(let i = 0; i < arr.length; i++) { 
            row3[key[i]] = arr[2][i];    //key = values in index 2
        } newArr.push(row3) //Add to end of array
            for(let i = 0; i < arr.length; i++) { 
                row4[key[i]] = arr[3][i];    //key = values in index3
            } newArr.push(row4) //Add to end of array

            console.log(newArr)

// Part 4: -------------------------------------------------------------------------------

let arr = [
        { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" },
]

//1. Remove the last element from the sorted array.
//2. Insert the following object at index 1:
        // { id: "48", name: "Barry", occupation: "Runner", age: "25" }
//3. Add the following object to the end of the array:
        // { id: "7", name: "Bilbo", occupation: "None", age: "111" }

let newIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
let newIndexEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" }

arr.pop(); //remove last element
arr.splice(1, 0, newIndex1); //insert object at index 1
arr.push(newIndexEnd) //add to end of array

console.log(arr)

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

let age = [41, 25, 19, 58, 111]
let sum = 0

for(let i = 0; i < age.length; i++){
     sum += age[i]; //sum = 524
}{
   console.log(`Average age`, sum / age.length) //sum divided by age.length (5) //average = 50.8
}


// Part 5: Full Circle------------------------------------------------------------------------------------------------
// As a final task, transform the final set of data back into CSV format.
let data = [
        { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "48", name: "Barry", occupation: "Runner", age: "25" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

let string = [
[
    "id",   //Keys(headers) into arrays
    "name",
    "occupation",
    "age"
    ],
    ...data.map(header => [ //values into arrays
    header.id,
    header.name,
    header.occupation,
    header.age
    ])
]
    .map(i => i.join(","))  //Map through row arrays & turn arrays into strings using comma as delimeter
    .join() //Turn into a single string //
    // .join("\n") //Omitted \n escape character as delimeter--running this breaks to a new line

console.log(string)