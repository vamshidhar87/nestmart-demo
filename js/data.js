/* Unsplash image map — keys used by products, categories, banners */
window.NM_IMG = {
  pen:        'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=700&q=80&auto=format&fit=crop',
  notebook:   'https://images.unsplash.com/photo-ouph2AfC2e8?w=700&q=80&auto=format&fit=crop',
  brushes:    'https://images.unsplash.com/photo-IDmD4iw9XvE?w=700&q=80&auto=format&fit=crop',
  markers:    'https://images.unsplash.com/photo-VK620qNCUKo?w=700&q=80&auto=format&fit=crop',
  pencils:    'https://images.unsplash.com/photo-nNe4HwY_iY0?w=700&q=80&auto=format&fit=crop',
  sketch:     'https://images.unsplash.com/photo-pvMVecxVoW0?w=700&q=80&auto=format&fit=crop',
  calc:       'https://images.unsplash.com/photo-sUU5rv3n9sw?w=700&q=80&auto=format&fit=crop',
  books:      'https://images.unsplash.com/photo-9T346Ij4kGk?w=700&q=80&auto=format&fit=crop',
  backpack:   'https://images.unsplash.com/photo-GeGdEAo7g30?w=700&q=80&auto=format&fit=crop',
  nib:        'https://images.unsplash.com/photo-ZSPBhokqDMc?w=700&q=80&auto=format&fit=crop',
  watercolor: 'https://images.unsplash.com/photo-POyHDBW8TMw?w=700&q=80&auto=format&fit=crop',
  kraftbag:   'https://images.unsplash.com/photo-MAIYqgosODg?w=700&q=80&auto=format&fit=crop',
  journal:    'https://images.unsplash.com/photo-tHEObA0TE1I?w=700&q=80&auto=format&fit=crop',
  school:     'https://images.unsplash.com/photo-9-kKRL6aiik?w=700&q=80&auto=format&fit=crop',
  paperdoc:   'https://images.unsplash.com/photo-UCCp5JyPf7A?w=700&q=80&auto=format&fit=crop',
  sticky:     'https://images.unsplash.com/photo-qFpnvZ_j9HU?w=700&q=80&auto=format&fit=crop',
  rainbow:    'https://images.unsplash.com/photo-EEVeUIQsaMo?w=700&q=80&auto=format&fit=crop',
  craftkit:   'https://images.unsplash.com/photo-9-kKRL6aiik?w=700&q=80&auto=format&fit=crop',
  fineliner:  'https://images.unsplash.com/photo-WoUFbRMBbj0?w=700&q=80&auto=format&fit=crop',
  docfile:    'https://images.unsplash.com/photo-Q9y3LRuuxmg?w=700&q=80&auto=format&fit=crop',
  laptopdesk: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&q=80&auto=format&fit=crop',
  writeflat:  'https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?w=700&q=80&auto=format&fit=crop',
  heroSchool: 'https://images.unsplash.com/photo-9-kKRL6aiik?w=1000&q=80&auto=format&fit=crop',
  heroArt:    'https://images.unsplash.com/photo-POyHDBW8TMw?w=1000&q=80&auto=format&fit=crop',
};

