/* ============================================
   PAMPA · Materiales de Construcción
   Datos, filtros, carrito
============================================ */

const WHATSAPP_NUMBER = '5492314000000'; // reemplazar por el número real del corralón

const categories = [
  { id:'maderas',      name:'Maderas',               code:'MAD', color:'#8A4A2B', icon:'🪵' },
  { id:'tableros',     name:'Tableros',               code:'TAB', color:'#B98850', icon:'🪟' },
  { id:'ladrillos',    name:'Ladrillos y Bloques',    code:'LAD', color:'#B5502E', icon:'🧱' },
  { id:'baldosas',     name:'Baldosas y Pisos',       code:'BAL', color:'#7C7268', icon:'▦' },
  { id:'viguetas',     name:'Viguetas y Estructura',  code:'VIG', color:'#545B5F', icon:'🏗️' },
  { id:'cemento',      name:'Cemento y Áridos',       code:'CEM', color:'#9C9788', icon:'🪨' },
  { id:'hierro',       name:'Hierro y Acero',         code:'FE',  color:'#4A5054', icon:'🔩' },
  { id:'aislantes',    name:'Aislantes',              code:'AIS', color:'#D8B24A', icon:'🧊' },
  { id:'seco',         name:'Construcción en Seco',   code:'STC', color:'#C9C2AF', icon:'📐' },
  { id:'complementos', name:'Complementos',           code:'CPL', color:'#F0650F', icon:'🔧' },
];

const products = [
  // Maderas
  { id:'p01', name:'Tirante de pino 2x3 x 3m', cat:'maderas', unit:'unidad', price:5400, color:'#8A4A2B' },
  { id:'p02', name:'Tabla machimbrada pino 1x6', cat:'maderas', unit:'metro', price:3200, color:'#9A5A34' },
  { id:'p03', name:'Listón de eucalipto 2x2 x 2,5m', cat:'maderas', unit:'unidad', price:2800, color:'#7A4127' },
  // Tableros
  { id:'p04', name:'Fenólico 18mm 1,22x2,44m', cat:'tableros', unit:'placa', price:38500, color:'#B98850' },
  { id:'p05', name:'MDF crudo 15mm 1,83x2,60m', cat:'tableros', unit:'placa', price:29900, color:'#C79A5F' },
  { id:'p06', name:'OSB estructural 11mm', cat:'tableros', unit:'placa', price:24700, color:'#AD8248' },
  // Ladrillos y bloques
  { id:'p07', name:'Ladrillo hueco 18x18x33', cat:'ladrillos', unit:'unidad', price:520, color:'#B5502E' },
  { id:'p08', name:'Ladrillo común de campo', cat:'ladrillos', unit:'unidad', price:210, color:'#A5461F' },
  { id:'p09', name:'Bloque de hormigón 20x20x40', cat:'ladrillos', unit:'unidad', price:980, color:'#8F6B5A' },
  // Baldosas y pisos
  { id:'p10', name:'Baldosa calcárea 40x40', cat:'baldosas', unit:'m²', price:6700, color:'#7C7268' },
  { id:'p11', name:'Porcelanato símil madera 20x120', cat:'baldosas', unit:'m²', price:15900, color:'#8C7A5E' },
  { id:'p12', name:'Baldosón para vereda 30x30', cat:'baldosas', unit:'unidad', price:1450, color:'#6C6459' },
  // Viguetas y estructura
  { id:'p13', name:'Vigueta pretensada 12', cat:'viguetas', unit:'metro', price:4300, color:'#545B5F' },
  { id:'p14', name:'Bovedilla de EPS 12', cat:'viguetas', unit:'unidad', price:1900, color:'#697073' },
  { id:'p15', name:'Malla sima 15x15 - 6mm', cat:'viguetas', unit:'unidad (2,15x6m)', price:32800, color:'#454B4E' },
  // Cemento y áridos
  { id:'p16', name:'Cemento portland x50kg', cat:'cemento', unit:'bolsa', price:9800, color:'#9C9788' },
  { id:'p17', name:'Cal hidratada x25kg', cat:'cemento', unit:'bolsa', price:4200, color:'#B4AE9C' },
  { id:'p18', name:'Arena gruesa', cat:'cemento', unit:'m³', price:26500, color:'#C2AD82' },
  { id:'p19', name:'Piedra partida 6-20', cat:'cemento', unit:'m³', price:29800, color:'#878172' },
  // Hierro y acero
  { id:'p20', name:'Hierro del 8 x 12m', cat:'hierro', unit:'barra', price:12400, color:'#4A5054' },
  { id:'p21', name:'Hierro del 10 x 12m', cat:'hierro', unit:'barra', price:18700, color:'#3E4447' },
  { id:'p22', name:'Chapa acanalada C25 galvanizada', cat:'hierro', unit:'metro', price:8900, color:'#5C6367' },
  // Aislantes
  { id:'p23', name:'Lana de vidrio 50mm rollo', cat:'aislantes', unit:'rollo (12m²)', price:31500, color:'#D8B24A' },
  { id:'p24', name:'Membrana asfáltica 4mm', cat:'aislantes', unit:'rollo (10m²)', price:41200, color:'#B4903A' },
  { id:'p25', name:'Poliestireno expandido 20mm', cat:'aislantes', unit:'placa', price:5600, color:'#E3C766' },
  // Construcción en seco
  { id:'p26', name:'Placa de yeso 12,5mm 1,20x2,40', cat:'seco', unit:'placa', price:14300, color:'#C9C2AF' },
  { id:'p27', name:'Perfil montante 70mm x 3m', cat:'seco', unit:'unidad', price:3900, color:'#B7AF98' },
  { id:'p28', name:'Placa cementicia 10mm', cat:'seco', unit:'placa', price:19800, color:'#A9A08A' },
  // Complementos
  { id:'p29', name:'Adhesivo para porcelanato x30kg', cat:'complementos', unit:'bolsa', price:8100, color:'#F0650F' },
  { id:'p30', name:'Tornillo autoperforante x100', cat:'complementos', unit:'caja', price:6300, color:'#D9560D' },
  { id:'p31', name:'Impermeabilizante acrílico x20L', cat:'complementos', unit:'balde', price:37800, color:'#E56417' },
];

