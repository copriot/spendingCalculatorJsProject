const spendingInput = document.querySelector("#spending-input")
 const priceInput = document.querySelector("#price-input")
 const formBtn = document.querySelector(".btn")
 const list = document.querySelector(".list")
//  console.log(spendingInput,priceInput,formBtn)

 formBtn.addEventListener("click", addExpense);


let total = 0 ;

function updateTotal (price){
    total+=price
}




 //gider oluşturma
 function addExpense(e){
    e.preventDefault()
    // console.log("tıklandı")
    // console.log(spendingInput.value , priceInput.value)

// if(priceInput==="") eski kullanım

if(!priceInput.value || !spendingInput.value){
    alert("Boş gider eklemeye çalışıyorsun yapma")
    //fonksiyonu durdurmak için
    return;
}



// 1) kullanıcı veri girdiğinde ve ekle dediğinde div oluştur
   const spendingDiv = document.createElement("div");
//2) class ekleme
spendingDiv.classList.add("spending")


 //3) içeriği ayarlama
spendingDiv.innerHTML =`<h2>${spendingInput.value}</h2>
<h2>${priceInput.value}</h2>
<div class="buttons">
    <img src="images/payment.png" alt="">
    <img src="images/delete.png" alt="">
</div>`

    // 4) listeye eleman ekleme
    list.appendChild(spendingDiv);
 }