window.NM_DATA = {
  products: [
    { id:1,  name:'Parker Jotter Ball Pen',              brand:'Parker',       category:'Pens & Writing',        img:NM_IMG.nib,       price:450, originalPrice:null,  sale:399, rating:4.7, reviews:842,  desc:'Iconic stainless-steel ball pen with a refined click mechanism — a desk classic.',           badge:{l:'-11%',c:'#F59E0B'}, inStock:true  },
    { id:2,  name:'Classmate Spiral Notebook · 300 Pages', brand:'Classmate',  category:'Notebooks & Journals',  img:NM_IMG.notebook,  price:185, originalPrice:null,  sale:null,rating:4.5, reviews:1203, desc:'Single-line ruled, 300 pages of 70 GSM paper with a sturdy spiral bind.',                 badge:{l:'NEW',c:'#3B82F6'}, inStock:true  },
    { id:3,  name:'Faber-Castell 24 Colour Pencils',     brand:'Faber-Castell',category:'Art & Craft',           img:NM_IMG.pencils,   price:320, originalPrice:null,  sale:270, rating:4.8, reviews:567,  desc:'Smooth, break-resistant leads in 24 vivid, blendable shades.',                            badge:{l:'-16%',c:'#F59E0B'}, inStock:true  },
    { id:4,  name:'Camlin Watercolour Cakes · 12 Shades',brand:'Camlin',       category:'Art & Craft',           img:NM_IMG.watercolor,price:540, originalPrice:null,  sale:null,rating:4.6, reviews:389,  desc:'Student-grade watercolour cakes with strong pigment and easy lift.',                      badge:{l:'HOT',c:'#EF4444'}, inStock:true  },
    { id:5,  name:'Casio FX-991EX Scientific Calculator',brand:'Casio',        category:'Office Supplies',       img:NM_IMG.calc,      price:1195,originalPrice:null,  sale:null,rating:4.9, reviews:2104, desc:'552 functions with a high-resolution display. Exam-approved.',                           badge:{l:'OUT',c:'#94A3B8'}, inStock:false },
    { id:6,  name:'Maped Paint Brush Set · 10 pcs',      brand:'Maped',        category:'Art & Craft',           img:NM_IMG.brushes,   price:260, originalPrice:null,  sale:null,rating:4.3, reviews:211,  desc:'Round and flat synthetic brushes for watercolour and acrylic work.',                     badge:null,                  inStock:true  },
    { id:7,  name:'Sticky Notes Combo · 5 × 100',        brand:'Oddy',         category:'Office Supplies',       img:NM_IMG.sticky,    price:120, originalPrice:null,  sale:99,  rating:4.4, reviews:678,  desc:'Five pads of repositionable notes in bright, easy-to-spot colours.',                    badge:{l:'-18%',c:'#F59E0B'}, inStock:true  },
    { id:8,  name:'Executive Leather Journal · A5',      brand:'Nightingale',  category:'Notebooks & Journals',  img:NM_IMG.journal,   price:699, originalPrice:null,  sale:null,rating:4.7, reviews:154,  desc:'Faux-leather hardbound journal with ribbon marker and elastic closure.',                 badge:{l:'NEW',c:'#3B82F6'}, inStock:true  },
    { id:9,  name:'Pilot Highlighter Set · 6 Colours',   brand:'Pilot',        category:'Markers & Highlighters',img:NM_IMG.markers,   price:240, originalPrice:null,  sale:null,rating:4.5, reviews:432,  desc:'Chisel-tip highlighters with smudge-free, quick-drying ink.',                           badge:null,                  inStock:true  },
    { id:10, name:'Wildcraft Canvas Laptop Backpack',    brand:'Wildcraft',    category:'Bags & Cases',          img:NM_IMG.backpack,  price:1299,originalPrice:null,  sale:null,rating:4.6, reviews:921,  desc:'Water-resistant 30L backpack with a padded 15.6" laptop sleeve.',                       badge:{l:'HOT',c:'#EF4444'}, inStock:true  },
    { id:11, name:'Brustro Premium Sketch Pad · A4',     brand:'Brustro',      category:'Art & Craft',           img:NM_IMG.sketch,    price:210, originalPrice:null,  sale:null,rating:4.7, reviews:298,  desc:'Acid-free 160 GSM sheets ideal for pencil, charcoal and ink.',                          badge:null,                  inStock:true  },
    { id:12, name:'Doms Rainbow Origami Paper · 200',    brand:'Doms',         category:'Paper & Notepads',      img:NM_IMG.rainbow,   price:150, originalPrice:null,  sale:null,rating:4.2, reviews:176,  desc:'200 double-sided sheets in 20 colours for craft and folding.',                          badge:{l:'NEW',c:'#3B82F6'}, inStock:true  },
    { id:13, name:'JK A4 Copier Paper · 500 Sheets',     brand:'JK',           category:'Office Supplies',       img:NM_IMG.paperdoc,  price:340, originalPrice:null,  sale:289, rating:4.6, reviews:1521, desc:'75 GSM bright-white multipurpose paper for printers and copiers.',                      badge:{l:'-15%',c:'#F59E0B'}, inStock:true  },
    { id:14, name:'Classmate Hardbound Register Set',    brand:'Classmate',    category:'Notebooks & Journals',  img:NM_IMG.books,     price:650, originalPrice:null,  sale:520, rating:4.5, reviews:264,  desc:'Set of three 192-page hardbound registers for ledgers and notes.',                      badge:{l:'-20%',c:'#F59E0B'}, inStock:true  },
    { id:15, name:'Maped Geometry Box',                  brand:'Maped',        category:'School Supplies',       img:NM_IMG.craftkit,  price:220, originalPrice:null,  sale:175, rating:4.4, reviews:512,  desc:'Complete instrument box with compass, set squares and protractor.',                    badge:null,                  inStock:true  },
    { id:16, name:'Camlin Kraft Gift Bags · 10 pk',      brand:'Camlin',       category:'Paper & Notepads',      img:NM_IMG.kraftbag,  price:140, originalPrice:null,  sale:99,  rating:4.1, reviews:88,   desc:'Recyclable kraft paper bags with twisted handles, 10 per pack.',                       badge:null,                  inStock:true  },
    { id:17, name:'Faber-Castell Fineliner Set · 10',    brand:'Faber-Castell',category:'Markers & Highlighters',img:NM_IMG.fineliner, price:380, originalPrice:null,  sale:null,rating:4.8, reviews:347,  desc:'Fine 0.4mm tips in ten colours for journaling and detailed work.',                     badge:null,                  inStock:true  },
    { id:18, name:'Solo Document File · A4',             brand:'Solo',         category:'Office Supplies',       img:NM_IMG.docfile,   price:95,  originalPrice:null,  sale:null,rating:4.3, reviews:203,  desc:'Durable poly box file with secure clip closure and spine label.',                      badge:null,                  inStock:true  }
  ],

  categories: [
    { id:1,  name:'Pens & Writing',        slug:'pens-writing',        img:NM_IMG.pen,       productCount:128, featured:true,  visible:true },
    { id:2,  name:'Notebooks & Journals',  slug:'notebooks-journals',  img:NM_IMG.notebook,  productCount:96,  featured:true,  visible:true },
    { id:3,  name:'Art & Craft',           slug:'art-craft',           img:NM_IMG.pencils,   productCount:142, featured:true,  visible:true },
    { id:4,  name:'Office Supplies',       slug:'office-supplies',     img:NM_IMG.markers,   productCount:210, featured:true,  visible:true },
    { id:5,  name:'Paper & Notepads',      slug:'paper-notepads',      img:NM_IMG.rainbow,   productCount:64,  featured:true,  visible:true },
    { id:6,  name:'School Supplies',       slug:'school-supplies',     img:NM_IMG.school,    productCount:88,  featured:true,  visible:true },
    { id:7,  name:'Markers & Highlighters',slug:'markers-highlighters',img:NM_IMG.brushes,   productCount:54,  featured:true,  visible:true },
    { id:8,  name:'Files & Folders',       slug:'files-folders',       img:NM_IMG.laptopdesk,productCount:47,  featured:false, visible:true },
    { id:9,  name:'Desk Accessories',      slug:'desk-accessories',    img:NM_IMG.paperdoc,  productCount:39,  featured:false, visible:true },
    { id:10, name:'Bags & Cases',          slug:'bags-cases',          img:NM_IMG.backpack,  productCount:33,  featured:true,  visible:true }
  ],

  customers: [
    { id:1, name:'Aarav Mehta',    org:'Bright Future School',    type:'Business', gstin:'36AABF1234G1ZX', phone:'+91 98480 12345', email:'aarav@brightfuture.edu',  quotesCount:8,  ordersCount:5, joined:'2024-08-10', otpVerified:true  },
    { id:2, name:'Kabir Shah',     org:'Shah Stationers',         type:'Business', gstin:'36AABS5678H1ZP', phone:'+91 98490 22334', email:'kabir@shahstationers.com', quotesCount:14, ordersCount:9, joined:'2023-03-20', otpVerified:true  },
    { id:3, name:'Priya Nair',     org:null,                      type:'Personal', gstin:null,             phone:'+91 77990 55400', email:'priya.nair@gmail.com',     quotesCount:2,  ordersCount:1, joined:'2025-01-14', otpVerified:true  },
    { id:4, name:'Meera Iyer',     org:'Meera Art Studio',        type:'Business', gstin:'36AAMI9876J1ZQ', phone:'+91 90001 33445', email:'meera@meeraart.in',        quotesCount:6,  ordersCount:4, joined:'2023-11-05', otpVerified:true  },
    { id:5, name:'Dev Patel',      org:"Patel & Sons",            type:'Business', gstin:'36AADP4321K1ZR', phone:'+91 82220 44556', email:'dev@patelgroup.in',        quotesCount:11, ordersCount:7, joined:'2022-06-18', otpVerified:true  },
    { id:6, name:'Rahul Verma',    org:null,                      type:'Personal', gstin:null,             phone:'+91 95550 66778', email:'rahul.verma@yahoo.com',    quotesCount:1,  ordersCount:0, joined:'2025-05-30', otpVerified:false },
    { id:7, name:'Anjali Rao',     org:"St. Anthony's College",   type:'Business', gstin:'36AASAR3333L1ZS', phone:'+91 40 2340 5566', email:'anjali@stanthony.edu',   quotesCount:9,  ordersCount:6, joined:'2022-09-01', otpVerified:true  },
    { id:8, name:'Sara Khan',      org:null,                      type:'Personal', gstin:null,             phone:'+91 73380 88990', email:'sara.khan@outlook.com',    quotesCount:3,  ordersCount:2, joined:'2024-12-20', otpVerified:true  }
  ],

  orders: [
    { id:'ORD-1052', customerId:1, customerName:'Aarav Mehta',  org:'Bright Future School',   quoteRef:'QT-2035', items:[{name:'Camlin Permanent Markers · 12',qty:25,price:240},{name:'Chart Paper · Assorted · 100',qty:8,price:350},{name:'Acrylic Paint Tubes · Set of 12',qty:12,price:480}], total:9234,  status:'processing', date:'11 Jun 2026', address:'Narayanguda, Hyderabad 500029', courier:'', trackingNo:'' },
    { id:'ORD-1051', customerId:2, customerName:'Kabir Shah',   org:'Shah Stationers',         quoteRef:'QT-2033', items:[{name:'Parker Jotter Ball Pen',qty:50,price:399},{name:'Sticky Notes Combo · 5×100',qty:30,price:99}], total:22445, status:'shipped',    date:'07 Jun 2026', address:'Abids, Hyderabad 500001', courier:'BlueDart', trackingNo:'BD991234567' },
    { id:'ORD-1049', customerId:5, customerName:'Dev Patel',    org:"Patel & Sons",            quoteRef:'QT-2029', items:[{name:'JK A4 Copier Paper · 500 Sheets',qty:100,price:289},{name:'Solo Document File · A4',qty:50,price:95}], total:33650, status:'shipped',    date:'03 Jun 2026', address:'HITEC City, Hyderabad 500081', courier:'Delhivery', trackingNo:'DLV8812345' },
    { id:'ORD-1048', customerId:1, customerName:'Aarav Mehta',  org:'Bright Future School',   quoteRef:'QT-2029', items:[{name:'Faber-Castell 24 Colour Pencils',qty:60,price:270},{name:'Camlin Watercolour Cakes · 12',qty:40,price:520},{name:'Maped Paint Brush Set',qty:40,price:245},{name:'Brustro Sketch Pad · A4',qty:50,price:195},{name:'Pilot Highlighter Set',qty:20,price:240},{name:'Sticky Notes',qty:15,price:99}], total:14820, status:'shipped',    date:'04 Jun 2026', address:'Narayanguda, Hyderabad 500029', courier:'Delhivery', trackingNo:'BLDT09241' },
    { id:'ORD-1047', customerId:4, customerName:'Meera Iyer',   org:'Meera Art Studio',        quoteRef:'QT-2026', items:[{name:'Faber-Castell Fineliner Set · 10',qty:20,price:380},{name:'Brustro Premium Sketch Pad · A4',qty:30,price:210}], total:12900, status:'delivered',  date:'28 May 2026', address:'Jubilee Hills, Hyderabad 500033', courier:'Ekart', trackingNo:'EK8811223' },
    { id:'ORD-1043', customerId:7, customerName:'Anjali Rao',   org:"St. Anthony's College",  quoteRef:'QT-2021', items:[{name:'Classmate Spiral Notebook · 300',qty:150,price:185},{name:'Parker Jotter Ball Pen',qty:100,price:399}], total:67600, status:'delivered',  date:'14 May 2026', address:'Himayatnagar, Hyderabad 500029', courier:'BlueDart', trackingNo:'BD665432109' },
    { id:'ORD-1041', customerId:1, customerName:'Aarav Mehta',  org:'Bright Future School',   quoteRef:'QT-2021', items:[{name:'Pilot Highlighter Set · 6',qty:40,price:240},{name:'Classmate Hardbound Register Set',qty:20,price:520},{name:'Sticky Notes Combo',qty:30,price:99},{name:'Solo Document File',qty:50,price:95}], total:6710,  status:'delivered',  date:'22 May 2026', address:'Narayanguda, Hyderabad 500029', courier:'DTDC', trackingNo:'DT4422119' }
  ],

  quotes: [
    { id:'QT-2041', customerId:1, customerName:'Aarav Mehta',  org:'Bright Future School',  customerType:'Business', gstin:'36AABF1234G1ZX', purpose:'School art dept.',   items:[{name:'Faber-Castell 24 Colour Pencils',sku:'FC-CP-24',qty:60,unitPrice:255,total:15300},{name:'Camlin Watercolour Cakes · 12',sku:'CML-WC-12',qty:40,unitPrice:520,total:20800},{name:'Maped Paint Brush Set · 10 pcs',sku:'MPD-BS-10',qty:40,unitPrice:245,total:9800},{name:'Brustro Sketch Pad · A4',sku:'BRU-SP-A4',qty:50,unitPrice:195,total:9750}], discountPct:12, deliveryFee:0, handlingFee:0, subtotal:55650, total:55650, status:'Awaiting Customer', revisions:[{date:'18 Jun 2026',note:'Applied 12% bulk discount and waived delivery + handling fees.'}], date:'18 Jun 2026', validUntil:'25 Jun 2026' },
    { id:'QT-2040', customerId:2, customerName:'Kabir Shah',   org:'Shah Stationers',        customerType:'Business', gstin:'36AABS5678H1ZP', purpose:'Reseller bulk stock',items:[{name:'Parker Jotter Ball Pen',sku:'PKR-JBP',qty:100,unitPrice:399,total:39900},{name:'Faber-Castell Fineliner Set · 10',sku:'FC-FL-10',qty:50,unitPrice:380,total:19000}], discountPct:8, deliveryFee:0, handlingFee:20, subtotal:58900, total:58900, status:'Needs Review', revisions:[], date:'21 Jun 2026', validUntil:'—' },
    { id:'QT-2038', customerId:1, customerName:'Aarav Mehta',  org:'Bright Future School',  customerType:'Business', gstin:'36AABF1234G1ZX', purpose:'Office re-stock',    items:[{name:'JK A4 Copier Paper · 500 Sheets',sku:'JK-A4-P',qty:20,unitPrice:289,total:5780},{name:'Sticky Notes Combo · 5×100',sku:'ODY-SN-5',qty:15,unitPrice:99,total:1485},{name:'Whiteboard Marker Set · 8',sku:'WBM-8',qty:10,unitPrice:180,total:1800}], discountPct:0, deliveryFee:50, handlingFee:20, subtotal:9065, total:9065, status:'Needs Review', revisions:[], date:'20 Jun 2026', validUntil:'—' },
    { id:'QT-2036', customerId:5, customerName:'Dev Patel',    org:"Patel & Sons",           customerType:'Business', gstin:'36AADP4321K1ZR', purpose:'Office supplies Q3',  items:[{name:'Sticky Notes Combo · 5×100',sku:'ODY-SN-5',qty:50,unitPrice:99,total:4950},{name:'Solo Document File · A4',sku:'SLO-DF-A4',qty:30,unitPrice:95,total:2850},{name:'JK A4 Copier Paper · 500 Sheets',sku:'JK-A4-P',qty:40,unitPrice:289,total:11560}], discountPct:5, deliveryFee:0, handlingFee:20, subtotal:19360, total:19360, status:'Awaiting Customer', revisions:[{date:'15 Jun 2026',note:'5% volume discount applied.'}], date:'14 Jun 2026', validUntil:'21 Jun 2026' },
    { id:'QT-2035', customerId:1, customerName:'Aarav Mehta',  org:'Bright Future School',  customerType:'Business', gstin:'36AABF1234G1ZX', purpose:'College fest',        items:[{name:'Camlin Permanent Markers · 12',sku:'CML-PM-12',qty:25,unitPrice:240,total:6000},{name:'Chart Paper · Assorted · 100',sku:'CHT-P-AST',qty:8,unitPrice:350,total:2800},{name:'Acrylic Paint Tubes · Set of 12',sku:'ACR-PT-12',qty:12,unitPrice:480,total:5760}], discountPct:8, deliveryFee:0, handlingFee:20, subtotal:14560, total:14560, status:'Approved', revisions:[{date:'10 Jun 2026',note:'8% volume discount applied.'}], date:'10 Jun 2026', validUntil:'17 Jun 2026' },
    { id:'QT-2033', customerId:2, customerName:'Kabir Shah',   org:'Shah Stationers',        customerType:'Business', gstin:'36AABS5678H1ZP', purpose:'Monthly re-stock',   items:[{name:'Parker Jotter Ball Pen',sku:'PKR-JBP',qty:50,unitPrice:399,total:19950},{name:'Sticky Notes Combo',sku:'ODY-SN-5',qty:30,unitPrice:99,total:2970}], discountPct:0, deliveryFee:0, handlingFee:20, subtotal:22920, total:22920, status:'Approved', revisions:[], date:'06 Jun 2026', validUntil:'13 Jun 2026' },
    { id:'QT-2030', customerId:1, customerName:'Aarav Mehta',  org:'Bright Future School',  customerType:'Personal',  gstin:null,             purpose:'Personal',           items:[{name:'Wildcraft Canvas Laptop Backpack',sku:'WLC-CLB',qty:1,unitPrice:1299,total:1299},{name:'Casio FX-991EX Calculator',sku:'CSO-FX991',qty:1,unitPrice:1195,total:1195}], discountPct:0, deliveryFee:50, handlingFee:20, subtotal:2494, total:2494, status:'Expired', revisions:[{date:'29 May 2026',note:'Standard pricing shared.'}], date:'28 May 2026', validUntil:'04 Jun 2026' },
    { id:'QT-2027', customerId:7, customerName:'Anjali Rao',   org:"St. Anthony's College", customerType:'Business', gstin:'36AASAR3333L1ZS', purpose:'Annual bulk order',  items:[{name:'Classmate Spiral Notebook · 300',sku:'CLS-SN-300',qty:150,unitPrice:185,total:27750},{name:'Parker Jotter Ball Pen',sku:'PKR-JBP',qty:100,unitPrice:399,total:39900}], discountPct:10, deliveryFee:0, handlingFee:20, subtotal:67650, total:67650, status:'Approved', revisions:[{date:'20 May 2026',note:'10% institutional discount applied.'}], date:'18 May 2026', validUntil:'25 May 2026' }
  ],

  enquiries: [
    { id:'ENQ-001', name:'Ananya Krishnan', email:'ananya.k@gmail.com',    subject:'Bulk order for school supplies',    message:'Hello, we need to place a bulk order for approximately 500 notebooks and 200 pen sets for the upcoming academic year. Could you please share your institutional pricing and MOQs?', status:'New',      date:'2026-06-23T14:30:00' },
    { id:'ENQ-002', name:'Ravi Prasad',     email:'ravi.prasad@techcorp.in', subject:'Custom branding on notebooks',      message:'We are a software company looking to order customised notebooks with our logo for 300 employees. Could you handle custom printing?', status:'New',      date:'2026-06-22T10:15:00' },
    { id:'ENQ-003', name:'Mrs. Sunita Reddy',email:'sunita@deccan.edu',    subject:'Art supplies for annual exhibition', message:'Our school annual art exhibition is coming up in August. We require watercolour sets, drawing boards, and colour pencils for 100 students.', status:'Replied',  date:'2026-06-18T09:00:00', reply:'Dear Mrs. Reddy, we have prepared a detailed quote for 100-student art supply kits. Please find quote QT-2036 in your inbox.' }
  ],

  banners: [
    { id:1, chip:'🏫 For Schools & Colleges', title:'Everything your students need — delivered to your door.',  subtitle:'Notebooks, pens, art supplies and more. Bulk quotes in 1 day, GST invoices included.',   cta:'Request a Quote',  link:'/cart.html',   img:NM_IMG.heroSchool, gradient:'linear-gradient(120deg,#1f6b4d 0%,#2a8a60 100%)', active:true,  order:1 },
    { id:2, chip:'🏢 For Offices',            title:'Keep your office stocked without the hassle.',           subtitle:'Copier paper, stationery and organising supplies at bulk rates. Reorder in one click.', cta:'Shop Office Supplies', link:'/shop.html?cat=office-supplies', img:NM_IMG.laptopdesk, gradient:'linear-gradient(120deg,#1e3a5f 0%,#2563eb 100%)', active:true,  order:2 },
    { id:3, chip:'🎨 For Artists & Creators', title:'Premium art supplies, sourced for serious makers.',      subtitle:'Faber-Castell, Camlin, Brustro and more — in stock, priced right.',                    cta:'Explore Art Supplies', link:'/shop.html?cat=art-craft',      img:NM_IMG.heroArt,    gradient:'linear-gradient(120deg,#581c87 0%,#9333ea 100%)', active:true,  order:3 }
  ],

  teamMembers: [
    { id:1, name:'Suresh Kumar',   role:'Super Admin', email:'suresh@padmavathitraders.com', username:'suresh.kumar',  mfa:true,  lastActive:'2026-06-24T09:00:00' },
    { id:2, name:'Ravi Sharma',    role:'Admin',       email:'ravi@padmavathitraders.com',   username:'ravi.sharma',   mfa:true,  lastActive:'2026-06-24T08:45:00' },
    { id:3, name:'Lakshmi Reddy',  role:'Staff',       email:'lakshmi@padmavathitraders.com',username:'lakshmi.reddy', mfa:false, lastActive:'2026-06-23T17:30:00' },
    { id:4, name:'Anil Kumar',     role:'Staff',       email:'anil@padmavathitraders.com',   username:'anil.kumar',    mfa:false, lastActive:'2026-06-22T15:00:00' }
  ],

  store: {
    name:    'Padmavathi Traders',
    tagline: 'Stationery & Art · Est. 1968',
    address: '3-5-1089/11, YMCA Circle, Narayanguda, Hyderabad 500029',
    phone:   '+91 98480 66608',
    email:   'care@padmavathitraders.com',
    whatsapp:'91984806660',
    gstin:   '36AADPT1234F1ZX',
    fees: {
      gst:      { label:'GST (18%)',    type:'pct',   value:18 },
      delivery: { label:'Delivery Fee', type:'fixed', value:50, freeOver:999 },
      handling: { label:'Handling Fee', type:'fixed', value:20 }
    }
  }
};
