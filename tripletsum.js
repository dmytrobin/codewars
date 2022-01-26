let a = [-13,-50,57,13,67,-13,57,108,67];
console.log("b type", typeof a);
let b = maxTriSum(a);

function removeElem (arr){
  let result;

  let arrLength;
  arrLength = arr.length;
  console.log(arr);
  console.log(typeof arr);
  console.log(typeof arr.length);
  console.log(Object.keys(arr).length);
  console.log(arr.length);
  let count = 0;
  
  //console.log(length);
  for (let i= 0; i<arr.arrLength; i++){
  console.log("arr[i]",arr[i]);
    for (arrLength ; arrLength>=0; arrLength--){
        if (arr[i] > arr[arrLength]){
        count = count + 1;
        //console.log("count",count);
     /*
     console.log("arr[i]",arr[i]);
        console.log("arr[arrLength]",arr[arrLength]);
        console.log("count",count);
        console.log("--------");
       */ 
        if (count != 3) {
         arr.splice(arr[i], 2,);
        // console.log("arr",arr);
           }
        }
        
      //  console.log("arr[arrLength]",arr[arrLength]);
         //console.log("arrLength",arrLength);
      }
     
  }
 // console.log("arr",arr);
  
  return result;
  }

function maxTriSum(numbers){
  
  let result;
  let counter =  ((numbers.length-1)*(numbers.length))/2;
  numbers = numbers.sort(function(numbers,b){return numbers - b});

  numbers = eliminateDuplicates(numbers);
  //console.log(counter);
  //console.log(numbers);
  
  for (let i=0; i<counter; i++){
  numbers = removeElem(numbers);
 // console.log("numbers",numbers);
  }
  
  return result;
  }// maxTriSum


  function eliminateDuplicates(arr) {

    let a = [];
    let i,
        len = arr.length,
        out = [],
        obj = {};
  
    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i*1);
    }
  //console.log("out ",typeof arr);
    return out;
  }
  