const money = n => n.toLocaleString('es-AR', { style:'currency', currency:'ARS', maximumFractionDigits:0 });

/* ============================================
   ACÁ CAMBIÁS LA RUTA DE CADA IMAGEN
   ============================================
   Escribí, entre las comillas, la ruta a la foto de cada rubro
   (puede ser una carpeta que vos crees, con el nombre que quieras).

   Ejemplos válidos:
     'images/maderas.jpg'          → carpeta "images" al lado de index.html
     'fotos/foto-maderas.png'      → carpeta "fotos", cualquier nombre de archivo
     'https://misitio.com/foto.jpg' → una imagen ya subida a internet

   Si dejás las comillas vacías (''), ese rubro va a mostrar el
   dibujo de reemplazo en vez de una foto.
============================================ */
const CATEGORY_IMAGES = {
  maderas:      'imagenes/maderatwo.jpg',
  tableros:     'imagenes/tableros.jpg',
  ladrillos:    'imagenes/ladrillos.jpg',
  baldosas:     'imagenes/baldosas.jpg',
  viguetas:     'imagenes/viguetas.jpg',
  cemento:      'imagenes/cemento.jpg',
  hierro:       'imagenes/hierro.jpg',
  aislantes:    'imagenes/ailsantes.jpg',
  seco:         'imagenes/construccion.jpg',
  complementos: 'imagenes/complementos.jpg',
};

