// Shared page utilities — loaded after data.js, state.js, components.js

function initTabSwitcher(containerSelector) {
  const tabs = document.querySelectorAll(containerSelector + ' .tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById('tab-' + btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

function formatDate(isoStr) {
  const d = new Date(isoStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function truncate(str, max) {
  return str && str.length > max ? str.slice(0, max) + '…' : str;
}
