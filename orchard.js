///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0
for (i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i]
}
for (i = 0; i < galaAcres.length; i++) {
    totalAcres += galaAcres[i]
}
for (i = 0; i < pinkAcres.length; i++) {
    totalAcres += pinkAcres[i]
}
console.log(`${totalAcres} acres picked this week.`)

/* 
Starting with `fujiAcres`, I designed to code to add the daily acres picked 
to the variable `totalAcres`. As the for loop runs, it adds each day. I then 
created two more for loops to add the daily numbers for both `galaAcres`and `pinkAcres`.
*/

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = (totalAcres / 7)
console.log(`Average acres picked daily: ${averageDailyAcres}`)

/* 
Here I created a variable to show the average number of acres picked in a day.
I took the total and divided it by 7, the number of days in a week. I then logged
the variable. 
*/

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}

console.log(`It will take around ${days} days to complete the apple-picking on the remaining acres.`)
/*
This section of code will give an estimate on how many more days it will take to 
finish picking the entire orchard. While there are more than 0 acres left to pick,
the code will add 1 to the days required to work at the same time as taking away 9
(the average daily acres picked) from the acres remaining. If there are 174 acres remaining,
it will take about 9 days to complete the work.
*/

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = fujiAcres.slice(0, 7)
let galaTons = galaAcres.slice(0, 7)
let pinkTons = pinkAcres.slice(0, 7)

for (let a = 0; a < fujiTons.length; a++) {
    fujiTons[a] *= 6.5
}
console.log(fujiTons)
for (let b = 0; b < galaTons.length; b++) {
    galaTons[b] *= 6.5
}
console.log(galaTons)
for (let c = 0; c < pinkTons.length; c++) {
    pinkTons[c] *= 6.5
}
console.log(pinkTons)

/*
Here I created copies of the original arrays and then looped over them, changing the values into the
weight of apples picked measured in tons by multiplying the value by 6.5 when it was its turn in the loop.
I then repeated this process for the remaining two arrays.
*/


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (let d = 0; d < fujiTons.length; d++) {
    fujiPounds += (fujiTons[d] * 2000)
}
console.log(`${fujiPounds} lbs. of fuji apples.`)
for (let e = 0; e < galaTons.length; e++) {
    galaPounds += (galaTons[e] * 2000)
}
console.log(`${galaPounds} lbs. of gala apples.`)
for (let f = 0; f < pinkTons.length; f++) {
    pinkPounds += (pinkTons[f] * 2000)
}
console.log(`${pinkPounds} lbs. of pink apples.`)

/*
Here I used a for loop to convert values from tons to pounds by multiplying by 2000 while also adding 
the new values to the `fujiPounds` variable. I repeated this process for both `galaPounds` and `pinkPounds`.
*/

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = (fujiPounds * fujiPrice)
console.log(`$${fujiProfit}.00 worth of fuji apples sold.`)

let galaProfit = (galaPounds * galaPrice)
console.log(`$${galaProfit}.00 worth of gala apples sold.`)

let pinkProfit = (pinkPounds * pinkPrice)
console.log(`$${pinkProfit}.00 worth of pink apples sold.`)

/*
Here I found the value of the profits by first multiplying the number of pounds by the price per pound.
I then logged this dollar amount.
*/


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = (fujiProfit + galaProfit + pinkProfit)
console.log(`$${totalProfit}.00 worth of combined apples sold.`)

/*
Here I simply added the three values of apple profits together to reach the total profits. I then logged the results.
*/