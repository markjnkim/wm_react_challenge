import React from "react";
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

const ListingCard = ({ listing }) => (
  <CardWrapper>
    <AvatarWrapper>
    <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    </AvatarWrapper>
    <DivWrapper>
      <DIV2> {listing.city} </DIV2>
      <DIV1> {listing.name} </DIV1>
      <DIV3> {listing.rating} </DIV3>
    </DivWrapper>

  </CardWrapper>
);

export default ListingCard;
