import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { locate } from '../../actions';
import data from '../../fetch/locObj'
import logo from '../../assets/logo.png';
import ListingCards from '../listing_cards';
import Locate from '../../icons/locate';
import MapPin from '../../icons/map-pin';
import Delivery from '../../icons/delivery';
import Dispensary from '../../icons/dispensary';
import Doctor from '../../icons/doctor';
import {
  AppHeader,
  AppWrapper,
  AppContent,
  ListingGroups,
  HeroSection,
  ContentContainer,
  LocationSection,
  TextContent,
  LocateButton,
  CardStyle,
} from '../styles';

const regionTypes = ['delivery', 'dispensary', 'doctor'];
const regionLabels = {
  delivery: <span><Delivery fill={'#7e7979'} width={'40px'} height={'25px'} />  Delivery Services</span>,
  dispensary: <span><Dispensary fill={'#7e7979'} width={'40px'} height={'25px'} />  Dispensary Storefronts </span>,
  doctor: <span><Doctor fill={'#7e7979'} width={'40px'} height={'25px'} />  Doctors</span>,
};

export class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor: ", this.props)
    this.state = {
      loadingTimer: 0,
    };
  }
  componentDidMount() {
    // this.props.requestLectures(this.props.isLoading);

    console.log("CDM: ", this);
  }
  locateMe() {
  const { dispatch } = this.props;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        dispatch(locate(position.coords));
      });
    }
  };

  render() {
    const { isLocating, location, regions, error } = data.data;
    console.log("Props Location: ", location)
    
    const getLabel = (listings, label) => {
      if (get(listings, 'listings').length) {
        return (
          <div key={label}>
            <strong> {label} </strong>
          </div>
        );
      }
      return <div />;
    };

    return (
      <AppWrapper>
        <AppHeader>
          <img src={logo} alt="weedmaps logo" />
        </AppHeader>
        <HeroSection>
          <ContentContainer>
            <LocationSection>
              <h2>
                <MapPin fill={'#7e7979'} width={'60px'} height={'40px'} />
                <span> {location ? location.name : ''} </span>
                <span> {isLocating && !location ? '...locating' : ''} </span>
              </h2>
              <LocateButton onClick={this.locateMe.bind(this)}>
                <Locate fill={'#7e7979'} />
                <span> Locate Me </span>
              </LocateButton>
            </LocationSection>
            <TextContent>
              Lorem Ipsum dolor sit amet, consectetur adispiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aligqua. Ut
              enim ad minim veniam, quis.
            </TextContent>
          </ContentContainer>
        </HeroSection>
        <AppContent>
          {error && <div> {error.message} </div>}
          {regions && (
            <React.Fragment>
              {regionTypes.map(regionType => (
                <ListingGroups key={regionType}>
                  <h2>
                    {getLabel(regions[regionType], regionLabels[regionType])}
                  </h2>
                  <CardStyle>
                    <ListingCards
                      listings={get(regions[regionType], 'listings')}
                    />
                  </CardStyle>
                </ListingGroups>
              ))}
            </React.Fragment>
          )}
          {/* } */}
        </AppContent>
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("MSTP :", state);
  return { location: state.location };
}


App.propTypes = {
  isLocating: PropTypes.bool.isRequired,
  location: PropTypes.object,
  regions: PropTypes.object,
  dispatch: PropTypes.any,
  error: PropTypes.object,
};

App.defaultProps = {
  isLocating: false,
  location: {},
  regions: {},
  error: {},
};

export default connect(mapStateToProps)(App);
