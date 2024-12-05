// const n = 3;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= 4; j++) {
//     row += "#";
//   }
//   console.log(row);
// }


// const n = 5; // Number of rows and columns

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     row += i; 
//   }
//   console.log(row);
//   //   //     //   output:  11111
//                             // 22222
//                             // 33333
//                             // 44444
//                             // 55555
// }


// const n = 5; // Number of rows and columns

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     row += j;
//   }
//   console.log(row);
//   //     //   output:   12345
//                         // 12345
//                         // 12345
//                         // 12345
//                         // 12345
// }


// const n = 5;

// for(let i = n; i>=1; i--){
//     let row = ""
//     for(let j = n; j>=1;j--){
//         row += i
//     }
//     console.log(row)
//     //   output:    // 55555
//                     // 44444
//                     // 33333
//                     // 22222
//                     // 11111
// }

// const n = 5;

// for(let i = n; i>=1; i--){
//     let row = ""
//     for(let j = n; j>=1;j--){
//         row += j
//     }
//     console.log(row)
//     //   output:    // 54321
//                     // 54321
//                     // 54321
//                     // 54321
//                     // 54321
// }

// const n = 5; // Number of rows and columns
// let charCode = 65; // ASCII code for 'A'

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row += String.fromCharCode(charCode); // Convert ASCII code to character
//   }
//   console.log(row);
//   charCode++; // Move to the next letter
//     // AAAAA
//     // BBBBB
//     // CCCCC
//     // DDDDD
//     // EEEEE
// }

// const n = 5; // Number of rows and columns
// let charCode = 65; // ASCII code for 'A'

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row += String.fromCharCode(charCode+j); // Convert ASCII code to character
//   }
//   console.log(row);

//     // ABCDE
//     // ABCDE
//     // ABCDE
//     // ABCDE
//     // ABCDE
// }

// const n = 5; // Number of rows and columns
// let charCode = 69; // ASCII code for 'A'

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row += String.fromCharCode(charCode); // Convert ASCII code to character
//   }
//   console.log(row);
// charCode--;
//     // EEEEE
//     // DDDDD
//     // CCCCC
//     // BBBBB
//     // AAAAA
// }

// const n = 5; // Number of rows and columns
// let charCode = 69; // ASCII code for 'A'

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row += String.fromCharCode(charCode-j); // Convert ASCII code to character
//   }
//   console.log(row);
//     // EDCBA
//     // EDCBA
//     // EDCBA
//     // EDCBA
//     // EDCBA
// }

// const n = 5; // Number of rows

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
//     // * 
//     // * * 
//     // * * * 
//     // * * * * 
//     // * * * * * 
// }

// const n = 5; // Number of rows

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += i;
//   }
//   console.log(row);
//         // 1
//         // 22
//         // 333
//         // 4444
//         // 55555
// }


// const n = 5; // Number of rows
// let charCode = 65;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += String.fromCharCode(charCode);
//   }
//   console.log(row);
//   charCode++;
//         // A
//         // BB
//         // CCC
//         // DDDD
//         // EEEEE
// }

// const n = 5; // Number of rows
// let charCode = 64;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += String.fromCharCode(charCode+j);
//   }
//   console.log(row);
//         // A
//         // AB
//         // ABC
//         // ABCD
//         // ABCDE
// }


