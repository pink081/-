// ข้อมูลเมนูและเนื้อหาเว็บไซต์ ร้านบ้านทุ่งอาหารอีสาน
// Menu Data & Bilingual Content for Baan Thung Isan Restaurant

const RESTAURANT_DATA = {
  info: {
    name: {
      th: "บ้านทุ่งอาหารอีสาน",
      en: "Baan Thung Isan Food"
    },
    tagline: {
      th: "รสแซ่บแท้สูตรโบราณ ริมทุ่งนาร่มรื่น ลมเย็นสบาย",
      en: "Authentic Isan Taste by the Shady Rice Paddies & Cool Breeze"
    },
    subtagline: {
      th: "สัมผัสบรรยากาศอีสานแท้ ตกแต่งด้วยผ้าไหมและผ้าขาวม้า อาหารอีสานรสเด็ด เครื่องดื่มสมุนไพรเย็นชื่นใจ",
      en: "Immerse in authentic northeastern vibes with silk & Pha Khao Ma decor, savory Isan delicacies, and herbal drinks."
    },
    hours: {
      th: "เปิดให้บริการ: 08:00 - 17:00 น. (หยุดทุกวันอังคาร)",
      en: "Open Hours: 08:00 - 17:00 (Closed every Tuesday)",
      openTime: "08:00",
      closeTime: "17:00",
      closedDay: 2 // 0=Sunday, 1=Monday, 2=Tuesday, etc.
    },
    contact: {
      phone: "081-XXX-XXXX",
      phoneRaw: "0810000000",
      address: {
        th: "ริมทุ่งนา ลมโกรก ร่มรื่น อากาศถ่ายเทสบาย",
        en: "By the scenic breezy rice fields, relaxed & shaded"
      },
      mapUrl: "https://maps.google.com"
    }
  },

  categories: [
    { id: "all", th: "ทั้งหมด", en: "All Dishes", icon: "utensils" },
    { id: "somtum", th: "ส้มตำ & ลาบ", en: "Som Tum & Larb", icon: "flame" },
    { id: "grilled", th: "ย่าง & ทอด", en: "Grilled & Fried", icon: "drumstick" },
    { id: "soup", th: "ต้มแซ่บ & แกง", en: "Soups & Curries", icon: "soup" },
    { id: "rice", th: "ข้าวสวย & ข้าวเหนียว", en: "Rice & Sticky Rice", icon: "wheat" },
    { id: "drinks", th: "เครื่องดื่มสมุนไพร & น้ำดื่ม", en: "Herbal Drinks & Water", icon: "glass-water" }
  ],

  atmosphere: [
    {
      title: {
        th: "วิวทุ่งนาเขียวขจี ร่มรื่นเย็นสบาย",
        en: "Lush Green Rice Paddies & Cool Breeze"
      },
      desc: {
        th: "ซุ้มไม้ไผ่ริมนา ลมพัดโกรกสบายตลอดวัน ไม่ร้อน ได้บรรยากาศธรรมชาติแท้ ๆ",
        en: "Breezy bamboo pavilions along the rice fields with relaxing shade and fresh air all day."
      },
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: {
        th: "เสน่ห์ผ้าขาวม้าและผ้าไหมไทย",
        en: "Charming Silk & Pha Khao Ma Decor"
      },
      desc: {
        th: "ตกแต่งร้านด้วยผ้าไหมทอมือและลายตารางผ้าขาวม้า อัตลักษณ์พื้นบ้านอีสานที่อบอุ่น",
        en: "Embellished with hand-woven silk and colorful Pha Khao Ma patterns reflecting Isan heritage."
      },
      image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: {
        th: "มุมพักผ่อนจิบเครื่องดื่มสมุนไพร",
        en: "Relaxing Nook & Refreshing Drinks"
      },
      desc: {
        th: "ผ่อนคลายกับเครื่องดื่มสมุนไพรไทย เช่น อัญชัน มะตูม ใบเตย เสิร์ฟเย็นชื่นใจคลายร้อน",
        en: "Unwind with chilled Thai herbal drinks such as butterfly pea, bael fruit, and pandan."
      },
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80"
    }
  ],

  items: [
    // --- ส้มตำ & ลาบ ---
    {
      id: "item-1",
      category: "somtum",
      name: { th: "ส้มตำไทยรสเด็ด", en: "Som Tum Thai (Papaya Salad with Peanuts)" },
      desc: {
        th: "เส้นมะละกอกรอบ คลุกเคล้าถั่วลิสงคั่วหอม กุ้งแห้ง มะเขือเทศ รสชาติเปรี้ยวหวานกลมกล่อม",
        en: "Crisp shredded green papaya tossed with roasted peanuts, dried shrimp, and sweet & tangy lime dressing."
      },
      price: 60,
      spicyLevel: 2,
      recommended: true,
      image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["เมนูแนะนำ", "รสกลมกล่อม"], en: ["Signature", "Popular"] }
    },
    {
      id: "item-2",
      category: "somtum",
      name: { th: "ส้มตำปูปลาร้าสูตรบ้านทุ่ง", en: "Som Tum Poo Plara (Papaya Salad with Fermented Fish & Crab)" },
      desc: {
        th: "น้ำปลาร้าต้มสุกสูตรเฉพาะของร้าน กลิ่นหอมนัว ไม่คาว แซ่บถึงใจแบบอีสานแท้",
        en: "Authentic northeastern style with aromatic house-cooked fermented fish sauce and salted crab. Deeply flavorful!"
      },
      price: 65,
      spicyLevel: 3,
      recommended: true,
      image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["แซ่บนัว", "ซิกเนเจอร์"], en: ["Isan Favorite", "Spicy"] }
    },
    {
      id: "item-3",
      category: "somtum",
      name: { th: "ตำข้าวโพดไข่เค็ม", en: "Spicy Sweet Corn Salad with Salted Egg" },
      desc: {
        th: "ข้าวโพดหวานเมล็ดเต่ง คลุกเคล้าน้ำยำครบรส ตัดกับไข่เค็มมันนัว ทานง่ายสดชื่น",
        en: "Sweet corn kernels tossed with zesty lime dressing and rich salted egg yolk."
      },
      price: 75,
      spicyLevel: 1,
      recommended: false,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["เผ็ดน้อย", "เด็กทานได้"], en: ["Mild", "Kid-friendly"] }
    },
    {
      id: "item-4",
      category: "somtum",
      name: { th: "ลาบหมูคั่วสมุนไพร", en: "Larb Moo (Spicy Minced Pork with Roasted Rice)" },
      desc: {
        th: "หมูสับเนื้อนุ่ม คั่วสุกพอดี คลุกเคล้าข้าวคั่วหอมกรุ่น พริกป่น มะนาวสด และใบสะระแหน่",
        en: "Minced tender pork mixed with fragrant toasted rice powder, fresh mint, shallots, and spicy lime dressing."
      },
      price: 85,
      spicyLevel: 2,
      recommended: true,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["หอมข้าวคั่ว", "สมุนไพรแน่น"], en: ["Herbal", "Aromatic"] }
    },
    {
      id: "item-5",
      category: "somtum",
      name: { th: "น้ำตกคอหมูย่าง", en: "Nam Tok Kor Moo Yang (Spicy Grilled Pork Neck Salad)" },
      desc: {
        th: "คอหมูย่างเตาถ่านเนื้อนุ่มฉ่ำ นำมาปรุงรสน้ำตกรสจัดจ้าน หอมผักชีฝรั่งและข้าวคั่ว",
        en: "Succulent charcoal-grilled pork neck tossed with toasted rice, fresh herbs, and spicy Isan dressing."
      },
      price: 95,
      spicyLevel: 2,
      recommended: true,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["คอหมูนุ่ม", "รสเข้มข้น"], en: ["Tender Pork", "Flavorful"] }
    },

    // --- ย่าง & ทอด ---
    {
      id: "item-6",
      category: "grilled",
      name: { th: "ไก่ย่างเตาถ่านบ้านทุ่ง (ครึ่งตัว)", en: "Baan Thung Charcoal Grilled Chicken (Half)" },
      desc: {
        th: "หมักด้วยเครื่องสมุนไพรไทยข้ามคืน ย่างไฟอ่อนด้วยถ่านไม้ หนังกรอบเนื้อนุ่มหอมฟุ้ง เสิร์ฟพร้อมน้ำจิ้มแจ่ว",
        en: "Marinated overnight with garlic and lemongrass, slow-roasted over charcoal. Crispy skin, juicy meat with Jaew dip."
      },
      price: 120,
      spicyLevel: 0,
      recommended: true,
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["ย่างเตาถ่าน", "จิ้มแจ่วสูตรเด็ด"], en: ["Charcoal Grilled", "Best Seller"] }
    },
    {
      id: "item-7",
      category: "grilled",
      name: { th: "คอหมูย่างสมุนไพรจิ้มแจ่ว", en: "Grilled Pork Neck with Jaew Tamarind Dip" },
      desc: {
        th: "คอหมูเกรดดี แทรกมันบาง ๆ ย่างหอมกรุ่น เนื้อนุ่มละลายในปาก ทานคู่ข้าวเหนียวเข้ากันที่สุด",
        en: "Tender grilled pork neck with a slight char, served with tangy spicy tamarind dipping sauce."
      },
      price: 95,
      spicyLevel: 0,
      recommended: true,
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["นุ่มละมุน", "ยอดนิยม"], en: ["Top Favorite", "Juicy"] }
    },
    {
      id: "item-8",
      category: "grilled",
      name: { th: "ปีกไก่ทอดน้ำปลาใบเตย", en: "Deep-Fried Chicken Wings with Pandan Fragrance" },
      desc: {
        th: "ปีกไก่หมักน้ำปลาแท้ ทอดกรอบไม่อมน้ำมัน กลิ่นหอมใบเตยอ่อน ๆ รสเค็มกำลังดี",
        en: "Crispy golden fried wings flavored with premium fish sauce and subtle pandan aroma."
      },
      price: 85,
      spicyLevel: 0,
      recommended: false,
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["กรอบนอกนุ่มใน", "ทานเล่นเพลิน"], en: ["Crispy", "Snack"] }
    },

    // --- ต้มแซ่บ & แกง ---
    {
      id: "item-9",
      category: "soup",
      name: { th: "ต้มแซ่บกระดูกอ่อนหมู", en: "Tom Saap (Spicy & Sour Pork Ribs Soup)" },
      desc: {
        th: "กระดูกอ่อนเคี่ยวเปื่อยนุ่ม น้ำซุปหอมข่า ตะไคร้ ใบมะกรูด รสชาติเปรี้ยวเผ็ดแซ่บโล่งคอ",
        en: "Slow-simmered tender baby ribs in an aromatic broth infused with galangal, lemongrass, kaffir lime, and chili."
      },
      price: 110,
      spicyLevel: 3,
      recommended: true,
      image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["แซ่บจี๊ด", "ซดคล่องคอ"], en: ["Spicy & Tangy", "Warm Soup"] }
    },
    {
      id: "item-10",
      category: "soup",
      name: { th: "แกงอ่อมไก่บ้านผักชีลาว", en: "Gaeng Om Gai (Isan Herbal Chicken Soup with Dill)" },
      desc: {
        th: "แกงอ่อมสไตล์อีสานแท้ ไม่ใส่กะทิ อุดมไปด้วยผักพื้นบ้าน ฟักทอง และผักชีลาวกลิ่นหอมชวนทาน",
        en: "Traditional non-coconut herbal curry cooked with local vegetables, pumpkin, and fragrant fresh dill."
      },
      price: 95,
      spicyLevel: 2,
      recommended: false,
      image: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["ผักพื้นบ้าน", "กลิ่นอายอีสาน"], en: ["Local Herbs", "Dill Aroma"] }
    },

    // --- ข้าวสวย & ข้าวเหนียว ---
    {
      id: "item-11",
      category: "rice",
      name: { th: "ข้าวสวยหอมมะลิแท้", en: "Steamed Jasmine Rice" },
      desc: {
        th: "ข้าวหอมมะลิคัดพิเศษ หุงสุกนุ่มร้อน ๆ หอมกรุ่นละมุน ทานคู่กับต้มแซ่บหรือลาบเข้ากันอย่างดี",
        en: "Fragrant premium Thai Jasmine rice, freshly steamed, fluffy and soft."
      },
      price: 15,
      spicyLevel: 0,
      recommended: false,
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["หอมนุ่ม", "ข้าวหอมมะลิ"], en: ["Fragrant", "Steamed"] }
    },
    {
      id: "item-12",
      category: "rice",
      name: { th: "ข้าวเหนียวกระติ๊บร้อน ๆ", en: "Warm Sticky Rice in Bamboo Box (Kratip)" },
      desc: {
        th: "ข้าวเหนียวพันธุ์ดีนึ่งใหม่ นุ่มหนึบกำลังดี เสิร์ฟในกระติ๊บสานไม้ไผ่เก็บความร้อน",
        en: "Steamed glutinous sticky rice, tender and chewy, served in a traditional hand-woven bamboo box."
      },
      price: 15,
      spicyLevel: 0,
      recommended: true,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["นุ่มหนึบ", "เสิร์ฟในกระติ๊บ"], en: ["Sticky Rice", "Traditional"] }
    },

    // --- เครื่องดื่มสมุนไพร & น้ำดื่ม ---
    {
      id: "item-13",
      category: "drinks",
      name: { th: "น้ำอัญชันมะนาวสด", en: "Chilled Butterfly Pea Lime Juice" },
      desc: {
        th: "ดอกอัญชันต้มสดใหม่ ผสมน้ำมะนาวแท้บีบสด สีม่วงสวยตามธรรมชาติ เปรี้ยวหวานเย็นชื่นใจ ดับกระหายคลายร้อน",
        en: "Freshly brewed butterfly pea flowers blended with hand-squeezed lime. Naturally vibrant purple, sweet and tangy."
      },
      price: 35,
      spicyLevel: 0,
      recommended: true,
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["สมุนไพรแท้", "สดชื่นดับร้อน"], en: ["Herbal Refresh", "Best Seller"] }
    },
    {
      id: "item-14",
      category: "drinks",
      name: { th: "น้ำมะตูมหอมกรุ่น", en: "Aromatic Bael Fruit Drink" },
      desc: {
        th: "ผลมะตูมแห้งย่างไฟอ่อนก่อนต้ม ได้กลิ่นหอมเฉพาะตัว รสชาติหวานละมุน บำรุงร่างกาย ชุ่มคอ",
        en: "Naturally brewed from roasted dried bael fruit. Subtle sweet caramel aroma, deeply soothing for the throat."
      },
      price: 35,
      spicyLevel: 0,
      recommended: true,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["หอมละมุน", "ชุ่มคอ"], en: ["Aromatic", "Soothing"] }
    },
    {
      id: "item-15",
      category: "drinks",
      name: { th: "น้ำมะนาวน้ำผึ้งแท้", en: "Honey Fresh Lime Drink" },
      desc: {
        th: "น้ำมะนาวสดแท้ 100% ผสมน้ำผึ้งธรรมชาติ หวานอมเปรี้ยวชื่นใจ เสิร์ฟเย็นพร้อมน้ำแข็ง",
        en: "Pure fresh lime juice infused with natural raw honey over crushed ice. Wonderfully invigorating."
      },
      price: 40,
      spicyLevel: 0,
      recommended: false,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["เปรี้ยวหวาน", "น้ำผึ้งแท้"], en: ["Honey & Lime", "Refreshing"] }
    },
    {
      id: "item-16",
      category: "drinks",
      name: { th: "น้ำใบเตยหอมสูตรเย็น", en: "Fragrant Pandan Leaf Drink" },
      desc: {
        th: "ใบเตยสดคัดพิเศษต้มจนหอม รสหวานน้อย สดชื่นเย็นสบาย ดื่มแล้วกระปรี้กระเปร่า",
        en: "Slow-simmered fresh pandan leaves, light sweetness, delightfully fragrant and thirst-quenching."
      },
      price: 30,
      spicyLevel: 0,
      recommended: false,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["หวานน้อย", "หอมชื่นใจ"], en: ["Pandan Aroma", "Cooling"] }
    },
    {
      id: "item-17",
      category: "drinks",
      name: { th: "น้ำดื่มสะอาดเย็น (ขวด)", en: "Bottled Drinking Water" },
      desc: {
        th: "น้ำดื่มสะอาดได้มาตรฐาน ปิดผนึก สะอาดสดชื่น (เสิร์ฟพร้อมน้ำแข็งสะอาด)",
        en: "Purified bottled drinking water, sealed and clean, served with ice."
      },
      price: 15,
      spicyLevel: 0,
      recommended: false,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=600&auto=format&fit=crop&q=80",
      tags: { th: ["น้ำดื่มสะอาด"], en: ["Pure Water"] }
    }
  ]
};
