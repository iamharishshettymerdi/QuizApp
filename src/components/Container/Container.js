import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import QuestionList from '../Question-List/QuestionList';
import { Divstyled } from '../../Styles/Commoncss.styled';
import Helmet from "react-helmet";

function Container()
{
    return (
        <React.Fragment>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Divstyled>
                <Header/>
                <QuestionList/>
                <Footer/>
            </Divstyled>
        </React.Fragment> 
    )  
}

export default Container;