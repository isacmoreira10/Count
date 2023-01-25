var numbers = [];   
var count = 0;



function show(){
    var output = document.querySelector('#output');
    var number = document.querySelector( '#number' ).value;
        number = parseFloat(number);
    numbers.push(number);  
                 document.querySelector( '#number' ).value = '';
                 output.innerHTML = numbers.join('+');                
}



function calculate(){
    var output = document.querySelector( '#output' );
for(var i =0;i<numbers.length;i++){
    count += numbers[i];
    output.innerHTML =  numbers.join('+') + '=' + count;
}
}
