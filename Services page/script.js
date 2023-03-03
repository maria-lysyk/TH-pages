import services from './services.js';
  
const buildCards = (data) => {
    let servicesHtml = "";
      
  data.forEach((service) => {
    let childrenService = "";
    service.childrens.forEach((child) => {
    childrenService += `
      <div class="favor">
      <div class="description">
        <div class="title-s">${child.title}</div>
        <div class="price">${child.price}</div>
        <div class="info-b">${child.description}</div>
        </div>
        <button class="call">Call to book your visit</button>
      </div>
    `;
    });
      
    servicesHtml += `
      <div class="favor-name">
        <div class="favor-desc">
            <img src="${service.image}" alt="">
            <div>
              <h2>${service.title}</h2>
              <p>${service.description}</p>
            </div>
        </div>
      </div>
      
      <div class="services">
        ${childrenService}
      </div>
    `;
  });
      
    return servicesHtml;
};
    
  const servFav = document.getElementById('favors');
  servFav.innerHTML = buildCards(services);
   

  
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
