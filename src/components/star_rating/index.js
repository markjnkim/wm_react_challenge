import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StarWrapper = styled.div`
  display: inline-block;
  position: relative;

  ${StarWrapper}::before { 
    content: "☆☆☆☆☆";
    color: green;
  }
`;

const StarInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 50%;

  ${StarInner}::before {
    content: "★★★★★";
    color: green;
  }
`;

const StarRating = () => (
    <StarWrapper>
        <StarInner width="100">
        </StarInner>
    </StarWrapper>
);
StarRating.propTypes = {
    width: PropTypes.string,
};

StarRating.defaultProps = {
    width: "0",
};
export default StarRating;