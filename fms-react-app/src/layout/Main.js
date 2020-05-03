import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Main = props =>{
    const { children } = props;
        return(
            <div>
            <Header></Header>
                <main>
                  {children}
                </main>
             <Footer></Footer> 
            </div>
        );
    }

export default Main