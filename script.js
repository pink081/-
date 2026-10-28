// ==============================================================
// บ้านทุ่งอาหารอีสาน - สคริปต์ควบคุมการทำงาน
// Baan Thung Isan - Interactive Web Controller
// ==============================================================

// สถานะปัจจุบันของแอปพลิเคชัน
const state = {
  currentLang: localStorage.getItem('bt_lang') || 'th',
  currentCategory: 'all',
  searchQuery: '',
  selectedItem: null
};

// ข้อความ UI สองภาษา (TH / EN)
const UI_TEXT = {
  th: {
    heroTitle: "บ้านทุ่งอาหารอีสาน",
    heroSubtitle: "รสแซ่บแท้สูตรโบราณ ริมทุ่งนาร่มรื่น ลมเย็นสบาย",
    heroBadge: "🌿 อาหารอีสานแท้ • ผ้าไหมผ้าขาวม้า • เครื่องดื่มสมุนไพร",
    statusOpen: "เปิดให้บริการตอนนี้ (08:00 - 17:00 น.)",
    statusClosed: "ร้านปิดอยู่ (เปิดบริการ 08:00 - 17:00 น. หยุดวันอังคาร)",
    statusTuesday: "วันนี้วันอังคาร ร้านหยุดประจำสัปดาห์",
    hoursSummary: "เปิดทุกวัน 08:00 - 17:00 น. (หยุดทุกวันอังคาร)",
    searchPlaceholder: "ค้นหาเมนูอาหาร หรือเครื่องดื่ม...",
    tableNoticeTitle: "สแกนดูเมนูจากโต๊ะอาหาร",
    tableNoticeDesc: "เลือกดูเมนูและราคาได้ตามสบาย จากนั้นแจ้งรายการกับพนักงานได้ทันทีครับ",
    atmosphereTitle: "บรรยากาศร้านบ้านทุ่ง",
    atmosphereSubtitle: "นั่งชิลริมทุ่งนา ลมพัดเย็นสบาย ผ่อนคลายกับมุมตกแต่งผ้าไหมและผ้าขาวม้า",
    recommendBadge: "แนะนำ",
    priceUnit: "บาท",
    spicy0: "ไม่เผ็ด",
    spicy1: "เผ็ดน้อย",
    spicy2: "เผ็ดปานกลาง",
    spicy3: "แซ่บจัดจ้าน",
    notFound: "ไม่พบเมนูที่ค้นหา กรุณาลองค้นหาด้วยคำอื่นครับ",
    allCount: "ทั้งหมด",
    itemsCount: "รายการ",
    viewDetail: "ดูรายละเอียด",
    modalOrderNotice: "📌 สั่งเมนูนี้กับพนักงานเสิร์ฟได้เลยครับ",
    modalClose: "ปิด",
    qrModalTitle: "ป้าย QR Code สำหรับตั้งโต๊ะอาหาร",
    qrModalDesc: "พิมพ์เพื่อนำไปวางที่โต๊ะอาหาร ให้ลูกค้าสแกนดูเมนูได้ทันที",
    btnPrint: "พิมพ์ป้ายตั้งโต๊ะ",
    btnClose: "ปิดหน้าต่าง",
    contactHeading: "ข้อมูลร้าน & พิกัดบ้านทุ่ง",
    callUs: "โทรสอบถาม",
    openMap: "เปิดแผนที่นำทาง",
    closedTuesdayNote: "หยุดทุกวันอังคาร",
    footerText: "บ้านทุ่งอาหารอีสาน • รสชาติอีสานแท้ บรรยากาศทุ่งนาร่มรื่น"
  },
  en: {
    heroTitle: "Baan Thung Isan Food",
    heroSubtitle: "Authentic Isan Taste by the Shady Rice Paddies & Cool Breeze",
    heroBadge: "🌿 Authentic Isan • Silk & Pha Khao Ma • Herbal Refreshments",
    statusOpen: "Open Now (08:00 - 17:00)",
    statusClosed: "Currently Closed (Hours: 08:00 - 17:00, Closed Tuesdays)",
    statusTuesday: "Closed Today (Closed every Tuesday)",
    hoursSummary: "Open daily 08:00 - 17:00 (Closed every Tuesday)",
    searchPlaceholder: "Search dishes or herbal drinks...",
    tableNoticeTitle: "Dine-in Table Menu",
    tableNoticeDesc: "Browse dishes and prices at your leisure, then place your order with our friendly staff.",
    atmosphereTitle: "Baan Thung Atmosphere",
    atmosphereSubtitle: "Breezy rice field vistas and rustic heritage silk & Pha Khao Ma decor",
    recommendBadge: "Must Try",
    priceUnit: "THB",
    spicy0: "Non-spicy",
    spicy1: "Mild",
    spicy2: "Medium Spicy",
    spicy3: "Very Spicy",
    notFound: "No dishes found. Please try another search keyword.",
    allCount: "Total",
    itemsCount: "dishes",
    viewDetail: "View Details",
    modalOrderNotice: "📌 Please inform your server to order this item.",
    modalClose: "Close",
    qrModalTitle: "Printable Table QR Code Standee",
    qrModalDesc: "Print and display on restaurant tables for easy customer scanning.",
    btnPrint: "Print Table Stand",
    btnClose: "Close",
    contactHeading: "Contact & Location",
    callUs: "Call Restaurant",
    openMap: "Open Google Maps",
    closedTuesdayNote: "Closed every Tuesday",
    footerText: "Baan Thung Isan Food • Authentic Flavors by the Rice Fields"
  }
};

