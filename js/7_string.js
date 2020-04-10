console.clear();

var carName = "Volvo";

// 1.
// string length
console.log(carName.length);

// 2.
// special character
// var x = "we are the so called "vikings" from the north";
// this is wrong way to use "" in string to use quotes in string

var x = 'we are the so called "vikings" from the north';
console.log(x);

// Code	Result	    Description
// \'	'	        Single quote
// \"	"	        Double quote
// \\	\	        Backslash
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

// 3.
// finding a string
var str = "Please locate where 'locate' occurs!";
console.log("using indexOf : " + str.indexOf("locate"));
console.log("using lastIndexOf : " + str.lastIndexOf("locate"));
// Both indexOf(), and lastIndexOf() return -1 if the text is not found.
// Both methods accept a second parameter as the starting position for the search:
console.log("using lastIndexOf : " + str.lastIndexOf("locate", 15));

console.log("using search : " + str.search("locate"));

// The two methods are NOT equal. These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// 4.
// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// slice(start, end)
var str = "Apple, Banana, Kiwi";
console.log("using slice() : " + str.slice(7, 13));
// If a parameter is negative, the position is counted from the end of the string.
console.log("using slice() (without 2nd parameter) : " + str.slice(7));
// If you omit the second parameter, the method will slice out the rest of the string:

// substring(start, end)
console.log("using subtracting() : " + str.substring(7, 13));
// The difference is that substring() cannot accept negative indexes.

// substr(start, length)
console.log("using substr() : " + str.substr(7, 6));
// The difference is that the second parameter specifies the length of the extracted part.

// 5.
// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
var rep = str.replace("Banana", "Apple");
console.log("using replace : " + str);
// The replace() method does not change the string it is called on. It returns a new string.
// By default, the replace() method replaces only the first match:
// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
// str.replace("BANANA", "Apple"); will not work
// To replace case insensitive, use a regular expression with an /i flag (insensitive):

var rep = str.replace(/BANANA/i, "Apple");
console.log("using replace : " + str);

// To replace all matches, use a regular expression with a /g flag (global match):

// 6.
// Converting to Upper and Lower Case

var name = "Anshul";
var upper = name.toUpperCase();
console.log("using toUpperCase() : " + upper);

var lower = name.toLowerCase();
console.log("using toLowerCase() : " + lower);

// 7.
// The concat() Method
// concat() joins two or more strings:
var text1 = "Hello";
var text2 = "World";
console.log(text1.concat(" ", text2));

// 7.
// String.trim()
// The trim() method removes whitespace from both sides of a string:
var trim = "   Hello   ";
console.log("withour trim : " + trim);
console.log("with trim : " + trim.trim());
// The trim() method is not supported in Internet Explorer 8 or lower.
// If you need to support IE 8, you can use replace() with a regular expression instead:

// 8.
// Extracting String Characters
// There are 3 methods for extracting string characters:
// charAt(position)
// charCodeAt(position)
// Property access [ ]

var char = "Anshul";
console.log("using charAt() : " + char.charAt(0)); //return A
console.log("using charCodeAt() : " + char.charCodeAt(0)); //return char code of A = 65
console.log("using property access : " + str[0]);

// 9.
// Converting a String to an Array
// A string can be converted to an array with the split() method:
