let row = 4;
let col = 5;

 const getTable = (row, col) => {
   let arr = [];
   let num = 0;
   while (arr.length !== row) arr.push([])

   for(let eachCol = 0; eachCol < col; eachCol++){
   
        for (let eachRow = 0; eachRow < row; eachRow++)
        arr[eachRow].push(++num);
 

   }
    return arr;

   
 }

 console.log(getTable(row, col));

 // Output:
 // [
 // [ 1, 8, 9, 16, 17 ],
 // [ 2, 7, 10, 15, 18 ],
 // [ 3, 6, 11, 14, 19 ],
 // [ 4, 5, 12, 13, 20 ]
 // ]
