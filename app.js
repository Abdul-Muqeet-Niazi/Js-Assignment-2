                //   Welcome to JS Assignment No 2(Chap 18-20) [Before accessing to it you have to uncommit]
                                        //   And dont forget to gave your reviews
                                        
// Question 1 

// for(var i = 0 ; i < 5 ; i++){
//     document.write("Hello World", "<br>")
// }

// Question 2

// for(var i = 1 ; i < 11 ; i++){
//     document.write(i , "<br>")
// }

// Question 3
// var userinput = prompt("Write a number to print its multiplication table")
// var userinput2 = prompt("Enter range to do multiplication of your table")

// for(var i = 1 ; i <= userinput2 ; i++){
//     document.write(userinput + " x" + i + " =" + userinput * i + "<br>")
// }

// Question 3
// var arr = ["Nokia", "Samsung", "Apple", 'Sony', "Huawei"]

// for(var i = 0 ; i < arr.length ; i++){
//     document.write(arr[i]+ "<br>" )
// }

// Question 4
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length ; i++) {
//     document.write(fruits[i] + "<br>")
// }

// for (var i = 0 ; i <= fruits.length ; i++){
//     document.write("Element at index " + i + " is " + fruits.length[5] + "<br>")
// }

// Question 5 
// var userinput = prompt("Enter number of items")
// var index0 = prompt("Enter value for index 0")
// var index1 = prompt("Enter value for index 1")
// var index2 = prompt("Enter value for index 2")
// var index3 = prompt("Enter value for index 3")
// var all = [index0 + "<br>", index1 + "<br>", index2 + "<br>", index3 + "<br>"]

// if(userinput == userinput){
//     document.write("Number of items: " + userinput , "<br>", "Items" + "<br>" + "<br>")
// }
// for(var i = 0 ; i < all.length ; i++){
//     document.write(all[i])
// }

// Question 7
// document.write("Counting: ")
// for(var i = 0 ; i <= 15 ; i++){
//     document.write([i + ","])
//     "<br>"
// }

// document.write("<br>" + "<br>","Reverse Counting: ")
// for(var j = 15 ; j > 0 ; j--){
//     document.write([j + ","])
// }

// document.write("<br>" + "<br>","Even Counting: ")
// for(var k = 0 ; k <= 10 ; k++){
//     document.write([k * 2 + ","])
// }

// document.write("<br>" + "<br>","Odd Counting: ")
// for(var l = 1 ; l <= 10 ; l++){
//     document.write([l * 2 - 1 + ","])
// }

// document.write("<br>" + "<br>","Series: ")
// for(var m = 1 ; m <= 10 ; m++){
//     document.write([m * 2 + "k,"])
// }

// Question 9
// var userinput = prompt("Welcome to Baked Elegance Bakery. <br> What do you want to order Sir/Ma'am.")
// var Items = ['cake' , 'apple-pie' , 'cookie' , 'chips' ,'patties']
// userinput = userinput.toLowerCase();
// var found = false;

// for (var i = 0; i < Items.length; i++) {
//     if (Items[i].toLowerCase() === userinput) {
//         found = true;
//         break;
//     }
// }

// if(found){
//     document.write("Yes it is avilable in our bakery.")
// }
// else{
//     document.write("We are sorry. <br>" + userinput + " is not avilable in our Bakery.")
// }

// Question 10
// var number = [24, 53, 78, 91, 12]
// var number2 = number[0]
// var numberfilter = number2.filter(function(values){
//     return values > number2
// })
// document.write(numberfilter)

// OR

// var A = [24, 53, 78, 91, 12];

// var largest = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write("The largest number is: " + largest)

// Question 11
// var A = [24, 53, 78, 91, 12];

// var smallest = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// document.write("The smallest number is: " + smallest)

// Question 12
// var A = [24, 53, 78, 91, 12];
// var largest = A[0]; 
// var smallest = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write("The largest number is: " + largest + "<br>")

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// document.write("The smallest number is: " + smallest)

// Question 13
// var students = ["Ali <br>" + "Sami <br>" + "Taha <br>" + "Inam <br>"];
// var scores = [58 + "<br>" + 73 + "<br>" + 89 + "<br>" + 90 + "<br>"];
// var stdname = document.getElementById("std")
// document.write(students)

// var stdscore = document.getElementById("score")
// document.write(scores)

// Question 14
// var scores = [12, 45, 3, 22, 34, 50];
// var userinput = prompt("Please insert the Stop Value Between 12, 45, 3, 22, 34, 50.")

// for (var i = 0 ; i < scores.length ; i++) {
//     if(scores[i] <= userinput)
//     document.write("<br>" + scores[i])
// }

// Question 15
// var A = [ [1,2,3] +"<br>" + [4,5,6] +"<br>"+ [7,8,9] ]

// for(var i = 0 ; i <= A.length ; i++){
//     for(var j = 0 ; j < A[i].length ; j++){
//         document.write(A[i][j])
//     }
// }

