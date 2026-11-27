import { createRoot } from 'react-dom/client'
import Atlas from './Atlas'
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/space-grotesk/wght.css'
import './atlas.css'
import './kinetic.css'

createRoot(document.getElementById('root')).render(<Atlas kinetic />)
