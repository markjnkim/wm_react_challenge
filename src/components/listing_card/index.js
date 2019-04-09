import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
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

const ListingCard = ({ listing, history }) => (
  <CardWrapper onClick={()=>selectList}>
    <AvatarWrapper>
      <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    </AvatarWrapper>
    <DivWrapper>
      <DIV2> {listing.city}, {listing.state} |  {Math.floor(listing.distance)}mi <SPAN>{isOpen(listing, new Date())}</SPAN></DIV2>
      <DIV1> {listing.name} </DIV1>
      <DIV3> 
      <StarRating width={starWidth(listing.rating)} />
        <SpanRating>{listing.rating.toFixed(1)}</SpanRating>
       </DIV3>
       <DIVO>{isOpen(listing, new Date())}</DIVO>
    </DivWrapper>
  </CardWrapper>
);

const mapStateToProps = state => {
  console.log( "MSTP LC: ", state);
  return { selectedDetail: state.selectedDetail };
};

// export default ListingCard;
export default connect(mapStateToProps, { selectList })(ListingCard);