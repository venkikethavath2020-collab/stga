/**
 * STGA Demo - Admin panel interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('adminSidebar');
  const overlay = document.getElementById('sidebarOverlay');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      if (sidebar?.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Tabs
  initTabs('.admin-tabs');

  // Approve / Reject actions
  document.querySelectorAll('[data-action="approve"]').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Application approved successfully (Demo)', 'success');
    });
  });

  document.querySelectorAll('[data-action="reject"]').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Application rejected (Demo)', 'danger');
    });
  });

  // View application modal
  document.querySelectorAll('[data-action="view-app"]').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal('appDetailModal');
    });
  });

  // Delete confirmation
  document.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this item? (Demo)')) {
        showToast('Item deleted (Demo)', 'success');
      }
    });
  });

  // Settings form
  document.querySelectorAll('.settings-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Settings saved successfully (Demo)', 'success');
    });
  });

  // Add opportunity / event buttons
  document.querySelectorAll('[data-action="add"]').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Add form would open here (Demo)', 'info');
    });
  });
});
