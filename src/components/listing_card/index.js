import React from "react";
import { isWithinRange, getTime, getDay } from "date-fns";
import Avatar from "../avatar";
import get from "lodash.get";
import {
  DIV1,
  DIV2,
  DIV3,
  DivWrapper,
  CardWrapper,
  AvatarWrapper,
} from "../styles"

const isOpen = (time) => {
  // console.log("time:", getTime(time));
  const bizHours = {
    0: {
      open: {listing.business_hours.sunday.open},
      close: {listing.business_hours.sunday.close},
    },
  };

  if (isWithinRange(

  )) {
    return 'OPEN NOW';
  }
  return 'CLOSED';
}



const ListingCard = ({ listing }) => (
  <CardWrapper>
    <AvatarWrapper>
      <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    </AvatarWrapper>
    <DivWrapper>
      <DIV2> {listing.city}, {listing.state} | {Math.floor(listing.distance)}mi {isOpen(Date.now())}</DIV2>
      <DIV1> {listing.name} </DIV1>
      <DIV3> {listing.rating} </DIV3>
    </DivWrapper>

  </CardWrapper>
);

export default ListingCard;
