function showToast(msg, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icons[type] || '✓'}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  }, 2800);
}

function _getActivePage() {
  const path = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  return path;
}

/* TVR Logo SVG — dark-green rounded square with amber underline */
function _tvrLogoSVG(size) {
  size = size || 36;
  return `<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="40" height="40" rx="9" fill="#1f6b4d"/>
    <text x="20" y="27" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#fff" text-anchor="middle" letter-spacing="0.5">TVR</text>
    <path d="M10 31 Q20 34 30 31" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" fill="none"/>
  </svg>`;
}

function injectStorefrontShell() {
  const user = NM.getUser();
  const cartCount = NM.cartCount();
  const path = _getActivePage();

  const navLinks = [
    { href: '/',             match: '/',       label: 'Home'    },
    { href: '/shop.html',    match: '/shop',   label: 'Shop'    },
    { href: '/offers.html',  match: '/offers', label: 'Offers'  },
    { href: '/about.html',   match: '/about',  label: 'About'   },
    { href: '/contact.html', match: '/contact',label: 'Contact' }
  ];

  const catBar = (NM_DATA.categories || []).map(c =>
    `<a href="/shop.html?cat=${c.slug}" class="catbar-item">${c.name}</a>`
  ).join('');

  const html = `
    <div class="storefront-wrap">
      <div class="announcement-bar">
        Trusted by offices, schools, colleges &amp; artists · Bulk orders get custom quotes · <a href="/offers.html">Free delivery over ₹999</a>
      </div>
      <nav class="navbar">
        <div class="container">
          <div class="navbar-inner">
            <a href="/" class="navbar-logo">
              <div class="navbar-logo-mark">${_tvrLogoSVG(36)}</div>
              <div class="navbar-logo-text">Padmavathi Traders<span class="navbar-logo-sub">Est. 1968 · Stationery &amp; Art</span></div>
            </a>
            <div class="navbar-search">
              <span class="navbar-search-icon">🔍</span>
              <input type="text" id="navbar-search-input" placeholder="Search notebooks, pens, art supplies…" autocomplete="off">
              <button class="navbar-search-btn" id="navbar-search-btn">Search</button>
            </div>
            <nav class="navbar-links">
              ${navLinks.map(l => `<a href="${l.href}"${path === l.match || (l.match !== '/' && path.startsWith(l.match)) ? ' class="active"' : ''}>${l.label}</a>`).join('')}
            </nav>
            <div class="navbar-actions">
              <button class="mobile-search-toggle" id="mobile-search-toggle" title="Search">🔍</button>
              ${user && !NM.isAdmin() ? `<a href="/wishlist.html" class="navbar-icon-btn" title="Wishlist">♡</a>` : ''}
              <button class="navbar-icon-btn" id="cart-btn" title="Cart">
                🛒<span class="cart-badge" id="cart-badge-count">${cartCount > 0 ? cartCount : ''}</span>
              </button>
              ${user && !NM.isAdmin()
                ? `<div class="nb-user-wrap" id="nb-user-wrap">
                     <button class="navbar-user" id="nb-user-btn">
                       <span class="navbar-user-avatar">${user.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</span>
                       <span class="nb-user-name-label">${user.name.split(' ')[0]}</span>
                       <span style="font-size:9px;opacity:.6;margin-left:3px">▾</span>
                     </button>
                     <div class="nb-user-menu" id="nb-user-menu">
                       <div class="nb-user-info">
                         <div class="nb-user-name">${user.name}</div>
                         <div class="nb-user-email">${user.email || ''}</div>
                       </div>
                       <div style="height:1px;background:var(--border-light)"></div>
                       <a href="/account/dashboard" class="nb-user-action">📋 My Quotes &amp; Orders</a>
                       <a href="/account/settings" class="nb-user-action">⚙ Account Settings</a>
                       <div style="height:1px;background:var(--border-light)"></div>
                       <button class="nb-user-logout" onclick="NM.logout()">Sign Out</button>
                     </div>
                   </div>`
                : !user
                  ? `<a href="/login?demo=1" class="btn btn-primary btn-sm nb-signin-btn" title="Sign In"><span class="nb-signin-icon">👤</span><span class="nb-signin-label"> Sign In</span></a>`
                  : ''
              }
              <a href="/admin/login" class="navbar-admin-btn" title="Admin Console"><span class="admin-icon">⚙ </span><span class="admin-label">Admin Login</span></a>
            </div>
          </div>
        </div>
      </nav>
      <div class="mobile-search-bar" id="mobile-search-bar">
        <input type="text" id="mobile-search-input" placeholder="Search notebooks, pens, art supplies…" autocomplete="off">
        <button class="mobile-search-bar-close" id="mobile-search-close">✕</button>
      </div>
      <div class="catbar">
        <div class="container">
          <div class="catbar-inner">
            <a href="/shop.html" class="catbar-item catbar-all">All Products</a>
            ${catBar}
          </div>
          <div class="catbar-mobile-nav">
            <button class="catbar-mobile-link" id="catbar-search-btn" type="button" title="Search">🔍</button>
            ${navLinks.map(l => `<a href="${l.href}" class="catbar-mobile-link${path === l.match || (l.match !== '/' && path.startsWith(l.match)) ? ' active' : ''}">${l.label}</a>`).join('')}
          </div>
        </div>
      </div>
      <div id="cart-drawer-overlay" class="cart-drawer-overlay"></div>
      <div id="cart-drawer" class="cart-drawer">
        <div class="cart-drawer-header">
          <h3 style="font-family:var(--font-heading);font-size:16px;font-weight:700">Your Cart</h3>
          <button id="cart-drawer-close" class="modal-close">✕</button>
        </div>
        <div class="cart-drawer-items" id="cart-drawer-items"></div>
        <div class="cart-drawer-footer" id="cart-drawer-footer"></div>
      </div>
      <main id="main-content">`;

  document.body.insertAdjacentHTML('afterbegin', html);

  const footer = `
      </main>
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand-col">
              <div class="footer-brand-logo">${_tvrLogoSVG(40)}<span class="footer-brand-name">Padmavathi Traders</span></div>
              <p class="footer-tagline">Your trusted stationery &amp; art supplies partner since 1968. Serving schools, colleges and offices across Hyderabad.</p>
            </div>
            <div class="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a href="/shop.html">All Products</a></li>
                <li><a href="/shop.html?cat=pens-writing">Pens &amp; Writing</a></li>
                <li><a href="/shop.html?cat=notebooks-journals">Notebooks</a></li>
                <li><a href="/shop.html?cat=art-craft">Art Supplies</a></li>
                <li><a href="/offers.html">Deals &amp; Offers</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/login.html">Sign In</a></li>
                <li><a href="/wishlist.html">Wishlist</a></li>
                <li><a href="/cart.html">Cart &amp; Quotes</a></li>
                <li><a href="/offers.html">Offers</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/about.html">Our Story</a></li>
                <li><a href="/about.html#contact">Contact Us</a></li>
                <li><a href="/about.html#clients">Our Clients</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Help</h4>
              <ul>
                <li><a href="/cart.html">Get a Quote</a></li>
                <li><a href="/cart.html">Bulk Orders</a></li>
                <li><a href="/about.html#contact">GST Billing</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 TVR · Padmavathi Traders. All rights reserved.</span>
            <span style="font-size:12px;color:#94a3b8">GSTIN 36AADPT1234F1ZX · CIN U52100TG1968</span>
          </div>
        </div>
      </footer>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', footer);

  _initCartDrawer();
  _initNavbarSearch();
  _updateCartBadge();
  document.addEventListener('nm:cartchange', _updateCartBadge);

  // User menu dropdown
  var nbBtn = document.getElementById('nb-user-btn');
  var nbMenu = document.getElementById('nb-user-menu');
  if (nbBtn && nbMenu) {
    nbBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      nbMenu.classList.toggle('open');
    });
    document.addEventListener('click', function() {
      nbMenu.classList.remove('open');
    });
  }

  // Mobile search overlay
  var mSearchToggle = document.getElementById('mobile-search-toggle');
  var mSearchBar    = document.getElementById('mobile-search-bar');
  var mSearchInput  = document.getElementById('mobile-search-input');
  var mSearchClose  = document.getElementById('mobile-search-close');
  if (mSearchToggle && mSearchBar) {
    mSearchToggle.addEventListener('click', function() {
      mSearchBar.classList.add('open');
      if (mSearchInput) setTimeout(function() { mSearchInput.focus(); }, 50);
    });
    if (mSearchClose) mSearchClose.addEventListener('click', function() { mSearchBar.classList.remove('open'); });
    if (mSearchInput) mSearchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var q = mSearchInput.value.trim();
        if (q) window.location.href = '/shop.html?q=' + encodeURIComponent(q);
      }
    });
  }
  // Catbar search pill — triggers the same mobile search overlay
  var catbarSearchBtn = document.getElementById('catbar-search-btn');
  if (catbarSearchBtn && mSearchBar) {
    catbarSearchBtn.addEventListener('click', function() {
      mSearchBar.classList.add('open');
      if (mSearchInput) setTimeout(function() { mSearchInput.focus(); }, 50);
    });
  }
}

function _updateCartBadge() {
  const cnt = NM.cartCount();
  const badge = document.getElementById('cart-badge-count');
  if (badge) badge.textContent = cnt > 0 ? cnt : '';
}

function _initCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  const closeBtn = document.getElementById('cart-drawer-close');
  const cartBtn = document.getElementById('cart-btn');

  function openDrawer() {
    _renderCartDrawer();
    overlay.classList.add('open');
    drawer.classList.add('open');
  }
  function closeDrawer() {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
  }

  if (cartBtn) cartBtn.addEventListener('click', openDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
}

function _renderCartDrawer() {
  const cart = NM.getCart();
  const itemsEl = document.getElementById('cart-drawer-items');
  const footerEl = document.getElementById('cart-drawer-footer');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p><a href="/shop.html" class="btn btn-primary btn-sm" style="margin-top:12px">Browse Products</a></div>`;
    footerEl.innerHTML = '';
    return;
  }

  itemsEl.innerHTML = cart.map(item => {
    const prod = (NM_DATA.products || []).find(p => p.id === item.id);
    const imgSrc = prod ? prod.img : '';
    return `
    <div class="cart-item">
      <div class="cart-item-img">${imgSrc ? `<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover;border-radius:6px">` : '📦'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${NM.fmt(item.price)} × ${item.qty}</div>
        <div class="qty-stepper" style="margin-top:6px">
          <button onclick="NM.updateCartQty(${item.id}, ${item.qty - 1}); _renderCartDrawer(); _updateCartBadge()">−</button>
          <span>${item.qty}</span>
          <button onclick="NM.updateCartQty(${item.id}, ${item.qty + 1}); _renderCartDrawer(); _updateCartBadge()">+</button>
        </div>
      </div>
      <span class="cart-item-remove" onclick="NM.removeFromCart(${item.id}); _renderCartDrawer(); _updateCartBadge()">✕</span>
    </div>`;
  }).join('');

  const user = NM.getUser();
  footerEl.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <span style="font-weight:600;color:var(--text-dark)">Subtotal</span>
      <span style="font-size:18px;font-weight:700;color:var(--green-dark)">${NM.fmt(NM.cartTotal())}</span>
    </div>
    ${user
      ? `<a href="/cart.html" class="btn btn-primary btn-full">📋 Request a Quote</a>`
      : `<a href="/login.html" class="btn btn-primary btn-full">Sign in to Request Quote</a>
         <div style="font-size:11px;color:var(--text-muted);text-align:center;margin-top:8px">No payment now — quote first, order later</div>`
    }`;
}

function _initNavbarSearch() {
  const input = document.getElementById('navbar-search-input');
  const btn = document.getElementById('navbar-search-btn');
  function doSearch() {
    const q = input && input.value.trim();
    if (q) window.location.href = '/shop.html?q=' + encodeURIComponent(q);
  }
  if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  if (btn) btn.addEventListener('click', doSearch);
}

function injectAdminShell(activePage) {
  if (!NM.isAdmin()) { window.location.href = '/admin/login'; return; }

  const admin = NM.getAdmin && NM.getAdmin() || {};
  const adminName = admin.name || 'Ravi Sharma';
  const adminInitials = adminName.split(' ').map(w => w[0]).join('').slice(0, 2);
  const adminEmail = admin.email || 'ravi@padmavathitraders.com';

  const path = activePage || _getActivePage();
  const navItems = [
    { href: '/admin/dashboard.html',  match: '/admin/dashboard',  icon: '📊', label: 'Dashboard'     },
    { href: '/admin/orders.html',     match: '/admin/orders',     icon: '📦', label: 'Orders'        },
    { href: '/admin/quotes.html',     match: '/admin/quotes',     icon: '📋', label: 'Quotes'        },
    { href: '/admin/products.html',   match: '/admin/products',   icon: '🏷️', label: 'Products'      },
    { href: '/admin/categories.html', match: '/admin/categories', icon: '📁', label: 'Categories'    },
    { href: '/admin/customers.html',  match: '/admin/customers',  icon: '👥', label: 'Customers'     },
    { href: '/admin/enquiries.html',  match: '/admin/enquiries',  icon: '💬', label: 'Enquiries'     },
    { href: '/admin/broadcast.html',  match: '/admin/broadcast',  icon: '📢', label: 'Broadcast'     },
    { href: '/admin/settings.html',   match: '/admin/settings',   icon: '⚙️', label: 'Settings'      }
  ];

  const sidebar = `
    <aside class="admin-sidebar">
      <a href="/index.html" class="sidebar-logo" title="Back to storefront">
        <div class="sidebar-logo-mark">${_tvrLogoSVG(32)}</div>
        <div>
          <div class="sidebar-logo-text">Padmavathi Traders</div>
          <span class="sidebar-logo-sub">Admin Console</span>
        </div>
      </a>
      <nav class="sidebar-nav">
        ${navItems.map(item => {
          const isActive = path === item.match || (item.match !== '/admin/dashboard' && path.startsWith(item.match));
          return `<a href="${item.href}"${isActive ? ' class="active"' : ''}><span class="nav-icon">${item.icon}</span>${item.label}</a>`;
        }).join('')}
      </nav>
      <div class="sidebar-footer">
        <button class="sidebar-logout" onclick="NM.logout()">🚪 Logout</button>
      </div>
    </aside>`;

  const topbar = `
    <div class="admin-content">
      <div class="admin-topbar">
        <div style="display:flex;align-items:center;gap:8px">
          <button class="admin-hamburger" id="admin-hamburger" title="Menu">☰</button>
          <div style="font-family:var(--font-heading);font-size:15px;font-weight:600;color:var(--text-dark)" id="admin-page-title">Admin</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <div style="font-size:13px;color:var(--text-muted)">${adminEmail}</div>
          <div class="avatar" style="width:32px;height:32px;font-size:13px;background:var(--green-dark);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700">${adminInitials}</div>
        </div>
      </div>
      <div class="admin-main" id="main-content">`;

  const close = `</div></div>`;

  document.body.insertAdjacentHTML('afterbegin', `<div class="admin-wrap">${sidebar}<div class="admin-sidebar-overlay" id="admin-sidebar-overlay"></div>${topbar}`);
  document.body.insertAdjacentHTML('beforeend', close);

  var adminHamburger = document.getElementById('admin-hamburger');
  var adminSidebarEl = document.querySelector('.admin-sidebar');
  var adminOverlay   = document.getElementById('admin-sidebar-overlay');
  if (adminHamburger && adminSidebarEl && adminOverlay) {
    adminHamburger.addEventListener('click', function() {
      adminSidebarEl.classList.toggle('open');
      adminOverlay.classList.toggle('open');
    });
    adminOverlay.addEventListener('click', function() {
      adminSidebarEl.classList.remove('open');
      adminOverlay.classList.remove('open');
    });
  }
}
