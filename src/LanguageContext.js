import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import i18n from './i18n';


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
      const storedLanguage = localStorage.getItem('language');
      const [language, setLanguage] = useState(storedLanguage || 'tr');
    
      const changeLanguage = (newLanguage) => {
            setLanguage(newLanguage);
            localStorage.setItem('language', newLanguage);
            i18n.changeLanguage(newLanguage);
      };
    
      useEffect(() => {
            const storedLanguage = localStorage.getItem('language');
            if (storedLanguage) {
              setLanguage(storedLanguage);
              i18n.changeLanguage(storedLanguage); // Synchronize i18n with the stored language on component mount
            }
          }, []);

      return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
          {children}
        </LanguageContext.Provider>
      );
    };
    
export const useLanguage = () => useContext(LanguageContext);