var numbers = [];
var count = 0;
var output = document.querySelector( '#output' );

function show(){
    var number = document.querySelector( '#number' ).value;
    numbers.push(number);
                 document.querySelector( '#number' ).value = '';
                 console.log(numbers.join('+')); 
                 console.log(numbers);
}




function calculate(){
for(var i =0;i<numbers.length;i++){
    count += numbers[i];
}
console.log(count);
}