// loadData
const loadPhone=async()=>{
  const res =await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
  const data =await res.json();
  const phones =data.data;
  showUi(phones)
}

// show ui 
const showUi=(phone)=>{
  const phoneContainer=document.getElementById('phone-container')
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
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary w-full">Buy Now</button>
              </div>
            </div>
    `;
    phoneContainer.appendChild(phoneDiv)
  });
}
loadPhone()