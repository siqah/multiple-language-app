
import { useTranslation } from 'react-i18next'
import './App.css'
import Languageselector from './components/language-selector'

function App() {
  const {t} = useTranslation();
  const {line1, line2} = t("description",{
    name: "Faruoq"
  });

  return (
    <div className='container'>
      <Languageselector />
      <h1>{t('greeting')}</h1>
    
      { <p>{line1}</p> }
      <span>{line2}</span>
    </div>
  )
}

export default App
