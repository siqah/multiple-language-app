
import { useTranslation } from 'react-i18next'
import './App.css'
import Languageselector from './components/language-selector'

function App() {
  const {t} = useTranslation()

  return (
    <div className='container'>
      <Languageselector />
      <h1>{t('greeting')}</h1>
    </div>
  )
}

export default App
