import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import get from "lodash.get";
// import styled from "styled-components";
import Avatar from "../avatar";
import { starWidth, isOpen } from "../../helper/starLength";
import StarRating from "../star_rating";
import response from '../../helper/readmeObj';
import {
  DIV1,
  DIV2,
  DIV3,
  DIVO,
  SPAN,
  DivWrapper,
  CardWrapper,
  AvatarWrapper,
  AppWrapperDetail,
  DetailHeader,
  DIVNAME,
  SpanRatingDetail,
} from "../styles";


const ListingDetail = (props = {}) => {
  const { listing } = response;
  console.log("listing: ", listing.name)
  return (
    <AppWrapperDetail>
      <DetailHeader>
        <DIVNAME>
          {listing.name}
          <br />
          <DIV3>
            <StarRating width={starWidth(listing.rating)} />
            <SpanRatingDetail>{listing.rating.toFixed(1)}</SpanRatingDetail>
          </DIV3>
        </DIVNAME>
        <AvatarWrapper>
          <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
        </AvatarWrapper>
      </DetailHeader>
      <CardWrapper>
        {/* <AvatarWrapper>
          <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
        </AvatarWrapper> */}
        <DivWrapper>
          <DIV2> {listing.city}, {listing.state} |  {Math.floor(listing.distance)}mi <SPAN>{isOpen(listing, new Date())}</SPAN></DIV2>
          <DIV1> {listing.name} </DIV1>
          {/* <DIV3>
            <StarRating width={starWidth(listing.rating)} />
            <SpanRating>{listing.rating.toFixed(1)}</SpanRating>
          </DIV3> */}
          <DIVO>{isOpen(listing, new Date())}</DIVO>
        </DivWrapper>
      </CardWrapper >
    </AppWrapperDetail>
  );
};

const mapStateToProps = (state) => {
  // console.log("STATE: ", state.listing.selectedListing);
  return { listing: state.listing.selectedListing }
}

ListingDetail.propTypes = {
  listing: PropTypes.object,
};

ListingDetail.defaultProps = {
  listing: {},
};
export default connect(mapStateToProps)(ListingDetail);
