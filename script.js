const weddingData = {
  introLabel: "Lễ thành hôn",
  groomFullName: "Hồng Quân",
  brideFullName: "Mai Vy",
  groomFamilyLine: "Trưởng nam họ Nguyễn",
  brideFamilyLine: "Trưởng nữ họ Mai",
  groomParents: "Con ông Nguyễn Xuân Thương và bà Tô Thị Thuỳ Linh",
  brideParents: "Con ông Mai Văn Hoàng và bà Trương Thị Sậm",
  invitationMessage:
    "Tụi mình rất hạnh phúc khi được đón bạn đến chung vui trong ngày trọng đại, nơi hai gia đình cùng se duyên và mở đầu cho một hành trình mới.",
  invitationBody:
    "Trân trọng kính mời người thân, bạn bè tới dự buổi lễ thành hôn của hai chúng mình. Sự hiện diện của bạn là món quà quý giá nhất trong ngày vui này.",
  weddingDate: "Chủ nhật, 26 tháng 07 năm 2026",
  weddingTime: "10:30 sáng",
  guestReception: "10:00 sáng",
  ceremonyTime: "10:30 sáng",
  partyTime: "11:00 trưa",
  venueName: "Phía sau Văn phòng Ấp Tân Phú",
  venueShort: "Nguyễn Tri Phương",
  venueAddress: "Nguyễn Tri Phương, Phường Tân Hiệp, TP. Hồ Chí Minh",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Riverside%20Palace%20360D%20Ben%20Van%20Don%20Quan%204%20TP%20Ho%20Chi%20Minh&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Riverside+Palace+360D+Ben+Van+Don+Quan+4+TP+Ho+Chi+Minh",
  closingNote:
    "Mong được gặp bạn trong trang phục lịch sự, nhẹ nhàng và mang theo thật nhiều tiếng cười để cùng lưu lại một ngày thật ấm áp, trọn vẹn.",
  footerMessage:
    "Cảm ơn bạn đã dành thời gian xem thiệp cưới và đồng hành cùng tụi mình trong ngày vui.",
  photos: [
    {
      url: createPlaceholder(
        "Khoảnh khắc hạnh phúc",
        "#6e1f1f",
        "#d7ae68",
        "Ảnh cưới chính"
      ),
      caption: "Khoảnh khắc tụi mình bên nhau"
    },
    {
      url: createPlaceholder(
        "Áo dài ngày lễ",
        "#a3472f",
        "#f3d7b1",
        "Ảnh gia đình"
      ),
      caption: "Nét đẹp truyền thống"
    },
    {
      url: createPlaceholder(
        "Thiệp đỏ song hỷ",
        "#7d2c2c",
        "#f8ecdd",
        "Ảnh kỷ niệm"
      ),
      caption: "Ngày vui đang đến gần"
    }
  ],
  quotes: [
    "Thuận vợ thuận chồng tát Biển Đông cũng cạn.",
    "Râu tôm nấu với ruột bầu, chồng chan vợ húp gật đầu khen ngon.",
    "Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao."
  ]
};

function createPlaceholder(title, colorA, colorB, subtitle) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1100">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${colorA}" />
          <stop offset="100%" stop-color="${colorB}" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)" />
      <circle cx="750" cy="170" r="120" fill="rgba(255,255,255,0.16)" />
      <circle cx="140" cy="920" r="170" fill="rgba(255,255,255,0.12)" />
      <rect x="90" y="110" width="720" height="880" rx="28" fill="rgba(255,248,240,0.18)" stroke="rgba(255,245,235,0.45)" />
      <text x="450" y="470" text-anchor="middle" fill="#fff8f0" font-size="64" font-family="Georgia, serif">${title}</text>
      <text x="450" y="560" text-anchor="middle" fill="#fff3e6" font-size="34" font-family="Arial, sans-serif">${subtitle}</text>
      <text x="450" y="660" text-anchor="middle" fill="#ffe2bf" font-size="28" font-family="Arial, sans-serif">Thay ảnh thật của bạn tại script.js</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function bindTextContent() {
  document.querySelectorAll("[data-bind]").forEach((element) => {
    const key = element.dataset.bind;
    if (key in weddingData) {
      element.textContent = weddingData[key];
    }
  });
}

function renderHeroPhoto() {
  const heroPhoto = document.getElementById("hero-photo");
  heroPhoto.src = weddingData.photos[0].url;
}

function renderGallery() {
  const gallery = document.getElementById("gallery");

  weddingData.photos.forEach((photo) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-card";

    const image = document.createElement("img");
    image.src = photo.url;
    image.alt = photo.caption;

    const caption = document.createElement("figcaption");
    caption.textContent = photo.caption;

    figure.append(image, caption);
    gallery.appendChild(figure);
  });
}

function renderQuotes() {
  const quotes = document.getElementById("quotes");

  weddingData.quotes.forEach((quote) => {
    const article = document.createElement("article");
    article.className = "quote-card";

    const paragraph = document.createElement("p");
    paragraph.textContent = quote;

    article.appendChild(paragraph);
    quotes.appendChild(article);
  });
}

function setupMap() {
  const mapFrame = document.getElementById("map-frame");
  const mapLink = document.getElementById("map-link");

  mapFrame.src = weddingData.mapEmbedUrl;
  mapLink.href = weddingData.mapLink;
}

bindTextContent();
renderHeroPhoto();
renderGallery();
renderQuotes();
setupMap();
