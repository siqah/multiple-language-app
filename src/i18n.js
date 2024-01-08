import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        returnObjects:true,
        lng:"en",
        resources: {
            en:{
                translation:{
                    greeting: "Hello, Welcome",
                    description: {
                        line1:"Your are doing great job now",
                        line2:"This is very new to {{name}}"

                    }
                }
                
            },
            fr:{
                translation:{
                    greeting: "Bonjour, Bienvenue !",
                    description:{
                        line1:"Votre travail est formidable maintenant",
                        line2:"C'est très nouveau {{name}}"
                    }
                }

            },
            hi:{
                translation:{
                    greeting: "नमस्ते, स्वागत हे",
                    description:{
                        line1:"आप अच्छा काम कर रहे हैं",
                        line2:"यह बहुत नया है {{name}}"
                    }

                }

            },
            ar:{
                translation:{
                    greeting: "مرحبا ، أهلا بك",
                    description:{
                        line1:"أنت تقوم بعمل رائع الآن",
                        line2:"هذا جديد جدا {{name}}"
                    }

                }

            },
            }

    })
