const helplines = [
  {
    id: 1,
    title: "National Emergency Number",
    subtitle: "National Emergency",
    number: "999",
    category: "All",
  },
  {
    id: 2,
    title: "Police Helpline Number",
    subtitle: "Police",
    number: "999",
    category: "Police",
  },
  {
    id: 3,
    title: "Fire Service Number",
    subtitle: "Fire Service",
    number: "999",
    category: "Fire",
  },
  {
    id: 4,
    title: "Ambulance Service",
    subtitle: "Ambulance",
    number: "1994-999999",
    category: "Health",
    icon: "./assets/ambulance.png",
  },
  {
    id: 5,
    title: "Women & Child Helpline",
    subtitle: "Women & Child Helpline",
    number: "109",
    category: "Help",
  },
  {
    id: 6,
    title: "Anti-Corruption Helpline",
    subtitle: "Anti-Corruption",
    number: "106",
    category: "Govt.",
  },
  {
    id: 7,
    title: "Electricity Helpline",
    subtitle: "Electricity Outage",
    number: "16216",
    category: "Electricity",
  },
  {
    id: 8,
    title: "Brac Helpline",
    subtitle: "Brac",
    number: "16445",
    category: "NGO",
  },
  {
    id: 9,
    title: "Bangladesh Railway Helpline",
    subtitle: "Bangladesh Railway",
    number: "163",
    category: "Travel",
  },
];
const heartContainer = document.getElementById("heart");

const creditContainer = document.getElementById("credit");

const serivceContainer = document.getElementById("service-container");
const serviceCard = `zaiyaf alam
`;

function call(title) {
  let creditValue = parseInt(creditContainer.textContent, 10);
  if (creditValue === 0) {
    alert("balance finished");
    return;
  }

  creditValue -= 20;
  creditContainer.textContent = creditValue;

  alert(`${title} call`);
}
let heartCount = 0;
function handlefavourite(btn) {
  const button = btn.querySelector("i");
  if (button.classList.contains("fa-solid")) {
    button.classList.remove("fa-solid");
    button.classList.add("fa-regular");
    heartCount--;
  } else {
    button.classList.remove("fa-regular");
    button.classList.add("fa-solid");
    heartCount++;
  }
  heartContainer.textContent = heartCount;
}

helplines.forEach((item) => {
  const card = `
    <div class="shadow rounded-2xl bg-white p-6 space-y-3">
      <div class="flex justify-between items-center">
        <div class="bg-[#ffe3e2] rounded-2xl size-15">
          <img src="${item.icon}" alt="${item.title}" class="size-8 ml-3 mt-2">
        </div>
        <div>
          <button onclick ="handlefavourite(this)" class="mr-6 h-[24px] w-[24px]"><i class="fa-regular fa-heart"></i></button>
        </div>
      </div>
      <h3 class="mb-3 font-bold text-2xl">${item.title}</h3>
      <p class="text-gray-500 text-[18px]">${item.subtitle}</p>
      <h2 class="font-bold text-2xl">${item.number}</h2>
      <button class="btn w-[61px] h-[37px] bg-gray-200 rounded-3xl text-[16px] ml-2 text-gray-500 border-none mt-1">
        ${item.category}
      </button>
      <div class="flex justify-center gap-2">
        <div class="flex-1">
          <button onclick="navigator.clipboard.writeText('${item.number}')" class="btn btn-natural btn-outline mt-8 w-full h-[40px] rounded-[8PX]">Copy</button>
        </div>
        <div class="flex-1">
          <button onclick="call('${item.title}')" class="btn bg-[#00a63e] mt-8 w-full h-[40px] rounded-[8PX]">
            <i class="fa-solid fa-phone"> </i> Call 
        
          </button>
        </div>
      </div>
    </div>
  `;

  serivceContainer.innerHTML += card;
});
