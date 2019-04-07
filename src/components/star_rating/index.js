import React from "react";
import {
    StarWrapper,
    StarInner,
} from "../styles"

const StarInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: ${props => props.width};
    font-family: FontAwesome;

${StarInner}::before {
  content: "\f005 \f005 \f005 \f005 \f005";  
  color: #36f80b 
}
`

const StarRating = ({ width }) => (
    <StarWrapper>
        <StarInner width={width}>

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