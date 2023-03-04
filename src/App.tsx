import React from 'react';
import styles from './App.module.css';
// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
import { Header, Footer } from "./components"
function App(): JSX.Element {
    return (
        <div className={styles.App}>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
}

export default App;
