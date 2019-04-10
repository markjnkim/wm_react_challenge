import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import get from "lodash.get";
import Avatar from "../avatar";
import { starWidth } from "../../helper/conversion";
import logo from '../../assets/logo.png';
import StarRating from "../star_rating";
import response from '../../helper/readmeObj';
import {
  DIV1,
  DIV3,
  DivWrapperDetail,
  AppWrapperDetail,
  DetailHeader,
  DIVNAME,
  SpanRatingDetail,
  AvatarWrapperDetail,
  CardWrapperDetail,
  SpanOpen,
  SpanClosed,
  Footer,
  BFooter,
  DivCity,
  LinkTag,
  Stars,
} from "../styles";

const ListingDetail = (props) => {
  // const ListingDetail = ({listing}) => {
  const { listing } = response;
  console.log(listing)
  return (
    <AppWrapperDetail>
      <DetailHeader>
        <DIVNAME>
          {listing.name}
            <Stars>
              <StarRating width={starWidth(listing.rating)} />
              <SpanRatingDetail>{listing.rating.toFixed(1)}</SpanRatingDetail>
            </Stars>
        </DIVNAME>
        <AvatarWrapperDetail>
          <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
        </AvatarWrapperDetail>
      </DetailHeader>
      <CardWrapperDetail>
        <DivWrapperDetail>
          <DivCity> {listing.city}, {listing.state} |  {Math.floor(listing.distance)}mi </DivCity>
          <br />
          <DIV1> {listing.name} </DIV1>
          <DivCity>{listing.type && (<p> Business Type: {listing.type}</p>)}</DivCity>
          <DivCity>{listing.license_type && (<p>License: {listing.license_type}</p>)}</DivCity>
          <LinkTag>{listing.website && (<a href={listing.website}>{listing.website}</a>)}</LinkTag>
          <DivCity>{listing.todays_hours_str && (<p> Today's Hours: {listing.todays_hours_str}</p>)}
          </DivCity>
          <div>
            {listing.open_now ? <SpanOpen>NOW OPEN</SpanOpen> : <SpanClosed>CLOSED</SpanClosed>}
          </div>
        </DivWrapperDetail>
      </CardWrapperDetail >
      <Footer />
      <BFooter><img src={logo} alt="weedmaps logo" /></BFooter>
    </AppWrapperDetail>
  );
};

const mapStateToProps = (state) => {
  return { listing: state.listing.selectedListing }
}

ListingDetail.propTypes = {
  listing: PropTypes.object,
};

ListingDetail.defaultProps = {
  listing: {},
};
export default connect(mapStateToProps)(ListingDetail);


//avatar_image: {small_url: "https://images.weedmaps.com/dispensaries/000/052/773/avatar/square_fill/1524528901-gblogo.png", original_url: "https://images.weedmaps.com/dispensaries/000/052/773/avatar/original/1524528901-gblogo.png"}
// city: "San Diego"
// distance: 6.281391175384616
// feature_order: 1
// id: 52773
// license_type: "recreational"
// name: "Goldn Bloom"
// online_ordering: {enabled_for_pickup: true, enabled_for_delivery: false}
// package_level: "listing_plus"
// rating: 4.57801857585139
// region_id: 639
// retailer_services: ["storefront"]
// slug: "goldn-bloom"
// state: "CA"
// static_map_url: "https://staticmap.weedmaps.com/static_map/13/32.714018/-117.121234/402/147/map.png"
// type: "dispensary"
// wmid: 710608578