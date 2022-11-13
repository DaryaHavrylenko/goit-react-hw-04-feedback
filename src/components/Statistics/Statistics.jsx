import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackList = styled.p`
/* display: none; */
   font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.list};  
  font-size: ${p => p.theme.fontSizes.l} 
`

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
     
     <div>
            <FeedbackList>Good:<span>{good}</span></FeedbackList>
            <FeedbackList>Neutral:<span>{neutral}</span></FeedbackList>
            <FeedbackList>Bad:<span>{bad}</span></FeedbackList>
            <FeedbackList>Total:<span>{total}</span></FeedbackList>
            <FeedbackList>Positive Feedback:<span>{positivePercentage}%</span></FeedbackList>
        </div>
   )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}