const addressbtn = document.querySelector('#address-form-id')

const addressclose = document.querySelector('#address-close')

//console.log (addressclose)
addressbtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "flex"
})

addressclose.addEventListener("click", function(){
     document.querySelector('.address-form').style.display = "none"
})