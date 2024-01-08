//import { changeLanguage } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n  from 'i18next'

const languages =[
    {code:"en", lang: "English"},
    {code:"fr", lang: "French"},
    {code:"hi", lang: "Hindi"}
]

const  changeLanguage = () =>{  
     const {i18n} = useTranslation();
}

const Languageselector = () => {
  const {i18n} = useTranslation();

  return (
    <div className='btn-container'>
        {languages.map((lng)=>{
                return(
                    <button className={lng.code === i18n.language ? "selected" : ""} key={lng.code} onClick={() => changeLanguage()}>{lng.lang}</button>
                )})
        }
    </div>
  )
}

export default Languageselector