// เริ่มต้นการทำงานเมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initBusinessStatus();
  renderCategories();
  renderAtmosphere();
  renderMenuItems();
  setupEventListeners();
  updateTableQR();
});

// 1. จัดการภาษา TH / EN
function initLanguage() {
  setLanguage(state.currentLang);
}

function setLanguage(lang) {
  state.currentLang = lang;
  localStorage.setItem('bt_lang', lang);

  // อัปเดตปุ่มสลับภาษา
  const btnTh = document.getElementById('btn-lang-th');
  const btnEn = document.getElementById('btn-lang-en');
  if (btnTh && btnEn) {
    if (lang === 'th') {
      btnTh.className = "px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-800 text-white shadow-sm transition";
      btnEn.className = "px-3 py-1.5 text-xs font-semibold rounded-full text-stone-600 hover:text-emerald-800 transition";
    } else {
      btnEn.className = "px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-800 text-white shadow-sm transition";
      btnTh.className = "px-3 py-1.5 text-xs font-semibold rounded-full text-stone-600 hover:text-emerald-800 transition";
    }
  }

  // อัปเดตข้อความทั่วไปตาม data-i18n
  const texts = UI_TEXT[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (texts[key]) {
      el.textContent = texts[key];
    }
  });

  // อัปเดต placeholder ของช่องค้นหา
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.placeholder = texts.searchPlaceholder;
  }

  // รีเรนเดอร์หมวดหมู่ เมนู และสถานะร้าน
  renderCategories();
  renderAtmosphere();
  renderMenuItems();
  initBusinessStatus();
}

