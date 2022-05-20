import React, { Component } from 'react';

import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import QuestionList from '../Question-List/QuestionList';
function Container()
{
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <QuestionList/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
       
}

export default Container;