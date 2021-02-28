import { Component } from 'react';

import Section from './components/Section';
import FeedbackOption from './components/FeedbackOption';
import Statistics from './components/Statistics';

import { FEEDBACK_OPTIONS } from './data/constans';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositivePercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.handelFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;
