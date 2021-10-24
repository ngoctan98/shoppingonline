var modal=document.querySelector('.modal');
var register=modal.querySelector('.js-form__register');
var login=document.querySelector('.js-form__login');
var convert=modal.querySelectorAll('.auth-form__btn')
var clickRegister=document.querySelector('.js-register');
var clickLogin=document.querySelector('.js-login');
var clickBack=document.querySelectorAll('.js-back');
clickRegister.onclick= function(){
    modal.classList.add('open')
    register.classList.add('open')
}
clickLogin.onclick=function(){
    modal.classList.add('open')
    login.classList.add('open')
}
convert.forEach(function(name){
    name.onclick=function(){
        if(name.innerText==='Đăng Kí'){
        
            login.classList.remove('open')
            register.classList.add('open')
        }
        else {
       
            register.classList.remove('open')
            login.classList.add('open')
    }
}
}
)
clickBack.forEach(function(name){
name.onclick=function(){
    modal.classList.remove('open')
    login.classList.remove('open')
    register.classList.remove('open')

}

})

var select=document.querySelector('.header__search-select')
var selectItem=document.querySelectorAll('.header__search-option-item')
selectItem.forEach(function(item){
    
    item.onclick=function(){
        var removeIcon=document.querySelector('.header__search-option-item .active')
        removeIcon.classList.remove('active')
        var iconCheck=item.querySelector('.header__search-option-item i')
        iconCheck.classList.add('active')
        var text=item.textContent;
        var showtext=document.querySelector('.header__search-select-label')
        showtext.textContent=(text)
    }

}
)
/* input*/
var input=document.querySelector('.header__search-input')
var showBlock=document.querySelector('.header__search-wrap')
input.onclick=function(){
showBlock.style=("display:block")
}
var listHistory=document.querySelectorAll('.header__search-history-item')
console.log(listHistory)
listHistory.forEach(function(itemHistory){
    itemHistory.onclick=function(){
        var getText=itemHistory.innerText
        console.log(getText)
        input.value=(getText)
        showBlock.style=("display:none")
}
})
/* list*/
var list=document.querySelectorAll('.navbar__item');

list.forEach(function(listItem){
    listItem.onclick=function(){
        var removeListItem=document.querySelector('.navbar__item-active')
        removeListItem.classList.remove('navbar__item-active')
        listItem.classList.add('navbar__item-active')
        
    }
})
var heart=document.querySelectorAll('.home__product-item__action-like')
heart.forEach(function(heartItem){
heartItem.onclick=function(){
    var showHeart=heartItem.querySelector('i')
    showHeart.classList.toggle('fas')
}
})
var fitterHome=document.querySelector('.home__fitter')
var fitterBtn=fitterHome.querySelectorAll('.btn')
fitterBtn.forEach(function(btnItem){
    btnItem.onclick=function(){
        var removeColor=fitterHome.querySelector('.btn__primary')
        console.log(removeColor)
        removeColor.classList.remove('btn__primary')
        btnItem.classList.add('btn__primary')
    }
})
var number=fitterHome.querySelector('.home__fitter-num')
var btnLeft=fitterHome.querySelector('.btn-left')
var btnRight=fitterHome.querySelector('.btn-right')

btnLeft.onclick=function(){
    var showNumber=number.textContent
console.log(showNumber)
    if(showNumber>1)
       { number.textContent=showNumber-1
       }
       else {
           number.textContent=('1')
       }
        
  

}
btnRight.onclick=function(){
    var a=number.textContent
    a=parseInt(a)
    if(a<14){
        var b=a+1
        number.textContent=b
    }
    else { number.textContent=('14')}
   
}