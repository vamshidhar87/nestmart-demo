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
                : `<a href="/login?demo=1" class="btn btn-primary btn-sm nb-signin-btn" title="Sign In"><span class="nb-signin-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span><span class="nb-signin-label"> Sign In</span></a>`
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
          <div class="catbar-persistent-search">
            <div class="persistent-search-wrap">
              <span class="persistent-search-icon">🔍</span>
              <input type="text" id="persistent-search-input" placeholder="Search notebooks, pens, art supplies…" autocomplete="off">
              <button class="persistent-search-btn" id="persistent-search-btn">Search</button>
            </div>
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

  var mbnSvg = {
    home:    '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    shop:    '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    offers:  '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
    about:   '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    contact: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
  };
  const mbnTabs = [
    { href: '/',             match: '/',        icon: mbnSvg.home,    label: 'Home'    },
    { href: '/shop.html',    match: '/shop',    icon: mbnSvg.shop,    label: 'Shop'    },
    { href: '/offers.html',  match: '/offers',  icon: mbnSvg.offers,  label: 'Offers'  },
    { href: '/about.html',   match: '/about',   icon: mbnSvg.about,   label: 'About'   },
    { href: '/contact.html', match: '/contact', icon: mbnSvg.contact, label: 'Contact' }
  ];
  const mobileBottomNav = `<nav class="mobile-bottom-nav">
    ${mbnTabs.map(function(t) {
      var active = path === t.match || (t.match !== '/' && path.startsWith(t.match));
      return '<a href="' + t.href + '" class="mbn-item' + (active ? ' active' : '') + '">' +
        '<span class="mbn-icon">' + t.icon + '</span>' +
        '<span class="mbn-label">' + t.label + '</span>' +
      '</a>';
    }).join('')}
  </nav>`;

  document.body.insertAdjacentHTML('beforeend', footer + mobileBottomNav);

  _initCartDrawer();
  _initNavbarSearch();
  _initPersistentSearch();
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
}

function _initPersistentSearch() {
  var input = document.getElementById('persistent-search-input');
  var btn   = document.getElementById('persistent-search-btn');
  function go() {
    var q = input && input.value.trim();
    if (q) window.location.href = '/shop.html?q=' + encodeURIComponent(q);
  }
  if (input) input.addEventListener('keydown', function(e) { if (e.key === 'Enter') go(); });
  if (btn)   btn.addEventListener('click', go);
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

  const userBtnInner = `
    <div style="display:flex;flex-direction:column;align-items:flex-end;line-height:1.25;">
      <span style="font-size:13px;font-weight:700;color:var(--text-dark);white-space:nowrap;">${adminName.split(' ')[0]}</span>
      <span style="font-size:10px;color:var(--text-muted);white-space:nowrap;text-transform:uppercase;letter-spacing:0.4px;">Admin</span>
    </div>
    <div class="admin-user-avatar">${adminInitials}</div>`;

  const topbar = `
    <div class="admin-content">
      <div class="admin-topbar">
        <div class="admin-tb-brand" style="align-items:center;padding:10px 16px;border-bottom:1px solid var(--border-light);width:100%;max-width:100vw;box-sizing:border-box;justify-content:space-between;">
          <a href="/index.html" style="display:flex;align-items:center;gap:8px;text-decoration:none;min-width:0;overflow:hidden;">
            ${_tvrLogoSVG(28)}
            <div style="display:flex;flex-direction:column;min-width:0;overflow:hidden;">
              <span style="font-family:var(--font-heading);font-size:13px;font-weight:700;color:var(--text-dark);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Padmavathi Traders</span>
              <span style="font-size:10px;color:var(--text-muted);font-weight:400;font-family:var(--font-body);margin-top:1px;letter-spacing:0.3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Est. 1968 &middot; Stationery &amp; Art</span>
            </div>
          </a>
          <div id="admin-user-btn-m" style="display:flex;align-items:center;gap:8px;cursor:pointer;padding:5px 10px;border-radius:10px;border:1px solid var(--border-light);background:var(--bg-outer);flex-shrink:0;position:relative;user-select:none;color:var(--text-dark);">
            ${userBtnInner}
            <div class="admin-user-dropdown" id="admin-user-dropdown-m">
              <div class="admin-dd-info">
                <div style="font-weight:600;font-size:13px;color:var(--text-dark)">${adminName}</div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${adminEmail}</div>
              </div>
              <button class="admin-dd-logout" onclick="NM.logout()">🚪 Sign Out</button>
            </div>
          </div>
        </div>
        <div class="admin-tb-nav">
          <div class="admin-tb-nav-left" style="flex:1;min-width:0;">
            <button class="admin-hamburger" id="admin-hamburger" title="Menu">☰</button>
            <div class="admin-topbar-title" id="admin-page-title">Admin</div>
          </div>
          <div class="admin-user-btn" id="admin-user-btn" style="display:flex;align-items:center;gap:8px;cursor:pointer;padding:5px 10px;border-radius:10px;border:1px solid var(--border-light);background:var(--bg-outer);flex-shrink:0;position:relative;user-select:none;color:var(--text-dark);">
            ${userBtnInner}
            <div class="admin-user-dropdown" id="admin-user-dropdown">
              <div class="admin-dd-info">
                <div style="font-weight:600;font-size:13px;color:var(--text-dark)">${adminName}</div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${adminEmail}</div>
              </div>
              <button class="admin-dd-logout" onclick="NM.logout()">🚪 Sign Out</button>
            </div>
          </div>
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

  function wireAdminBtn(btnId, ddId) {
    var btn = document.getElementById(btnId);
    var dd  = document.getElementById(ddId);
    if (btn && dd) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        dd.classList.toggle('open');
      });
    }
  }
  wireAdminBtn('admin-user-btn', 'admin-user-dropdown');
  wireAdminBtn('admin-user-btn-m', 'admin-user-dropdown-m');

  document.addEventListener('click', function() {
    var dd  = document.getElementById('admin-user-dropdown');
    var ddm = document.getElementById('admin-user-dropdown-m');
    if (dd)  dd.classList.remove('open');
    if (ddm) ddm.classList.remove('open');
  });
}
