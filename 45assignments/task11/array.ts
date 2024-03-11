let friend_Names: string[] = ["Aaqib","Moiz","Hannan","Anas","Kaab","Ali Abbas"] 

//by using elements index in an array
let firstfriend = friend_Names[0]
let secondfriend= friend_Names[1]
let thirdfriend= friend_Names[2]
let fourthfriend= friend_Names[3]
let fifthfriend= friend_Names[4]
let sixthfriend= friend_Names[5]

console.log(firstfriend)
console.log(secondfriend)
console.log(thirdfriend)
console.log(fourthfriend)
console.log(fifthfriend)
console.log(sixthfriend)


//or using slice()(destructing)
let secondfr=friend_Names.slice(1,2)
console.log(secondfr)
let firstfr= friend_Names.slice(0,1)
console.log(firstfr)
let thirdfr= friend_Names.slice(2,3)
console.log(thirdfr)
let fourthfr= friend_Names.slice(3,4)
console.log(fourthfr)
let fifthfr= friend_Names.slice(4,5)
console.log(fifthfr)
let sixthfr= friend_Names.slice(5,6)
console.log(sixthfr)