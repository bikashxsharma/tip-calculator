


//function to calculate tip
function calcuateTip(){
    // select element

let totalAmount=document.getElementById("total-amount").value;
let totalpeople=document.getElementById("total-people").value;
let tipAmount=document.getElementById("tip-amount").value;
let showResult=document.querySelector("show-result");
    //check if input value are empty
        if(totalAmount==0 || totalpeople==0){
            alert("Please enter values");
            return;
         }
    // if number of input is empty or 0 then assign value to 1
    if(totalpeople==="" || totalpeople <=0){
        totalpeople=1;

    }

   // update showresult with Tip amount
    showResult.innerHTML=`Tip Amount <br/>
    $ ${totalTip}<br/>
    Each`; 
    // tip calculation
    let totalTip= ((tipAmount/100)*totalAmount)/totalpeople;
    return totalTip;
     
}
// call the function on button click
document.getElementById("calculate").addEventListener("click", function(){
    calcuateTip();
})


