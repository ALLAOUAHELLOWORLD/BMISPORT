window.addEventListener("load",function(){
  document.getElementById("compteur").value = "000";
   document.getElementById("compteur2").value = "100";
});

window.addEventListener("load", function() {
let H = document.getElementById("homme");
let femme = document.getElementById("femme");
let slider = document.getElementById("slider");
  let radios = document.querySelectorAll('input[name="justone"]');
  radios.forEach(function(radio) {
    radio.checked = false;
H.addEventListener('change',function(radio){
  
    slider.style.transform = "translate(-550px)";
    slider2.style.transform = "translate(500px)";
     console.log("homme selected");
})
femme.addEventListener('change',function(radio){
      slider.style.transform = "translate(500px)";
      slider2.style.transform = "translate(-450px)";
      console.log("chekeddddddddddddddddd");
})
});
  });
  let nat = document.getElementById("natija");
  let button = document.getElementById("leclick");
  button.addEventListener('click',function(){
  
  let kilo = parseFloat(document.getElementById("compteur").value);
  let taille = parseFloat(document.getElementById("compteur2").value);
  let taille2 = taille/100
  let M = kilo/((taille2*taille2)) ;
  if(taille > 210.00){
    nat.textContent = "ERROR";
    nat.style.color ="red";
  }
  if(M < 25 && M> 18.5){
    nat.textContent = M.toFixed(2);
    nat.style.color = "green";
  }
  if(M> 25 && M<30){
    nat.textContent = M.toFixed(2);
    nat.style.color = "rgb(255, 102, 0)";
  }
    if(M> 30 && M<35){
    nat.textContent = M.toFixed(2);
    nat.style.color = "rgb(255, 0, 170)";
  }
    if(M>35){
    nat.textContent = M.toFixed(2);
    nat.style.color = "red";
  }
  if(M<18 || M> 50){
  document.getElementById("compteur").value = "000";
  document.getElementById("compteur2").value = "100";
  nat.textContent ="REFAIRE";
  nat.style.color = "red";
  }
  });
  let reload =  document.getElementById("reload");
  reload.addEventListener('click',function(){
    let nat = document.getElementById("natija");
  document.getElementById("compteur").value = "000";
   document.getElementById("compteur2").value = "100";
   nat.textContent = "";
  });