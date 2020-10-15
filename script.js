// Start of script

// Written by  : Matthew Francis
// Date Started: 26th November 2019


// A function to give a menu prompt for two options

function menu() {


    do {
        let choice = prompt("Enter 1 to continue to Hexadecimal calculator or 2 to quit"); // local variable used to hold prompt choice input

        console.log("Your choice is " + choice); // Shows the menu choice in the browser console

        switch (choice) {
            case "1":
                hexCalculate();
                break;
            case "2":
                alert("Goodbye!");
                break; // Input of 2 quits the function
            default:
                alert("Choice between 1 and 2 only please – try again!");
                break;
        }
    }
    while (choice != 2); // Input of 1 continues prompt to enter two hex numbers
}

// Written by  : Matthew Francis
// Date Started: 26th November 2019

// A function to add two hex numbers

function hexCalculate() {

    let hex1 = get_hex("Please enter the first hex number"); // Local variable passing in "Please enter first hex number" as a parameter into get_pad()
    let hex2 = get_hex("Please enter the second hex number"); // Local variable passing in "Please enter second hex number" as a parameter into get_pad()

    console.log("Your first number is " + hex1); // Shows the first number from the prompt input to the browser console
    console.log("Your second number is " + hex2); // Shows the second number from the prompt input to the browser console

    hex1 = pad(hex1, hex2.length); // Local variable passing in hex1 and hex2.length as parameters into pad()
    hex2 = pad(hex2, hex1.length); // Local variable passing in hex2 and hex1.length as parameters into pad()

    result = hex_add(hex1, hex2); // Local variable passing in hex1 and hex2 as parameters to hex_pad()
    result = result.toUpperCase(); // Local variable to change result to uppercase characters


    console.log("The total is " + result); // Shows output to the browser console

    alert("The total is " + result); // Alert box to show the result of the addition of both numbers
}

// End of hexCalculate function


// Written by  : Matthew Francis
// Date Started: 26th November 2019

// Function to get hex numbers

function get_hex(message) {

    let hexString = ""; // Local variable set as an empty string

    do {
        hexString = prompt(message); // Local variable passing in parameter message into prompt()
        hexString = hexString.toUpperCase(); // Local variable which holds hexString converted to upper case

    }

    while (notValid(hexString));
    return hexString;

}

// Written by  : Matthew Francis
// Date Started: 26th November 2019

// Function to pad the numbers

function pad(string, numLength) {
    string1 = string; // Local variable assigning string to string1
    while (string1.length < numLength) {
        string1 = "0" + string1; // Local variable to add a leading "0" to string1
    }
    return string1;
}
// end of pad function

// Written by  : Matthew Francis
// Date Started: 26th November 2019

// Function to split numbers into array

function hex_add(hex1, hex2) {
    let string1 = hex1.split(""); // Local variable assigning hex1.split("") to string1
    let string2 = hex2.split(""); // Local variable assigning hex2.split("") to string2
    let partialResult = hex1.split(""); // Local variable storing hex1.split("") to partialResult
    let carry = 0; // Local variable  initialising carry to 0

    for (i = partialResult.length - 1; i >= 0; i--) {
        char1 = map_hex_to_dec(string1[i]); // Local variable storing map_hex_to_dec(string1[i]) as char1
        char2 = map_hex_to_dec(string2[i]); // Local variable storing map_hex_to_dec(string2[i]) as char2
        total = char1 + char2 + carry; // Local variable storing the sum of char1 + char2 + carry
        carry = Math.floor(total / 16); // Local variable storing total divided by 16 rounded down
        partialResult[i] = total % 16; // Local variable storing the remainder of total divided by 16
        partialResult[i] = map_dec_to_hex(partialResult[i]) // Local variable passing partialResult[i] into map_dec_to_hex()
    }

    result = partialResult.join(""); // Local variable storing partialResult joined from an array into a string
    if (carry > 0) {
        carry = map_dec_to_hex(carry); // Local variable passing carry as a parameter into map_dec_to_hex() function
        result = carry + result; // Local variable adding carry as the most significant digit to result and storing as result
    }
    return result;
}
// End of hex_add function

// Written by  : Matthew Francis
// Date Started: 26th November 2019

// Function to check if input characters are within the valid range

function notValid(string) {
    let valid = true; // Local variable setting valid to true
    for (i = 0; i < string.length - 1; i++) {
        charCheck = string.charAt(i); // Local variable that gets the current character from the string using charAt()
        validChars = "0123456789ABCDEF"; // Local variable of a string for only the valid characters accepted
        if (validChars.indexOf(charCheck) == -1) {
            valid = false; // Local variable set to false if a negative number is entered
        }
        if (string.length = 0) {
            valid = false; // Local variable set to false if validChars is less than 0
        }
    }
    return !valid;
}
//End of notValid function

// Written by  : Matthew Francis
// Date Started: 26th November 2019

// Function to map hex number to decimal number

function map_hex_to_dec(x) {
    number = parseInt(x, 16); // Local variable to convert x to an integer and store as number
    return number;
}

// Written by  : Matthew Francis
// Date Started: 26th November 2019

// Function to mao decimal number to hex number

function map_dec_to_hex(x) {
    character = x.toString(16); // Local variable to convert x to string and store as character
    return character;
}
// End of map_dec_to_hex function

// End of script
