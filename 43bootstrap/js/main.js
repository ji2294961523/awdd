var btnList=document.querySelectorAll('.btn-group .btn');
var totalQty=document.getElementsByName('totalQty')[0];

// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch(element.name){
//             case 'increase':element.addEventListener('click',increaseValue);break;
//             case 'decrease':element.addEventListener('click',decreaseValue);break;
//             case 'addToCart':element.addEventListener('click',addToCart);break;
//         }        
//     }
// }
function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}


var increaseAll=document.getElementsByName('increase');
// console.log(increaseAll);
var qtyAll=document.getElementsByName('qty');
// console.log(qtyAll);
var decreaseAll=document.getElementsByName('decrease');
// console.log(decreaseAll);
var addToCartAll=document.getElementsByName('addToCart');
// console.log(addToCartAll);


for(var i=0;i<increaseAll.length;i++){
    increaseAll[i].addEventListener('click',increaseValue);
}

for(var i=0;i<decreaseAll.length;i++){
    decreaseAll[i].addEventListener('click',decreaseValue);
}
for(var i=0;i<addToCartAll.length;i++){
    addToCartAll[i].addEventListener('click',addToCartAll);
}
