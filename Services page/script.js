import data from './services.json' assert { type: "json" };
console.log(data);

// fetch('services.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
  
let butnGen = document.getElementById('read-more');
let d=0;

butnGen.onmousedown = function() {
    if(d==0){
            document.getElementById("hidden-text").style.display = "block";
            document.getElementById("read-more").style.display = "none";
            document.getElementById("show-less").style.display = "block";
            d++;
          }
            else{
               d=0;
            }
  }

  let secbtn = document.getElementById('show-less');
let v=0;

secbtn.onmousedown = function() {
    if(v==0){
    document.getElementById("hidden-text").style.display = "none";
    document.getElementById("read-more").style.display = "block";
      document.getElementById("show-less").style.display = "none";
      v++;
}
else{
    v=0;
 }
}
