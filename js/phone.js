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
                <button onclick="showDetailsButton('${phone.slug}')" class="btn btn-primary w-full">Show-details</button>
              </div>
            </div>
    `;
    phoneContainer.appendChild(phoneDiv)
    toggleButton(false)
  });
}

const handleButton=()=>{
  toggleButton(true)
const inputField=document.getElementById('inputField');
const inputText =inputField.value;
inputField.value='';
loadPhone(inputText)
}
const toggleButton=(isLoading)=>{
  const toggleButton=document.getElementById('loading-spinner');
  if(isLoading){
    toggleButton.classList.remove('hidden')
  }
  else{
    toggleButton.classList.add('hidden')
  }
 
}

const showDetailsButton=async(id)=>{
  const res =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data =await res.json();
  const phone =data.data;

  
  showmodal(phone)
}
const showmodal=(phone)=>{
  console.log(phone)
  const madalName=document.getElementById('modal-name');
  madalName.innerHTML=`${phone.name}`;
  const modalDetailsAdded=document.getElementById('modal-details-added');
  modalDetailsAdded.innerHTML=`
  <img src="${phone.image}" alt="">
   <p><span class="text-2xl text-green-900">Storage:</span>${phone?.mainFeatures?.storage}</p>
   <p><span class="text-2xl text-green-900">display-size:</span>${phone?.mainFeatures?.displaySize}</p>
   <p><span class="text-2xl text-green-900">chipset:</span>${phone?.mainFeatures?.chipSet}</p>
   <p><span class="text-2xl text-green-900">Memory:</span>${phone?.mainFeatures?.memory}</p>
   <p><span class="text-2xl text-green-900">ReleaseDate:</span>${phone.releaseDate}</p>
  `
  my_modal_5.showModal()
}
