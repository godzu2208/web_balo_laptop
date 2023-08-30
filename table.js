
var products = document.querySelectorAll('.product');
var prices = document.querySelectorAll('.price');
var filter = document.getElementById('select_box');
var summary = document.querySelector('.summaries');

filter.addEventListener('change', ()=>{
    
    for(let i = 0; i < products.length; i ++){
        products[i].style.display = "table-row";
    }
    if(filter.value == "lower_100"){
        for(let i = 0; i < prices.length; i++){
            if(Number(prices[i].innerHTML) >= 100){
                products[i].style.display = "none";  
                
            }
        }
    }
    if(filter.value == "low_200"){
        for(let i = 0; i < prices.length; i++){
            if(Number(prices[i].innerHTML) >= 200){
                products[i].style.display = "none";  
            }
        }
    }
    if(filter.value == "low_300"){
        for(let i = 0; i < prices.length; i++){
            if(Number(prices[i].innerHTML) >= 300){
                products[i].style.display = "none";  
            }
        }
    }
    if(filter.value == "low_400"){
        for(let i = 0; i < prices.length; i++){
            if(Number(prices[i].innerHTML) >= 400){
                products[i].style.display = "none";  
            }
        }
    }
    if(filter.value == "low_500"){
        for(let i = 0; i < prices.length; i++){
            if(Number(prices[i].innerHTML) >= 500){
                products[i].style.display = "none";  
            }
        }
    }
    if(filter.value == "low_600"){
        for(let i = 0; i < prices.length; i++){
            if(Number(prices[i].innerHTML) >= 600){
                products[i].style.display = "none";  
            }
        }
    }
    if(filter.value == "low_700"){
        for(let i = 0; i < prices.length; i++){
            if(Number(prices[i].innerHTML) >= 700){
                products[i].style.display = "none";  
            }
        }
    }
    if(filter.value == "low_800"){
        for(let i = 0; i < prices.length; i++){
            if(Number(prices[i].innerHTML) >= 800){
                products[i].style.display = "none";  
            }
        }
    }
    if(filter.value == "low_900"){
        for(let i = 0; i < prices.length; i++){
            if(Number(prices[i].innerHTML) >= 900){
                products[i].style.display = "none";  
            }
        }
    }
    if(filter.value == "low_1000"){
        for(let i = 0; i < prices.length; i++){
            if( Number(prices[i].innerHTML) <= 500  || Number(prices[i].innerHTML) >= 1000   ){
                products[i].style.display = "none";  
            }
        }
    }
    if(filter.value == "up_1000"){
        for(let i = 0; i < prices.length; i++){
            if( Number(prices[i].innerHTML) < 1000   ){
                products[i].style.display = "none";  
            }
        }
    }
});

var checks = document.querySelectorAll('.check');
var quantitys = document.querySelectorAll('.quantity');
var totalPrice = document.querySelectorAll('.totalPrices');

for (let index = 0; index < checks.length; index++) {
    checks[index].addEventListener('change', function() {
        
        if (checks[index].checked) {
            quantitys[index].readOnly = false;
            totalPrice[index].innerHTML = quantitys[index].value * prices[index].innerHTML;
        } 
        else  {
            quantitys[index].readOnly = true;
            totalPrice[index].innerHTML = null;   
                
        } 
        summary.innerHTML = getSummary();
    });
};

for (let index = 0; index < quantitys.length; index++){
    quantitys[index].addEventListener('change', function(){
        if(quantitys[index].value < 0){
            quantitys[index].value = 0;
        }
        totalPrice[index].innerHTML = quantitys[index].value * prices[index].innerHTML;
        summary.innerHTML = getSummary();
    })
    
}

//////////////////////////////////////////////////////////////////


function getSummary(){
    var summary = 0;
    for (let index = 0; index < totalPrice.length; index++){
        
            summary += Number(totalPrice[index].innerHTML);
        
    }
    return summary;
}



