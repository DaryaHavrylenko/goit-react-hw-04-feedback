import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { ThemeProvider } from 'styled-components';
import { theme } from './ThemeProvider/theme';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countFeedback = type => {
    setFeedback(state => ({ ...state, [type]: state[type] + 1 }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedback);

    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = feedback.good + feedback.neutral + feedback.bad;
    const Percentege = Number(((feedback.good * 100) / total).toFixed(0));

    return Percentege;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedback)}
            onLeaveFeedback={countFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={countTotalFeedback()}
              positivePercentage={
                countPositiveFeedbackPercentage() || 0
                  ? countPositiveFeedbackPercentage()
                  : 0
              }
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </ThemeProvider>
    </>
  );
};

export default App;
