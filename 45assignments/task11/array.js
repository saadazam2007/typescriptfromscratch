var friend_Names = ["Aaqib", "Moiz", "Hannan", "Anas", "Kaab", "Ali Abbas"];
//by using elements index in an array
var firstfriend = friend_Names[0];
var secondfriend = friend_Names[1];
var thirdfriend = friend_Names[2];
var fourthfriend = friend_Names[3];
var fifthfriend = friend_Names[4];
var sixthfriend = friend_Names[5];
console.log(firstfriend);
console.log(secondfriend);
console.log(thirdfriend);
console.log(fourthfriend);
console.log(fifthfriend);
console.log(sixthfriend);
//or using slice()(destructing)
var secondfr = friend_Names.slice(1, 2);
console.log(secondfr);
var firstfr = friend_Names.slice(0, 1);
console.log(firstfr);
var thirdfr = friend_Names.slice(2, 3);
console.log(thirdfr);
var fourthfr = friend_Names.slice(3, 4);
console.log(fourthfr);
var fifthfr = friend_Names.slice(4, 5);
console.log(fifthfr);
var sixthfr = friend_Names.slice(5, 6);
console.log(sixthfr);
