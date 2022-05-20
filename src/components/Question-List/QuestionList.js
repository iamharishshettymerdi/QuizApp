import React, { Component } from 'react';

function QuestionList()
{
    const mystyle = {  
        backgroundColor: "#F5F5F5",  
        margin: "10px",  
        fontFamily: "Arial",
        padding:"10px",
        borderRadius:"5px",
      };  
    return (<div>
                <h2>1. Sun rises in the ________</h2>

                <div style={mystyle}>North</div>
                <div style={mystyle}>South</div>
                <div style={mystyle}>East</div>
                <div style={mystyle}>West</div>
             
               

                <h2>2. Largest ocean is ________</h2>

                <div style={mystyle}>Pecific Ocean</div>
                <div style={mystyle}>Indian Ocean</div>
                <div style={mystyle}>Atlantic Ocean</div>
                <div style={mystyle}>Arctic Ocean</div>

                <h2>3. Canada is in which continent ? </h2>
                
                <div style={mystyle}>Asia</div>
                <div style={mystyle}>Africa</div>
                <div style={mystyle}>North America</div>
                <div style={mystyle}>South America</div>
                
            </div>
            )
}
export default QuestionList;