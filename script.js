const heartContainer = document.getElementById("heart");
const copyContainer = document.getElementById("copy");
const creditContainer = document.getElementById("credit");
const serivceContainer = document.getElementById("service-container");
const logContainer = document.getElementById("log-container");

const helplines = [
  {
    id: 1,
    title: "National Emergency Number",
    subtitle: "National Emergency",
    number: "999",
    category: "All",
    icon: "./assets/emergency.png",
  },
  {
    id: 2,
    title: "Police Helpline Number",
    subtitle: "Police",
    number: "999",
    category: "Police",
    icon: "./assets/police.png",
  },
  {
    id: 3,
    title: "Fire Service Number",
    subtitle: "Fire Service",
    number: "999",
    category: "Fire",
    icon: "./assets/fire-service.png",
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
    icon: "./assets/emergency.png",
  },
  {
    id: 6,
    title: "Anti-Corruption Helpline",
    subtitle: "Anti-Corruption",
    number: "106",
    category: "Govt.",
    icon: "./assets/emergency.png",
  },
  {
    id: 7,
    title: "Electricity Helpline",
    subtitle: "Electricity Outage",
    number: "16216",
    category: "Electricity",
    icon: "./assets/emergency.png",
  },
  {
    id: 8,
    title: "Brac Helpline",
    subtitle: "Brac",
    number: "16445",
    category: "NGO",
    icon: "./assets/emergency.png",
  },
  {
    id: 9,
    title: "Bangladesh Railway Helpline",
    subtitle: "Bangladesh Railway",
    number: "163",
    category: "Travel",
    icon: "./assets/emergency.png",
  },
];

function handleCall(title, number) {
  let creditValue = parseInt(creditContainer.textContent, 10);
  if (creditValue === 0) {
    alert("balance finished");
    return;
  }

  creditValue -= 20;
  creditContainer.textContent = creditValue;
  const now = new Date().toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const logCard = document.createElement("li");

  logCard.classList.add("rounded", "bg-gray-100", "p-4");

  logCard.innerHTML = `
    <div class="flex justify-between items-center">
        <h1 class="font-semibold text-xl">${title}</h1>
        <p class="text-[18px] font-[400]">${now}</p>
    </div>
    <h4 class="font-bold text-[22px] text-gray-500">${number}</h4>
`;

  logContainer.appendChild(logCard);

  alert(`${title} - ${number}`);
}

function handleClear() {
  logContainer.innerHTML = "";
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

let copyCount = 0;
function handleButton(btn) {
  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
    copyCount--;
  } else {
    btn.classList.add("active");
    copyCount++;
  }
  copyContainer.textContent = copyCount;
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
      <h2 class="font-bold text-2xl ml-2 mt-2">${item.number}</h2>
      <button class="btn w-[61px] h-[37px] bg-gray-200 rounded-3xl text-[16px] ml-2 text-gray-500 border-none mt-1">
        ${item.category}
      </button>
      <div class="flex justify-center gap-2">
        <div class="flex-1">
          <button onclick="handleButton(this)" class="btn border btn-natural btn-outline mt-8 w-full h-[40px] rounded-[8px]">Copy</button>
        </div>
        <div class="flex-1">
          <button onclick="handleCall('${item.title}', '${item.number}')" class="btn bg-[#00a63e] mt-8 w-full h-[40px] rounded-[8PX]">
            <i class="fa-solid fa-phone"> </i> Call 
          </button>
        </div>
      </div>
    </div>
  `;

  serivceContainer.innerHTML += card;
});
