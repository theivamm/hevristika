import { createRoot } from 'react-dom/client'
import { I18nProvider } from './i18n/i18n.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<I18nProvider><App /></I18nProvider>)
