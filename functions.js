//문제1
console.log("hello homework3");

//문제2
function stringToInt(input){
return parseInt(input);
}

//문제3
function maskNumber(input){
var mask_number="";
mask_number=input.substring(0,7);
for(var i=0; i < input.length-7; i++){
    
  mask_number+="*"  
}
return mask_number;
}

//문제4
function getAverage(input_array){
var avg=0;
for(var i=0; i < input_array.length; i++){
avg += input_array[i];
}
avg = avg/input_array.length;
return avg;
}


//문제5
function isMultipleSeven(input){
if(input%7 == 0){
        return true;
}
else{
		return false;}
}


//문제6
function operation(input1,input2,input3){

    switch(input1){
            
        case "add": 
		return input2 + input3;
		break;   

        case "substract":
		return input2 - input3;
		break;   
            
        case "multiply":
		return input2 * input3;
		break; 
            
        case "divide":
		return input2 / input3;
		break;  
            
            default:
		console.log("Not Suppoted");
		return undefined;
         break; 
            
    }

    
}




//문제7
function triangleMtn(input){
var star="";
for(var t=0; t < input ; t++){
 star +="*"  ; 
 console.log(star);
}
}


