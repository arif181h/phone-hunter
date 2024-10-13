// loadData
const loadPhone=async(serchText)=>{
  const res =await fetch(`https://openapi.programming-hero.com/api/phones?search=${serchText}`);
  const data =await res.json();
  const phones =data.data;
  showUi(phones)
}

// show ui 
const showUi=(phone)=>{
  const phoneContainer=document.getElementById('phone-container')
  phoneContainer.textContent='';
  const showAll=document.getElementById('show-all');

  if(phone.length>12){
    showAll.classList.remove('hidden')
  }
  else{
    showAll.classList.add('hidden')
  }
  phone=phone.slice(0,12)
  phone.forEach(phone=> {
    const phoneDiv=document.createElement('div');
    phoneDiv.classList=`card bg-gray-100 w-96 shadow-xl p-6 m-6`;
    phoneDiv.innerHTML=`
     <figure>
              <img
                src="${phone.image}"
                alt="Shoes" />
            </figure>
            <div class="card-body text-black">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary w-full">Show-details</button>
              </div>
            </div>
    `;
    phoneContainer.appendChild(phoneDiv)
  });
}

const handleButton=()=>{
const inputField=document.getElementById('inputField');
const inputText =inputField.value;
inputField.value='';
loadPhone(inputText)
}
// loadPhone()