// 2. ตรวจสอบเวลาทำการของร้านแบบ Real-time (08:00 - 17:00, หยุดวันอังคาร)
function initBusinessStatus() {
  const badge = document.getElementById('business-status-badge');
  const detail = document.getElementById('business-status-detail');
  if (!badge) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, ...
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = 8 * 60; // 08:00
  const closeMinutes = 17 * 60; // 17:00

  const lang = state.currentLang;
  const texts = UI_TEXT[lang];

  let isOpen = false;
  let statusText = "";
  let badgeClass = "";

  if (day === 2) {
    // วันอังคาร ร้านหยุดประจำสัปดาห์
    statusText = texts.statusTuesday;
    badgeClass = "status-badge-closed px-3 py-1.5 rounded-full inline-flex items-center gap-2 text-xs md:text-sm font-medium shadow-sm";
    badge.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full bg-rose-600 inline-block"></span>
      <span>${statusText}</span>
    `;
  } else if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    // กำลังเปิดทำการ
    isOpen = true;
    statusText = texts.statusOpen;
    badgeClass = "status-badge-open px-3 py-1.5 rounded-full inline-flex items-center gap-2 text-xs md:text-sm font-medium shadow-sm";
    badge.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-green inline-block"></span>
      <span class="font-semibold text-emerald-900">${statusText}</span>
    `;
  } else {
    // อยู่นอกเวลาทำการ
    statusText = texts.statusClosed;
    badgeClass = "status-badge-closed px-3 py-1.5 rounded-full inline-flex items-center gap-2 text-xs md:text-sm font-medium shadow-sm";
    badge.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
      <span>${statusText}</span>
    `;
  }

  badge.className = badgeClass;
  if (detail) {
    detail.textContent = texts.hoursSummary;
  }
}

// 3. แสดงหมวดหมู่เมนู
function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  const lang = state.currentLang;
  container.innerHTML = RESTAURANT_DATA.categories.map(cat => {
    const isActive = state.currentCategory === cat.id;
    const label = cat[lang] || cat.th;
    return `
      <button 
        type="button" 
        onclick="selectCategory('${cat.id}')"
        class="category-pill px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-1.5 ${isActive ? 'active' : ''}"
        data-cat-id="${cat.id}"
      >
        <span>${label}</span>
      </button>
    `;
  }).join('');
}

function selectCategory(catId) {
  state.currentCategory = catId;
  renderCategories();
  renderMenuItems();
}

// 4. แสดงการ์ดเมนูอาหาร & เครื่องดื่ม
function renderMenuItems() {
  const container = document.getElementById('menu-items-grid');
  const countEl = document.getElementById('menu-count');
  if (!container) return;

  const lang = state.currentLang;
  const texts = UI_TEXT[lang];

  // กรองเมนูตามหมวดหมู่และคำค้นหา
  const query = state.searchQuery.toLowerCase().trim();
  const filtered = RESTAURANT_DATA.items.filter(item => {
    const matchCategory = (state.currentCategory === 'all') || (item.category === state.currentCategory);
    if (!matchCategory) return false;

    if (!query) return true;

    const nameTh = item.name.th.toLowerCase();
    const nameEn = item.name.en.toLowerCase();
    const descTh = item.desc.th.toLowerCase();
    const descEn = item.desc.en.toLowerCase();
    const tagsTh = (item.tags && item.tags.th) ? item.tags.th.join(' ').toLowerCase() : '';
    const tagsEn = (item.tags && item.tags.en) ? item.tags.en.join(' ').toLowerCase() : '';

    return nameTh.includes(query) || nameEn.includes(query) || descTh.includes(query) || descEn.includes(query) || tagsTh.includes(query) || tagsEn.includes(query);
  });

  // อัปเดตจำนวนเมนู
  if (countEl) {
    countEl.textContent = `${texts.allCount} ${filtered.length} ${texts.itemsCount}`;
  }

  // กรณีไม่พบเมนู
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-stone-200/80 p-8 shadow-sm">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center text-2xl">
          🌾
        </div>
        <h4 class="text-lg font-medium text-stone-700">${texts.notFound}</h4>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 text-sm bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 transition">
          ${lang === 'th' ? 'ล้างการค้นหา' : 'Clear Search'}
        </button>
      </div>
    `;
    return;
  }

  // แสดงการ์ดรายการอาหาร
  container.innerHTML = filtered.map(item => {
    const itemName = item.name[lang] || item.name.th;
    const itemDesc = item.desc[lang] || item.desc.th;
    const tags = (item.tags && item.tags[lang]) ? item.tags[lang] : [];

    // ระดับความเผ็ด
    let spicyBadge = '';
    if (item.spicyLevel > 0) {
      const peppers = '🌶️'.repeat(item.spicyLevel);
      const spicyLabel = texts[`spicy${item.spicyLevel}`] || '';
      spicyBadge = `<span class="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">${peppers} ${spicyLabel}</span>`;
    }

    // ป้ายเมนูแนะนำ
    let recommendBadge = '';
    if (item.recommended) {
      recommendBadge = `
        <span class="absolute top-3 left-3 bg-amber-500 text-amber-950 font-semibold text-xs px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-10">
          ★ ${texts.recommendBadge}
        </span>
      `;
    }

    return `
      <article 
        class="menu-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col cursor-pointer group"
        onclick="openItemModal('${item.id}')"
      >
        <div class="relative w-full h-48 overflow-hidden bg-stone-100">
          ${recommendBadge}
          <img 
            src="${item.image}" 
            alt="${itemName}" 
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80'"
          />
          <div class="absolute bottom-2 right-2 pha-khao-ma-badge px-2.5 py-1 rounded-lg shadow-sm text-xs font-semibold text-stone-800 flex items-center gap-1">
            <span>🔍 ${texts.viewDetail}</span>
          </div>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 mb-1">
              <h3 class="text-base font-semibold text-stone-900 group-hover:text-emerald-800 transition">
                ${itemName}
              </h3>
              <div class="text-right shrink-0">
                <span class="text-lg font-bold text-emerald-800">${item.price}</span>
                <span class="text-xs text-stone-500 ml-0.5">${texts.priceUnit}</span>
              </div>
            </div>

            <p class="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-3">
              ${itemDesc}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-1.5 pt-2 border-t border-stone-100">
            ${spicyBadge}
            ${tags.map(t => `<span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800">${t}</span>`).join('')}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 5. แสดงภาพและบรรยากาศร้าน
function renderAtmosphere() {
  const container = document.getElementById('atmosphere-grid');
  if (!container) return;

  const lang = state.currentLang;
  container.innerHTML = RESTAURANT_DATA.atmosphere.map(item => {
    const title = item.title[lang] || item.title.th;
    const desc = item.desc[lang] || item.desc.th;

    return `
      <div class="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm flex flex-col">
        <div class="h-56 overflow-hidden">
          <img 
            src="${item.image}" 
            alt="${title}" 
            loading="lazy" 
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-stone-50/50">
          <div>
            <h4 class="font-semibold text-stone-900 text-base mb-2">${title}</h4>
            <p class="text-xs md:text-sm text-stone-600 leading-relaxed">${desc}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 6. หน้าต่าง Modal แสดงรายละเอียดเมนู
function openItemModal(itemId) {
  const item = RESTAURANT_DATA.items.find(i => i.id === itemId);
  if (!item) return;

  state.selectedItem = item;
  const lang = state.currentLang;
  const texts = UI_TEXT[lang];

  const modal = document.getElementById('dish-modal');
  const modalImg = document.getElementById('modal-dish-img');
  const modalTitle = document.getElementById('modal-dish-title');
  const modalSub = document.getElementById('modal-dish-sub');
  const modalPrice = document.getElementById('modal-dish-price');
  const modalDesc = document.getElementById('modal-dish-desc');
  const modalTags = document.getElementById('modal-dish-tags');
  const modalNotice = document.getElementById('modal-dish-notice');

  if (!modal) return;

  modalImg.src = item.image;
  modalTitle.textContent = item.name[lang] || item.name.th;
  modalSub.textContent = lang === 'th' ? item.name.en : item.name.th;
  modalPrice.textContent = `${item.price} ${texts.priceUnit}`;
  modalDesc.textContent = item.desc[lang] || item.desc.th;
  modalNotice.textContent = texts.modalOrderNotice;

  // แท็ก & ระดับความเผ็ด
  let tagsHtml = '';
  if (item.spicyLevel > 0) {
    const peppers = '🌶️'.repeat(item.spicyLevel);
    const spicyLabel = texts[`spicy${item.spicyLevel}`] || '';
    tagsHtml += `<span class="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 font-medium border border-rose-200">${peppers} ${spicyLabel}</span>`;
  }
  const tagsList = (item.tags && item.tags[lang]) ? item.tags[lang] : [];
  tagsList.forEach(t => {
    tagsHtml += `<span class="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-medium">${t}</span>`;
  });
  modalTags.innerHTML = tagsHtml;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeItemModal() {
  const modal = document.getElementById('dish-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.style.overflow = '';
}

// 7. Modal พิมพ์ QR Code สำหรับตั้งโต๊ะ
function openQrModal() {
  const modal = document.getElementById('qr-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeQrModal() {
  const modal = document.getElementById('qr-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.style.overflow = '';
}

function printTableQr() {
  window.print();
}

// อัปเดตการแสดงผล QR Code บนหน้าเว็บและป้ายตั้งโต๊ะ
function updateTableQR() {
  const currentUrl = window.location.href;
  const qrContainer = document.getElementById('table-qr-container');
  const modalQrContainer = document.getElementById('modal-qr-container');

  // ใช้ Google Chart API หรือ Standalone SVG QR Code
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(currentUrl)}&margin=10`;

  if (qrContainer) {
    qrContainer.src = qrApiUrl;
  }
  if (modalQrContainer) {
    modalQrContainer.src = qrApiUrl;
  }
}

// ล้างคำค้นหา
function resetFilters() {
  state.searchQuery = '';
  state.currentCategory = 'all';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderCategories();
  renderMenuItems();
}

// ผูก Event Listeners ต่าง ๆ
function setupEventListeners() {
  // สลับภาษา
  const btnTh = document.getElementById('btn-lang-th');
  const btnEn = document.getElementById('btn-lang-en');
  if (btnTh) btnTh.addEventListener('click', () => setLanguage('th'));
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

  // ช่องค้นหาแบบ Live Search
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMenuItems();
    });
  }

  // ปิด Modal เมื่อคลิกพื้นหลัง
  const dishModal = document.getElementById('dish-modal');
  if (dishModal) {
    dishModal.addEventListener('click', (e) => {
      if (e.target === dishModal) closeItemModal();
    });
  }

  const qrModal = document.getElementById('qr-modal');
  if (qrModal) {
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) closeQrModal();
    });
  }

  // กด ESC เพื่อปิด Modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeItemModal();
      closeQrModal();
    }
  });

  // อัปเดตสถานะร้านทุก 1 นาที
  setInterval(initBusinessStatus, 60000);
}
