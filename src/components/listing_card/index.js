import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import get from "lodash.get";
import Avatar from "../avatar";
import { starWidth, isOpen } from "../../helper/conversion";
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

const ListingCard = ({listing, selectList, history}) => {
    // console.log(listing, selectList, history);
  return (
  <CardWrapper onClick={() => { 
    selectList(listing);
    history.push('/detail');
  }
  }>
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
};

// const mapStateToProps = state => state.location;

ListingCard.propTypes = {
  selectedListing: PropTypes.object,
};
ListingCard.defaultProps = {
  selectedListing: {},
};
export default withRouter(connect(null, { selectList })(ListingCard));