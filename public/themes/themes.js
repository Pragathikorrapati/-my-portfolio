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

const themeLinks = [...document.querySelectorAll('.picker [data-theme]')]
const demos = [...document.querySelectorAll('#pragathi-themes > [data-theme]')]
const requested = new URLSearchParams(window.location.search).get('theme')
const selected = demos.some(demo => demo.dataset.theme === requested) ? requested : 'editorial'
for (const demo of demos) demo.hidden = demo.dataset.theme !== selected
for (const link of themeLinks) {
  if (link.dataset.theme === selected) link.setAttribute('aria-current', 'true')
}