const PRODUCT_IMAGES = {
  p01: 'imagenes/maderas.jpg',
  p02: 'imagenes/maderatwo.jpg',
  p03: 'imagenes/maderathree.jpg',
  p04: 'imagenes/tableros.jpg',
  p05: 'imagenes/tablerostwo.jpg',
  p06: 'imagenes/tablerosthree.jpg',
  p07: 'imagenes/ladrillos.jpg',
  p08: 'imagenes/ladrillostwo.jpg',
  p09: 'imagenes/ladrillosthree.jpg',
  p10: 'imagenes/baldosas.jpg',
  p11: 'imagenes/baldosastwo.jpg',
  p12: 'imagenes/baldosasthree.jpg',
  p13: 'imagenes/viguetas.jpg',
  p14: 'imagenes/viguetastwo.jpg',
  p15: 'imagenes/viguetasthree.jpg',
  p16: 'imagenes/cemento.jpg',
  p17: 'imagenes/cementotwo.jpg',
  p18: 'imagenes/cementothree.jpg',
  p19: 'imagenes/hierro.jpg',
  p20: 'imagenes/hierrotwo.jpg',
  p21: 'imagenes/hierrothree.jpg',
  p22: 'imagenes/ailsantes.jpg',
  p23: 'imagenes/ailsantestwo.jpg',
  p24: 'imagenes/aislantesthree.jpg',
  p25: 'imagenes/construccion.jpg',
  p26: 'imagenes/construcciontwo.jpg',
  p27: 'imagenes/construccionthree.jpg',
  p28: 'imagenes/complementos.jpg',
  p29: 'imagenes/complementostwo.jpg',
  p30: 'imagenes/complementosthree.jpg',
};

/* ---------- Dibujos de reemplazo ----------
   Se muestran solo si la ruta de arriba está vacía, o si la foto
   no se pudo cargar (nombre mal escrito, archivo movido, etc). */
function categoryArt(catId, color){
  const arts = {
    maderas: `<rect width="100" height="75" fill="${color}22"/>
      ${[14,26,38,50,62].map(y=>`<rect x="6" y="${y}" width="88" height="8" rx="1.5" fill="${color}" opacity="${0.55 + (y%3)*0.1}"/>`).join('')}`,
    tableros: `<rect width="100" height="75" fill="${color}22"/>
      <rect x="14" y="10" width="60" height="55" fill="${color}55" stroke="${color}" stroke-width="1.5"/>
      <rect x="24" y="20" width="60" height="55" fill="${color}99" stroke="${color}" stroke-width="1.5"/>`,
    ladrillos: `<rect width="100" height="75" fill="${color}22"/>
      ${[0,1,2,3].map(row=>[0,1,2].map(col=>{
        const y = 8 + row*16, x = -10 + col*38 + (row%2?19:0);
        return `<rect x="${x}" y="${y}" width="34" height="12" rx="1" fill="${color}" opacity="0.8"/>`;
      }).join('')).join('')}`,
    baldosas: `<rect width="100" height="75" fill="${color}22"/>
      ${[0,1,2].map(r=>[0,1,2,3].map(c=>`<rect x="${4+c*24}" y="${4+r*24}" width="20" height="20" rx="1.5" fill="${color}" opacity="0.7"/>`).join('')).join('')}`,
    viguetas: `<rect width="100" height="75" fill="${color}22"/>
      ${[10,26,42,58].map(y=>`<g><rect x="6" y="${y}" width="88" height="6" fill="${color}"/><rect x="6" y="${y}" width="4" height="14" fill="${color}"/><rect x="90" y="${y}" width="4" height="14" fill="${color}"/></g>`).join('')}`,
    cemento: `<rect width="100" height="75" fill="${color}22"/>
      <path d="M30 12 h40 l6 8 v40 a6 6 0 0 1-6 6 H30 a6 6 0 0 1-6-6 V20 Z" fill="${color}" opacity="0.85"/>
      ${[24,32,40,48].map(y=>`<line x1="28" y1="${y}" x2="72" y2="${y}" stroke="${color}22" stroke-width="1.5"/>`).join('')}`,
    hierro: `<rect width="100" height="75" fill="${color}22"/>
      ${[16,37,58].map(y=>`<g><line x1="4" y1="${y}" x2="96" y2="${y}" stroke="${color}" stroke-width="4"/>
        ${Array.from({length:12}).map((_,i)=>`<line x1="${8+i*8}" y1="${y-4}" x2="${8+i*8}" y2="${y+4}" stroke="${color}" stroke-width="2" opacity="0.6"/>`).join('')}
      </g>`).join('')}`,
    aislantes: `<rect width="100" height="75" fill="${color}22"/>
      <circle cx="34" cy="37" r="26" fill="none" stroke="${color}" stroke-width="6"/>
      <circle cx="34" cy="37" r="16" fill="none" stroke="${color}" stroke-width="5" opacity="0.7"/>
      <circle cx="34" cy="37" r="7" fill="${color}" opacity="0.6"/>
      <rect x="60" y="24" width="34" height="26" rx="2" fill="${color}" opacity="0.35"/>`,
    seco: `<rect width="100" height="75" fill="${color}22"/>
      ${[8,20,32,44,56].map(y=>`<rect x="10" y="${y}" width="80" height="8" fill="${color}" opacity="0.75"/>`).join('')}`,
    complementos: `<rect width="100" height="75" fill="${color}22"/>
      ${[[24,22],[52,18],[36,42],[68,46],[18,52]].map(([x,y])=>`<g transform="translate(${x},${y})"><circle r="7" fill="${color}"/><rect x="-1.4" y="-7" width="2.8" height="14" fill="${color}33"/></g>`).join('')}`,
  };
  return arts[catId] || `<rect width="100" height="75" fill="${color}22"/>`;
}

