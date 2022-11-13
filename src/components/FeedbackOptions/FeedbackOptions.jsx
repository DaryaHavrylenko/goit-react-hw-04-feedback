import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[3]}px;
  text-transform: capitalize;
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  &:hover {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.node,
  onLeaveFeedback: PropTypes.func.isRequired,
};
