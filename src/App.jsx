// Importacion de componentes
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import React from "react";

export default class App extends React.Component {
    render(){
    return (
    <>
      <Section>
        <FeedbackOptions></FeedbackOptions>
    </Section>
    </>  
    )
  }  
  }