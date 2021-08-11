import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import GenSection from '../GenSection.js';

export default function Home(){
    return(
        <>
         <GenSection/>
         <Cards/>
         <Footer/>
        </>
    );
}