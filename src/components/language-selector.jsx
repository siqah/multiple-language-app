//import { changeLanguage } from 'i18next'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const languages =[
    {code:"en", lang: "English"},
    {code:"fr", lang: "French"},
    {code:"hi", lang: "Hindi"},
    {code: "ar", lang: "Arabic"}
]


const Languageselector = () => {
  const {i18n} = useTranslation();

  const  changeLanguage = (lng) =>{  
    i18n.changeLanguage(lng)
};
useEffect(() => {
  document.body.dir = i18n.dir();
},[i18n, i18n.language])

  return (
    <div className='btn-container'>
        {languages.map((lng)=>{
                return(
                    <button className={lng.code === i18n.language ? "selected" : ""} 
                    key={lng.code} 
                    onClick={() => changeLanguage(lng.code)}>
                    {lng.lang}</button>
                )})
        }
    </div>
  )
}

export default Languageselector