/* Si la foto no carga (ruta mal escrita, archivo movido, etc),
   se oculta y aparece el dibujo de reemplazo en su lugar. */
function handleImgError(imgEl){
  imgEl.style.display = 'none';
  imgEl.nextElementSibling.style.display = 'block';
}

/* ---------- Estado del carrito ----------
   localStorage puede fallar (o no existir) si el archivo se abre
   directo con doble clic en vez de servido por un sitio real,
   sobre todo en navegadores de celular. Por eso nunca debe cortar
   el flujo de agregar/restar productos: si falla, el carrito sigue
   funcionando en memoria durante la sesión. */
let cart = {};
try { cart = JSON.parse(localStorage.getItem('pampa-cart')) || {}; } catch(e){ cart = {}; }

function saveCart(){
  try { localStorage.setItem('pampa-cart', JSON.stringify(cart)); }
  catch(e){ /* sin storage disponible: seguimos solo en memoria */ }
  renderCart();
  updateCartCount();
}

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
}
function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id] += delta;
  if(cart[id] <= 0) delete cart[id];
  saveCart();
}
function removeFromCart(id){
  delete cart[id];
  saveCart();
}
function clearCart(){
  cart = {};
  saveCart();
}

function updateCartCount(){
  const count = Object.values(cart).reduce((a,b)=>a+b,0);
  document.getElementById('cartCount').textContent = count;
}

/* ---------- Render: categorías ---------- */
function renderCategories(){
  const grid = document.getElementById('catGrid');
  grid.innerHTML = categories.map(c => `
    <button class="cat-card" data-cat="${c.id}">
      <span class="cat-icon" style="background:${c.color}">${c.icon}</span>
      <h3>${c.name}</h3>
      <p>${products.filter(p=>p.cat===c.id).length} productos</p>
    </button>
  `).join('');

  grid.querySelectorAll('.cat-card').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activeCategory = btn.dataset.cat;
      document.getElementById('productos').scrollIntoView({behavior:'smooth'});
      syncChips();
      renderProducts();
    });
  });
}

/* ---------- Render: chips de filtro ---------- */
function renderChips(){
  const row = document.getElementById('chipRow');
  const all = [{id:'todos', name:'Todos'}, ...categories];
  row.innerHTML = all.map(c => `<button class="chip" data-cat="${c.id}">${c.name}</button>`).join('');
  row.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      activeCategory = chip.dataset.cat;
      syncChips();
      renderProducts();
    });
  });
  syncChips();
}
function syncChips(){
  document.querySelectorAll('.chip').forEach(c=>{
    c.classList.toggle('active', c.dataset.cat === activeCategory);
  });
  document.querySelectorAll('.cat-card').forEach(c=>{
    c.classList.toggle('active', c.dataset.cat === activeCategory);
  });
}

/* ---------- Render: productos ---------- */
let activeCategory = 'todos';

