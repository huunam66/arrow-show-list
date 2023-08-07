let data = [
  {
    comp: "Tata Motors",
    about:
      "Tata Motors Limited là một nhà sản xuất ô tô đa quốc gia của Ấn Độ có trụ sở tại Mumbai, Ấn Độ, và là thành viên của Tata Group.",
    instruction: "Sản phẩm của công ty bao gồm:",
    group: [
      "Ô tô con",
      "Xe tải",
      "Xe vans",
      "Xe coaches",
      "Xe buýt",
      "Máy xây dựng",
      "Các loại xe quân sự",
    ],
  },
  {
    comp: "BMW",
    about:
      "Bayerische Motoren Werke AG, là một công ty đa quốc gia của Đức chuyên sản xuất ô tô và xe máy.",
    instruction: "Sản phẩm của công ty bao gồm:",
    group: ["Động cơ máy bay", "Xe ô tô", "Xe máy"],
  },
  {
    comp: "Toyota",
    about:
      "Tập đoàn Ô tô Toyota là một nhà sản xuất ô tô đa quốc gia của Nhật Bản có trụ sở tại Toyota, Aichi, Nhật Bản.",
    instruction: "Sản phẩm của công ty bao gồm:",
    group: ["Xe ô tô", "Xe máy"],
  },
  {
    comp: "Chevrolet",
    about:
      "Thường được gọi là Chevy, có tên đầy đủ là Chevrolet Division of General Motors Company, là một bộ phận chuyên sản xuất ô tô tại Mỹ của công ty Mỹ.",
    instruction: "Sản phẩm của công ty bao gồm:",
    group: ["Xe ô tô"],
  },
  {
    comp: "Hyundai",
    about:
      "thường được viết tắt là Hyundai Motors, và phổ biến được gọi là Hyundai là một công ty con trực thuộc tập đoàn Hyundai.",
    instruction: "Sản phẩm của công ty bao gồm:",
    group: ["Xe ô tô"],
  },
  {
    comp: "Lamborghini",
    about:
      "thường gọi tắt là Lamborghini, là nhà sản xuất siêu xe thể thao cao cấp (siêu xe) của Italy, có trụ sở chính và xưởng sản xuất đặt tại Sant' Agata Bolognese, gần Bologna, Italy.",
    instruction: "Sản phẩm của công ty bao gồm:",
    group: ["Siêu xe"],
  },
  {
    comp: "Ferrari",
    about:
      "Ferrari S.p.A là một công ty chuyên về sản xuất siêu xe thể thao của Ý do Enzo Ferrari sáng lập vào năm 1939 với tên gọi ban đầu là Scuderia Ferrari, đến năm 1946, hãng đổi tên thành Ferrari S.p.A như hiện nay.",
    instruction: "Sản phẩm của công ty bao gồm:",
    group: ["Siêu xe"],
  },
  {
    comp: "VinFast",
    about:
      "VinFast (hay VinFast LLC; viết tắt: VF, tên đầy đủ: Công ty trách nhiệm hữu hạn sản xuất và kinh doanh VinFast) là một nhà sản xuất ô tô và xe máy điện của Việt Nam được thành lập năm 2017 tại Hải Phòng.",
    instruction: "Sản phẩm của công ty bao gồm:",
    group: ["Xe điện"],
  },
  {
    comp: "Volkswagen",
    about:
      "Là tập đoàn đa quốc gia của Đức về lĩnh vực sản xuất ô tô có trụ sở tại Wolfsburg, bang Niedersachsen.",
    instruction: "Sản phẩm của công ty bao gồm:",
    group: [
      "Xe khách",
      "Xe thương mại",
      "Xe gắn máy",
      "Động cơ ô tô",
      "Động cơ tuabin",
      "Dịch vụ tài chính",
      "Cho thuê tài chính và quản lý vận tải",
    ],
  },
];

const main = document.querySelector("main");
function load_data() {
  for (let key in data) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 arrow-up"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>

        <h1 class="number">${parseInt(key) + 1}</h1>
        <h2 class="comp">${data[key].comp}</h2>
    `;
    main.appendChild(card);
    let arrow_up = card.querySelector(".arrow-up");
    let flag = false;
    arrow_up.addEventListener("click", function () {
      if (!flag) {
        show_infor(key, card);
        arrow_up.classList.add("rotate-arrow");
        flag = !flag;
      } else {
        let intructor_list = card.querySelector(".intructor-list");
        arrow_up.classList.remove("rotate-arrow");
        card.removeChild(intructor_list);
        flag = !flag;
      }
    });
  }
}
load_data();

function show_infor(index, card) {
  let intructor_list = document.createElement("ul");
  intructor_list.classList.add("intructor-list");
  intructor_list.innerHTML = `
          <li class="intructor-item">
            ${data[index].about}
          </li>
          <li class="intructor-item">
            ${data[index].instruction}
            <ol class="list-group">
            </ol>
          </li>
        </ul>
    `;
  let list_group = intructor_list.querySelector(".list-group");
  data[index].group.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML = item;
    list_group.appendChild(li);
  });
  card.appendChild(intructor_list);
}
