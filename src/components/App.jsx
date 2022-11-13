import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { ThemeProvider } from 'styled-components';
import { theme } from './ThemeProvider/theme';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = options => {
    this.setState(prevState => {
      return {
        ...this.state,
        [options]: prevState[options] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    let total = 0;
    for (const value of values) {
      total += value;
   
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const Percentege = Number(((this.state.good * 100) / total).toFixed(0));

    return Percentege;
  };

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.countFeedback}>
            </FeedbackOptions>
          </Section>
          
          <Section title="Statistics">
            {this.countTotalFeedback() ? <Statistics good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={
                this.countPositiveFeedbackPercentage() || 0
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }></Statistics> : <Notification message="There is no feedback"></Notification>}
          </Section>
        </ThemeProvider>
      </>
    );
  }
}
export default App;
