import React, { Component } from 'react';

import { Option } from '../../Styles/Commoncss.styled';

import { Questioncontainer } from '../../Styles/Commoncss.styled';
function QuestionList()
{
    // const optionstyle = {  
    //     backgroundColor: "#F5F5F5",  
    //     margin: "10px",  
    //     fontFamily: "Arial",
    //     padding:"10px",
    //     borderRadius:"5px",
    //   };

      const questions = [
        {
          question: "1. Sun rises in the ____",
          options: [
            { text: "North" },
            { text: "South" },
            { text: "East", isAnswer: true },
            { text: "West" },
          ],
        },
        {
          question: "2. Largest ocean is ____",
          options: [
            { text: "Pacific Ocean", isAnswer: true },
            { text: "Artic Ocean" },
            { text: "Atlantic Ocean" },
            { text: "Indian Ocean" },
          ],
        },
        {
          question: "3. Canada is in which continent?",
          options: [
            { text: "Asia" },
            { text: "Africa" },
            { text: "North America", isAnswer: true },
            { text: "South America" },
          ],
        },
      ];
    return (<React.Fragment>
                    {questions.map(m=>
                      <React.Fragment>
                          <h2 key={m.question}><Questioncontainer>{m.question}</Questioncontainer></h2>
                          <div>{m.options.map(mc=><Option key={mc.text}>{mc.text}</Option>)}</div>
                      </React.Fragment>
                    )}
            </React.Fragment>)
}
export default QuestionList;