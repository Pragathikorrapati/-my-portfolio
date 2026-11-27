(() => {
  const root = document.getElementById('pragathi-themes')
  root.addEventListener('click', (event) => {
    const control = event.target.closest('button[data-page]')
    if (!control) return
    const demo = control.closest('.demo')
    const selected = control.dataset.page
    for (const button of demo.querySelectorAll('nav button')) {
      button.setAttribute('aria-pressed', String(button.dataset.page === selected))
    }
    for (const panel of demo.querySelectorAll('[data-panel]')) {
      panel.hidden = panel.dataset.panel !== selected
    }
    if (control.classList.contains('cta-demo')) {
      demo.querySelector('[data-panel="Work"]').scrollIntoView?.({block:'nearest'})
    }
  })
})()