function renderProducts(){
  const grid = document.getElementById('productGrid');
  const emptyMsg = document.getElementById('emptyMsg');
  const term = document.getElementById('searchInput').value.trim().toLowerCase();

  const list = products.filter(p=>{
    const matchesCat = activeCategory === 'todos' || p.cat === activeCategory;
    const matchesTerm = !term || p.name.toLowerCase().includes(term);
    return matchesCat && matchesTerm;
  });

  emptyMsg.hidden = list.length !== 0;

  grid.innerHTML = list.map(p=>{
    const cat = categories.find(c=>c.id===p.cat);
    const imgPath = PRODUCT_IMAGES[p.id] || CATEGORY_IMAGES[p.cat];
    return `
      <article class="product-card">
        <div class="product-media">
          ${imgPath ? `<img class="product-photo" src="${imgPath}" alt="${p.name}" onerror="handleImgError(this)">` : ''}
          <svg class="product-art" viewBox="0 0 100 75" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="display:${imgPath ? 'none' : 'block'}">${categoryArt(p.cat, p.color)}</svg>
          <span class="product-tag">${cat.code}-${p.id.slice(1)}</span>
        </div>
        <div class="product-body">
          <span class="product-cat">${cat.name}</span>
          <h3 class="product-name">${p.name}</h3>
          <span class="product-unit">Precio por ${p.unit}</span>
          <div class="product-row">
            <span class="product-price">${money(p.price)}</span>
            <button class="add-btn" aria-label="Agregar ${p.name} al carrito" data-id="${p.id}">+</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> addToCart(btn.dataset.id));
  });
}

/* ---------- Render: carrito ---------- */
function renderCart(){
  const wrap = document.getElementById('cartItems');
  const ids = Object.keys(cart);

  if(ids.length === 0){
    wrap.innerHTML = `<p class="cart-empty">Todavía no agregaste productos.<br>Explorá el catálogo y sumá lo que necesitás para tu obra.</p>`;
  } else {
    wrap.innerHTML = ids.map(id=>{
      const p = products.find(x=>x.id===id);
      const qty = cart[id];
      return `
        <div class="cart-item">
          <span class="cart-item-swatch" style="background:${p.color}"></span>
          <div class="cart-item-info">
          <h4>${p.name}</h4>
          <span>${money(p.price)} / ${p.unit}</span>
          <div class="qty-row">
          <button data-action="dec" data-id="${id}" aria-label="Restar">−</button>
          <span>${qty}</span>
          <button data-action="inc" data-id="${id}" aria-label="Sumar">+</button>
          </div>
          <button class="remove-item" data-action="rem" data-id="${id}">Quitar</button>
          </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const total = ids.reduce((sum,id)=> sum + products.find(p=>p.id===id).price * cart[id], 0);
  document.getElementById('cartTotal').textContent = money(total);

  wrap.querySelectorAll('button[data-action]').forEach(btn=>{
    const id = btn.dataset.id;
    btn.addEventListener('click', ()=>{
      if(btn.dataset.action === 'inc') changeQty(id, 1);
      if(btn.dataset.action === 'dec') changeQty(id, -1);
      if(btn.dataset.action === 'rem') removeFromCart(id);
    });
  });

  updateWhatsappLink(ids, total);
}

function updateWhatsappLink(ids, total){
  const link = document.getElementById('cartWhatsapp');
  if(ids.length === 0){
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola PAMPA, quiero consultar por materiales.')}`;
    return;
  }
  const lines = ids.map(id=>{
    const p = products.find(x=>x.id===id);
    return `• ${cart[id]} x ${p.name} (${p.unit})`;
  });
  const msg = `Hola PAMPA, quiero hacer este pedido:\n\n${lines.join('\n')}\n\nTotal estimado: ${money(total)}\n\n¿Me confirman disponibilidad y coordinamos el retiro/envío?`;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ---------- Carrito: abrir / cerrar ---------- */
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');

function openCart(){
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
}
function closeCartDrawer(){
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);
document.getElementById('clearCart').addEventListener('click', clearCart);
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeCartDrawer(); });

/* ---------- Menú móvil ---------- */
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', ()=>{
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=> mainNav.classList.remove('open'));
});

/* ---------- Búsqueda ---------- */
document.getElementById('searchInput').addEventListener('input', renderProducts);

/* ---------- Init ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
renderCategories();
renderChips();
renderProducts();
renderCart();
updateCartCount();