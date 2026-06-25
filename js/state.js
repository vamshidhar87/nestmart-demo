const NM = {
  getCart() { try { return JSON.parse(localStorage.getItem('nm_cart') || '[]'); } catch { return []; } },
  setCart(v) { localStorage.setItem('nm_cart', JSON.stringify(v)); NM._emitCartChange(); },
  addToCart(product, qty = 1) {
    const cart = NM.getCart();
    const idx = cart.findIndex(i => i.id === product.id);
    if (idx >= 0) cart[idx].qty += qty;
    else cart.push({ id: product.id, name: product.name, price: product.price, qty, emoji: product.emoji });
    NM.setCart(cart);
  },
  removeFromCart(id) { NM.setCart(NM.getCart().filter(i => i.id !== id)); },
  updateCartQty(id, qty) {
    if (qty <= 0) { NM.removeFromCart(id); return; }
    const cart = NM.getCart();
    const idx = cart.findIndex(i => i.id === id);
    if (idx >= 0) { cart[idx].qty = qty; NM.setCart(cart); }
  },
  clearCart() { localStorage.removeItem('nm_cart'); NM._emitCartChange(); },
  cartTotal() { return NM.getCart().reduce((s, i) => s + i.price * i.qty, 0); },
  cartCount() { return NM.getCart().reduce((s, i) => s + i.qty, 0); },

  getWishlist() { try { return JSON.parse(localStorage.getItem('nm_wishlist') || '[]'); } catch { return []; } },
  setWishlist(v) { localStorage.setItem('nm_wishlist', JSON.stringify(v)); },
  toggleWishlist(id) {
    const wl = NM.getWishlist();
    const idx = wl.indexOf(id);
    if (idx >= 0) wl.splice(idx, 1);
    else wl.push(id);
    NM.setWishlist(wl);
    return idx < 0;
  },
  inWishlist(id) { return NM.getWishlist().includes(id); },

  getUser() { try { return JSON.parse(localStorage.getItem('nm_user') || 'null'); } catch { return null; } },
  setUser(v) { localStorage.setItem('nm_user', JSON.stringify(v)); },
  isAdmin() { return localStorage.getItem('nm_admin') === 'true'; },
  setAdmin(v) { v ? localStorage.setItem('nm_admin', 'true') : localStorage.removeItem('nm_admin'); },
  logout() { localStorage.removeItem('nm_user'); localStorage.removeItem('nm_admin'); window.location.href = '/login?demo=1'; },

  getSettings() { try { return JSON.parse(localStorage.getItem('nm_settings') || '{}'); } catch { return {}; } },
  saveSettings(v) {
    const cur = NM.getSettings();
    localStorage.setItem('nm_settings', JSON.stringify({ ...cur, ...v }));
  },

  _emitCartChange() {
    document.dispatchEvent(new CustomEvent('nm:cartchange'));
  },

  fmt(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
};
