//1. Print odd number in an array by using anonyms function
var adc=[12,13,14,15,16,17,18,19,20];
var temp=[];
 var fk =  function (adc){
    for(var i=0;i<adc.length;i++){
    if(adc[i]%2==1){
        temp.push(adc[i]);
    }
 } 
 return temp;
}
console.log(fk(adc));

//By using immediately invoked function expression <IIFE>
var arr=[1,2,3,4,5,6,7];
(function(arr){
    for(var j= 0 ; j< arr.length ; j++){
               if(arr[j]%2!=0){
                  console.log(arr[j])
               } 
          }
    })(arr);
//By using arrow function

var odd=[23,43,55,68,82,97];
var temp3=[];
var kk= (odd)=> {
    for(var k = 0 ; k< odd.length ; k++){
         if(odd[k]%2!=0){
            temp3.push(odd[k]);
            console.log(temp3)
        } 
    }  
         }
    
____________________________________________________________________________________________________
//3.Sum of all numbers in an array
//By using anonyms function
var ar=[1,1,1,1];
let sum=0;
 let res= function(ar){
    for(i=0;i<ar.length;i++){
        sum=sum+ar[i];
    }
    return sum
 }
 console.log(res(ar));

//By using iife function
    (function(ar){
    for(var i = 0 ; i< ar.length ; i++){
       sum = sum + ar[i];
      }
     return sum;
 })(ar);

//By using arrow function
       var res = (ar)=>{
        
    for(var i = 0 ; i< ar.length ; i++){
       sum = sum + ar[i];
     }
     return sum;
          }
          console.log(res(ar));
___________________________________________________________________________________________
//2)Convert all the strings to title caps in a string array 
//2.By using anonymous : 
   let res = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
//By using  iife
 (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })(" i am sam");

// By using Arrow Function : 

     var Case = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }      
console.log(res(case))      
_________________________________________________________________________________________________
//4)Return all the prime numbers in an array
//By using  Anonymous Function:
                  let res= function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
//By using IIFE  function
                   (function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  })([1,2,3,4])
//By using Arrow Function :
    
        let primeNumber = (numArray) => {
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
  //___________________________________________________________________________________________________________            
//Q.Remove duplicates from an Array
     //By using Anonymous Function : 
                  
    let res= function(array){
    let dup = [...new Set(array)];
    console.log(dup);
    }

    // By using IIFE :              
     (function(array){
    let dup = [...new Set(array)];
      console.log(dup);
 })([1,2,3,4]);
  //______________________________________________________________________________________________________________                              
    //Rotate an array by k times
    //By using anonyms function
     let res= function(array , k){
        k = k % a.length;
          if(k < 0){
            k += a.length;
          }

          reverse(a, 0, a.length - k - 1);
          reverse(a, a.length - k, a.length - 1);
          reverse(a, 0, a.length - 1);
        }

        
 //By using IIFE :   
 (function(array , k){
        k = k % a.length;
          if(k < 0){
            k += a.length;
          }

          reverse(a, 0, a.length - k - 1);
          reverse(a, a.length - k, a.length - 1);
          reverse(a, 0, a.length - 1);
        })([1,2,3,4] , 2);
        
