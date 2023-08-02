const sliders = document.querySelectorAll("input[type='range']");
// console.log(sliders);


let hesap=document.querySelector(".hesap"),Bahşiş,Fatura;
const Hesapla=()=>{
    let bahşişYüzde=document.querySelector(".bahşişYüzde").value;
    kişiSayısı=document.querySelector(".kişiSayısı").value,    
     bahşiş=document.querySelector(".bahşiş"),
     fatura=document.querySelector(".fatura"),
     müşteri=document.querySelector(".müşteri"),
     yüzde=document.querySelector(".yüzde");
    let hesapDgr=parseFloat(hesap.value);
Bahşiş=(hesapDgr*bahşişYüzde)/100;
Fatura=Bahşiş+hesapDgr;
bahşiş.innerHTML=Bahşiş;
fatura.innerHTML=Fatura*kişiSayısı;
yüzde.innerHTML="%" +bahşişYüzde;
müşteri.innerHTML=kişiSayısı;
    }
    hesap.addEventListener("change",Hesapla);
sliders.forEach(function(slider){
    slider.addEventListener("input",Hesapla);
});
Hesapla();    

