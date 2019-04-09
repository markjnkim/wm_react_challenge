import React from "react";
import { connect } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
import get from "lodash.get";
import Avatar from "../avatar";
import { starWidth, isOpen } from "../../fetch/starLength";
import StarRating from "../star_rating";
import { selectList } from "../../actions";
import {
  DIV1,
  DIV2,
  DIV3,
  DIVO,
  SPAN,
  SpanRating,
  DivWrapper,
  CardWrapper,
  AvatarWrapper,
} from "../styles";

const ListingCard = props => (
  <CardWrapper onClick={()=> props.selectList(props.listing)}>
    <AvatarWrapper>
      <Avatar img={`${get(props.listing, "avatar_image.small_url")}`} />
    </AvatarWrapper>
    <DivWrapper>
      <DIV2> {props.listing.city}, {props.listing.state} |  {Math.floor(props.listing.distance)}mi <SPAN>{isOpen(props.listing, new Date())}</SPAN></DIV2>
      <DIV1> {props.listing.name} </DIV1>
      <DIV3> 
      <StarRating width={starWidth(props.listing.rating)} />
        <SpanRating>{props.listing.rating.toFixed(1)}</SpanRating>
       </DIV3>
       <DIVO>{isOpen(props.listing, new Date())}</DIVO>
    </DivWrapper>
  </CardWrapper>
);

const mapStateToProps = state => {
  console.log( "MSTP LC: ", state);
  return { selectedDetail: state.selectedDetail };
};

// export default ListingCard;
export default connect(mapStateToProps, { selectList })(ListingCard);