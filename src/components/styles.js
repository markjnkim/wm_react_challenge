import styled from "styled-components";


export const AppHeader = styled.div`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;

  img {
    width: 110px;
    height: 25px;
  }
`;

export const AppWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  background-color: #EAEAEA;
  min-width: 450px !important;
`;

export const Icon = styled.div`
  // padding-top: 40px;
  // margin-top: 10px;
  display: inline-block;
  // align: bottom;
  position: absolute:
  bottom: 0px;
`;

export const AppContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 10px auto;
`;

export const ListingGroups = styled.div`
  margin-top: 30px;
  h2 {
    text-align: left;
  }
`;

export const HeroSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e5e4e4;
  padding: 0 0 16px;

  h2 {
    font-weight: 300;
    color: #a4a2a2;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
`;

export const LocationSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 80px;
`;

export const TextContent = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  text-align: left;
  color: #a4a2a2;
  line-height: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const LocateButton = styled.a`
  width: 105px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid #c2baba;
  color: #7e7979;
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;

  svg {
    margin-right: 5px;
  }
`;

export const CardStyle = styled.div`
  // margin: 4px;
  // padding: 3px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const DIV1 = styled.div`
  text-align: left;
  margin-left: 7px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 12px !important;
  }
`;

export const DIV2 = styled.div`
  margin: 4px;
  padding: 3px;
  color: grey;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 10px !important;
  }
`;

export const DIV3 = styled.div`
  margin: 4px;
  padding: 3px;
  color: grey;
`;

export const DivWrapper = styled.div`
  margin: 4px;
  padding: 3px;
  order: 2;
  @media (max-width: 700px) {
    order: 1;
    float: left;
  }
`;

export const CardWrapper = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 0;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
  }
  // @media (max-width: 600px) {
  //   width: 92%;
  // }
  // @media (max-width: 500px) {
  //   width: 99%;
  // }
`;

export const AvatarWrapper = styled.div`
  vertical-align: bottom;
  padding: 1%;
  order: 1;
  @media (max-width: 500px) {
    padding-bottom: 19px;
  }
`;

export const SpanRating = styled.span`
  color: grey;
  padding-left: 5px;
  font-size: 13px;
  
  @media (max-width: 700px) {
    order: 2;
  }
`;
export const SPAN = styled.span`
  color: #12C3A0;
  @media (max-width: 700px) {
    order: 3;
    display: none;
  }
`;

export const DIVO = styled.div`
  color: #12C3A0;
  display: none;
  @media (max-width: 700px) {
    order: 4;
    position: relative;
    display: block;
    padding-left: 10px;
    font-size: 11px;
  }
`;

export const DetailHeader = styled.div`
  height: 230px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;
  clearfix: auto;

  img {
    width: 210px;
    height: 225px;
  }
`;

export const DIVNAME = styled.div`
text-align: left;
margin-left: 7px;
font-weight: bold;
font-size: 3vw;

@media (max-width: 600px) {
  font-size: 12px !important;
}
`;

export const SpanRatingDetail = styled.span`
  color: #12C3A0;
  padding-left: 5px;
  font-size: 3vw;
  
  @media (max-width: 700px) {
    order: 2;
  }
`;

export const AppWrapperDetail = styled.div`
  margin-bottom: 20px;
  text-align: center;
  background-color: #EAEAEA;
  min-width: 450px !important;
  height: 100%;
  min-height: 600px;
`;