import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { useState } from 'react';

function App() {

    const [lang, setLang] = useState("es");


    return (
        <>
            <Header titol="La Meva App" lang={lang} setLang={setLang} />
            
            <Content lang={lang} setLang={setLang} />

            
            <Footer idioma={lang} lang={lang} setLang={setLang} />
        </>
    )
}

export default App
