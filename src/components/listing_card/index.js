import React from "react";
import Avatar from "../avatar";
import get from "lodash.get";
import { starWidth, isOpen } from "../../fetch/starLength"
import StarRating from "../star_rating";
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
} from "../styles"

const ListingCard = ({ listing }) => (
  <CardWrapper>
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

export default ListingCard;
