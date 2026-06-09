import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({ isDark: true, toggle: () => {} })

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = typeof localStorage !== 'undefined'
      ? localStorage.getItem('jbm-theme')
      : null
    return saved === 'light' ? false : true
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light-mode')
    } else {
      document.documentElement.classList.add('light-mode')
    }
    localStorage.setItem('jbm-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggle = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
