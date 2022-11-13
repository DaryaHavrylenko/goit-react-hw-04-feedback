import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section `
    font-family: ${p => p.theme.fonts.heading};
`
export const Section = ({ title, children }) => {
    return (
        <Wrapper>
            {title && <h2>{title}</h2>} 
            <div>{ children}</div>
    </Wrapper>
)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}