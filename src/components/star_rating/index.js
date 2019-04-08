import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StarWrapper = styled.div`
  display: inline-block;
  position: relative;

  &::before { 
    content: "★★★★★";
    color: grey;
  }
  
  @media (max-width: 700px) {
    order: ; 2;
  }
`;


const StarInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${props => props.width};

  &::before {
    content: "★★★★★";
    color: #12C3A0;
  }
`;

const StarRating = ({width}) => (
    <StarWrapper>
        <StarInner width={width} />
    </StarWrapper>
);
StarRating.propTypes = {
    width: PropTypes.string,
};

StarRating.defaultProps = {
    width: "0",
};
export default StarRating;