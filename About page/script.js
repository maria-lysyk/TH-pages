import masters from './masters.js';
  
const buildCards = (data) => {
    let mastersHtml = "";
      
  data.forEach((master) => {      
    mastersHtml += `
    <div class="masters">
        <div>
          <img src="${master.image}" alt="" />
          <p class="name">${master.name}</p>
          <p class="position">${master.position}</p>
          <p class="info">${master.info}</p>
         </div>
    </div>
    `;
  });
      
    return mastersHtml;
};
    
  const createMaster = document.getElementById('master-n');
  createMaster.innerHTML = buildCards(masters);
   



  
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
  