// const n = 5; 

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = n; j >= i; j--) {
//     row += '* ';
//   }
//   console.log(row);
//         // * * * * * 
//         // * * * * 
//         // * * * 
//         // * * 
//         // *
// }

// 2 way

// const n = 5; 

// for (let i = n; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += '* ';
//   }
//   console.log(row);
//         // * * * * * 
//         // * * * * 
//         // * * * 
//         // * * 
//         // *
// }

// function generateTrianglePattern(rows) {
//   const result = [];
//   let start = 1; // The starting number of the current row

//   for (let i = 1; i <= rows; i++) {
//     const row = []; // Initialize an array for the current row
//     let current = start;

//     for (let j = 1; j <= i; j++) {
//       row.push(current); // Add the current number to the row
//       current += rows - j; // Increment the number based on the pattern
//     }

//     result.push(row.join(' ')); // Add the row to the result array
//     start++; // Move to the next starting number for the next row
//   }

//   return result.join('\n'); // Join rows with newlines for the final output
// }

// console.log(generateTrianglePattern(5));

// const n = 5; 

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = n; j >= i; j--) {
//     row += i;
//   }
//   console.log(row);
//         // 11111
//         // 2222
//         // 333
//         // 44
//         // 5
// }



// const n = 5; 

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = n; j >= i; j--) {
//     row += j;
//   }
//   console.log(row);
//  // 54321
//  // 5432
//  // 543
//  // 54
//  // 5
// }

// const n = 5;
// for (let i = n; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
//     // 12345
//     // 1234
//     // 123
//     // 12
//     // 1
// }

// let rows = 5;
// let result = "";

// for (let i = rows; i >= 1; i--) {
//   result += String.fromCharCode(65 + (5 - i)).repeat(i) + "\n";
// }

// console.log(result);

// Second way

// const n = 5; // Starting row length

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row += String.fromCharCode(65 + i); // Append the letter corresponding to the row
//   }
//   console.log(row);
//             // AAAAA
//             // BBBB
//             // CCC
//             // DD
//             // E
// }

// const n = 5; // Starting row length

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row += String.fromCharCode(65 + j); // Append the letter corresponding to the row
//   }
//   console.log(row);
//             // ABCDE
//             // ABCD
//             // ABC
//             // AB
//             // A
// }


// const n = 4; // Starting row length

// for (let i = 0; i <= n; i++) { 
//   let row = "";
//   for (let j = n; j >= i; j--) {
//     row += String.fromCharCode(65 + j); // Append the letter corresponding to the row
//   }
//   console.log(row);
//         // EDCBA
//         // EDCB
//         // EDC
//         // ED
//         // E
// }


// const n = 4; // Starting row length

// for (let i = n; i >= 0; i--) { 
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row += String.fromCharCode(65 + i); // Append the letter corresponding to the row
//   }
//   console.log(row);
//             // EEEEE
//             // DDDD
//             // CCC
//             // BB
//             // A
// }


// const n = 4; // Starting row length

// for (let i = n; i >= 0; i--) { 
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row += String.fromCharCode(65 + j); // Append the letter corresponding to the row
//   }
//   console.log(row);
//             // ABCDE
//             // ABCD
//             // ABC
//             // AB
//             // A
// }
    
// const n = 5;

// for(let i = 1; i <= n; i++){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += "*"
//      }
     
//  console.log(row)
//         //     *
//         //    **
//         //   ***
//         //  ****
//         // *****
// }


// const n = 5;

// for(let i = 1; i <= n; i++){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += "* "
//      }
     
//  console.log(row)
// //     * 
// //    * * 
// //   * * * 
// //  * * * * 
// // * * * * * 
// }

// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= i; k++){
//         row += `${i} `
//     }
//     console.log(row)
// //     1 
// //    2 2 
// //   3 3 3 
// //  4 4 4 4 
// // 5 5 5 5 5
// }


// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= i; k++){
//         row += i
//     }
//     console.log(row)
// //     1
// //    22
// //   333
// //  4444
// // 55555
// }

// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= i; k++){
//         row += k
//     }
//     console.log(row)
// //     1
// //    12
// //   123
// //  1234
// // 12345
// }


// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= i; k++){
//         row += `${k} `
//     }
//     console.log(row)
// //     1 
// //    1 2 
// //   1 2 3 
// //  1 2 3 4 
// // 1 2 3 4 5 
// }

// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= i; k++){
//         row += String.fromCharCode(64+i)
//     }
//     console.log(row)
// //     A
// //    BB
// //   CCC
// //  DDDD
// // EEEEE
// }


// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= i; k++){
//         row += `${String.fromCharCode(64+i)} `
//     }
//     console.log(row)
// //     A 
// //    B B 
// //   C C C 
// //  D D D D 
// // E E E E E
// }

// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= i; k++){
//         row += String.fromCharCode(64+k)
//     }
//     console.log(row)
// //     A
// //    AB
// //   ABC
// //  ABCD
// // ABCDE
// }


// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= i; k++){
//         row += `${String.fromCharCode(64+k)} `
//     }
//     console.log(row)
// //     A 
// //    A B 
// //   A B C 
// //  A B C D 
// // A B C D E
// }


// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += "*"
//      }
     
//  console.log(row)
// // *****
// //  ****
// //   ***
// //    **
// //     *
// }


// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += "* "
//      }
     
//  console.log(row)
// // * * * * * 
// //  * * * * 
// //   * * * 
// //    * * 
// //     * 
// }


// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += i
//      }
     
//  console.log(row)
// // 55555
// //  4444
// //   333
// //    22
// //     1
// }


// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += `${i} `
//      }
     
//  console.log(row)
// // 5 5 5 5 5 
// //  4 4 4 4 
// //   3 3 3 
// //    2 2 
// //     1
// }


// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += k
//      }
     
//  console.log(row)
// // 12345
// //  1234
// //   123
// //    12
// //     1
// }

// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += `${k} `
//      }
     
//  console.log(row)
// // 1 2 3 4 5 
// //  1 2 3 4 
// //   1 2 3 
// //    1 2 
// //     1
// }

// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += String.fromCharCode(64+i)
//      }
     
//  console.log(row)
// // EEEEE
// //  DDDD
// //   CCC
// //    BB
// //     A
// }



// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += `${String.fromCharCode(64+i)} `
//      }
     
//  console.log(row)
// // E E E E E 
// //  D D D D 
// //   C C C 
// //    B B 
// //     A 
// }



// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += `${String.fromCharCode(64+k)}`
//      }
     
//  console.log(row)
// // ABCDE
// //  ABCD
// //   ABC
// //    AB
// //     A
// }



// const n = 5;

// for(let i = n; i >= 1; i--){
//  let row = "";
     
//      for(let j = n - 1; j >= i; j--){
//          row += " "
//      }
     
//      for(let k = 1; k <= i; k++){
//          row += `${String.fromCharCode(64+k)} `
//      }
     
//  console.log(row)
// // A B C D E 
// //  A B C D 
// //   A B C 
// //    A B 
// //     A 
// }



// const n = 5;

// for(let i = 1; i <= n; i++){
//  let row = "";
     
//      for(let j = n; j >= 1; j--){
//          if(i>=j){
//              row += "*"
//          }else{
//              row += " "
//          }
//      }
//  console.log(row)
//         //     *
//         //    **
//         //   ***
//         //  ****
//         // *****
// }


// const n = 5;

// for(let i = 1; i <= n; i++){
//  let row = "";
     
//      for(let j = n; j >= 1; j--){
//          if(i >= j){
//              row += "* "
//          }else{
//              row += " "
//          }
//      }
// //  console.log(row)
// //     * 
// //    * * 
// //   * * * 
// //  * * * * 
// // * * * * * 
// }

// const n = 5;

// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = n;  j >= 1; j--){
//         if(i >= j){
//           row += "*" 
//         }else{
//             row += " "
//         }
//       }
//       console.log(row)
// // *****
// //  ****
// //   ***
// //    **
// //     *
// }

// const n = 5;

// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = n;  j >= 1; j--){
//         if(i >= j){
//           row += "* " 
//         }else{
//             row += " "
//         }
//       }
//       console.log(row)
// // * * * * * 
// //  * * * * 
// //   * * * 
// //    * * 
// //     * 
// }

// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         if(i == 3 || j == 3){
//             row += "X"
//         }else{
//             row += " "
//         }
        
 
//     }
//     console.log(row)
// //   X  
// //   X  
// // XXXXX
// //   X  
// //   X  
// }


// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         if(i == 3 || j == 3){
//             row += "X"
//         }else{
//             row += "O"
//         }
//     }
//     console.log(row)
//         // OOXOO
//         // OOXOO
//         // XXXXX
//         // OOXOO
//         // OOXOO 
// }


// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         if(i == j){
//             row += "O"
//         }else{
//             row += "X"
//         }
//     }
//     console.log(row);
// // OXXXX
// // XOXXX
// // XXOXX
// // XXXOX
// // XXXXO
// }


// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         if(i == j){
//             row += "X"
//         }else{
//             row += "-"
//         }
//     }
//     console.log(row);
//         // X----
//         // -X---
//         // --X--
//         // ---X-
//         // ----X
// }


// const n = 5

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     // Condition to place a star
//     if (j === i || j === n - i - 1) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// //  *   *
// //  * * 
// //   *  
// //  * * 
// // *   *
// }


// const n = 5

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     // Condition to place a star
//     if (j === i || j === n - i - 1) {
//       row += "X";
//     } else {
//       row += "O";
//     }
//   }
//   console.log(row);
//     // XOOOX
//     // OXOXO
//     // OOXOO
//     // OXOXO
//     // XOOOX
// }

// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j  = 1; j <= n; j++){
//         if(i==1||i==n||j==1||j==n){
//             row += "*"
//         }else{
//             row += " "
//         }
//     }
//     console.log(row)
// // *****
// // *   *
// // *   *
// // *   *
// // *****
// }

// const n = 5;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j  = 1; j <= n; j++){
//         if(i==1||i==n||j==1||j==n){
//             row += "*"
//         }else{
//             row += "#"
//         }
//     }
//     console.log(row)
//         // *****
//         // *###*
//         // *###*
//         // *###*
//         // *****
// }

// const n = 4;
// let z = 1;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n-1; j >= i; j--){
//         row += " "
//     }
//     for(let k = 1; k <= z; k++){
//         row += "*"
//     }
//     z += 2;
//     console.log(row)
// //    *
// //   ***
// //  *****
// // *******
// }


// const n = 4;
// let z = 1;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n-1; j >= i; j--){
//         row += " "
//     }
//     for(let k = 1; k <= z; k++){
//         row += i
//     }
//     z += 2;
//     console.log(row)
// //    1
// //   222
// //  33333
// // 4444444
// }

// const n = 4;
// let z = 1;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n-1; j >= i; j--){
//         row += " "
//     }
//     for(let k = 1; k <= z; k++){
//         row += k
//     }
//     z += 2;
// console.log(row)
// //    1
// //   123
// //  12345
// // 1234567
// }

// const n = 4;
// let z = 1;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n-1; j >= i; j--){
//         row += " "
//     }
//     for(let k = 1; k <= z; k++){
//         row += z
//     }
//     z += 2;
//     console.log(row)
// //    1
// //   333
// //  55555
// // 7777777
// }

// const n = 4;
// let z = 1;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n-1; j >= i; j--){
//         row += " "
//     }
//     for(let k = z; k >= 1; k--){
//         row += k
//     }
//     z += 2;
//     console.log(row)
// //    1
// //   321
// //  54321
// // 7654321
// }


// const n = 4; // Number of rows

// for (let i = 0; i < n; i++) {
//   let row = "";

//   // Add spaces for alignment
//   for (let j = 0; j < n - i - 1; j++) {
//     row += " ";
//   }

//   // Add descending numbers
//   for (let j = i; j >= 0; j--) {
//     row += j;
//   }

//   // Add ascending numbers
//   for (let k = 1; k <= i; k++) {
//     row += k;
//   }

//   console.log(row);
// //    0
// //   101
// //  21012
// // 3210123
// }

// const n = 4; // Number of rows

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = n - i; j > 0; j--) {
//     row += " ";
//   }

//   for (let k = 1; k <= i; k++) {
//     row += k;
//   }

//   for (let d = i - 1; d >= 1; d--) {
//     row += d;
//   }

//   console.log(row);
// //    1
// //   121
// //  12321
// // 1234321
// }

// Second way

// const n = 4;
// let z = 1;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n; j >= i; j--){
//         row += " ";
//     }
//     for(let k = i - 1; k >= -(i - 1); k--){
//         row += i - Math.abs(k)
//     }
//     console.log(row)
// //     1
// //    121
// //   12321
// //  1234321
// }

// const n = 4;
// let z = 1;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= z; k++){
//         row += String.fromCharCode(64+i)
//     }
//     z += 2;
//     console.log(row)
// //    A
// //   BBB
// //  CCCCC
// // DDDDDDD
// }

// const n = 4;
// let z = 1;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= z; k++){
//         row += String.fromCharCode(64+k)
//     }
//     z += 2;
//     console.log(row)
// //    A
// //   ABC
// //  ABCDE
// // ABCDEFG
// }



// const n = 4;
// let px = n;
// let py = n;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j < n * 2; j++){
//         if(j >= px && j <= py){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     px--;
//     py++;
//     console.log(row)
// //    *
// //   ***
// //  *****
// // *******
// }

// const n = 4;
// let px = 1;
// let py = n*2-1;

// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j < n * 2; j++){
//         if(j >= px && j <= py){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     px++;
//     py--;
//     console.log(row)
// // *******
// //  ***** 
// //   ***  
// //    * 
// }

// second way

// const n = 4;
// let z = n * 2 - 1;

// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= z; k++){
//         row += "*"
//     }
//     z -= 2;
//     console.log(row)
// // *******
// //  ***** 
// //   ***  
// //    * 
// }

// const n = 4;
// let z = n * 2 - 1;

// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= z; k++){
//         row += i
//     }
//     z -= 2;
//     console.log(row)
// // 4444444
// //  33333
// //   222
// //    1 
// }


// const n = 4;
// let z = n * 2 - 1;

// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= z; k++){
//         row += k
//     }
//     z -= 2;
//     console.log(row)
// // 1234567
// //  12345
// //   123
// //    1
// }

// const n = 4;
// let z = n * 2 - 1;

// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= z; k++){
//         row += z
//     }
//     z -= 2;
//     console.log(row)
// // 7777777
// //  55555
// //   333
// //    1
// }


// const n = 4;
// let z = n * 2 - 1;

// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= z; k++){
//         row += String.fromCharCode(64+i)
//     }
//     z -= 2;
//     console.log(row)
// // DDDDDDD
// //  CCCCC
// //   BBB
// //    A
// }


// const n = 4;
// let z = n * 2 - 1;

// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= z; k++){
//         row += String.fromCharCode(64+k)
//     }
//     z -= 2;
//     console.log(row)
// // ABCDEFG
// //  ABCDE
// //   ABC
// //    A
// }


// const n = 4;
// let z = n * 2 - 1;

// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = n - 1; j >= i; j--){
//         row += " ";
//     }
//     for(let k = 1; k <= z; k++){
//         row += String.fromCharCode(64+z)
//     }
//     z -= 2;
//     console.log(row)
// // GGGGGGG
// //  EEEEE
// //   CCC
// //    A
// }







