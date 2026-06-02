import { createContext, useContext, useState, useEffect } from 'react'

const I18nContext = createContext()
const STORAGE_KEY = 'hevristika_lang'

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) || 'es' }
    catch { return 'es' }
  })
  const [messages, setMessages] = useState({})

  useEffect(() => {
    import(`./${lang}.json`).then(m => setMessages(m.default))
  }, [lang])

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(STORAGE_KEY, lang) }
    catch {}
  }, [lang])

  const t = (key) => {
    const keys = key.split('.')
    let value = messages
    for (const k of keys) {
      value = value?.[k]
    }
    return value ?? key
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  return useContext(I18nContext)
}
