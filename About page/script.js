import masters from './masters.js';
  
const buildCards = (data) => {
    let mastersHtml = "";
      
  data.forEach((master) => {      
    mastersHtml += `
    <div class="masters">
      <div class="packages-icons">
        <div>
          <img src="${master.image}" alt="" />
          <p class="name">${master.name}</p>
          <p class="position">${master.position}</p>
          <p class="info">${master.info}</p>
         </div>
      </div>
    </div>
    `;
  });
      
    return mastersHtml;
};
    
  const createMaster = document.getElementById('master-n');
  createMaster.innerHTML = buildCards(masters);
   
