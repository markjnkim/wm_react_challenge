import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { spy } from 'sinon';

import * as actions from '../../actions';
import { Home } from './Home';
import { LocateButton } from '../styles';
import * as coords from '../../__test__/mocks/coord-mock.json';
import * as location from '../../__test__/mocks/location-mock.json';

function shallowSetup() {

  const props = {
    listing: {
      selectedListing: null
    },
    location: {
      isLocating: false,
      location: location,
      regions: null,
    },
    dispatch: jest.fn(),
  }

  const enzymeWrapper = shallow(<Home {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Home', () => {
  const { enzymeWrapper, props } = shallowSetup();
  it('renders without crashing given the required props', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot()
  });

  it('should render a Home with state', () => {

    const { enzymeWrapper } = shallowSetup();
    expect(enzymeWrapper.find('span').first().text()).toBe("  ");
    expect(enzymeWrapper.containsMatchingElement(<span>location.name</span>)).toBe(false);
    expect(enzymeWrapper.containsMatchingElement(<span> Locate Me </span>)).toBe(true);
  });

  it('sets the locate prop as the `value` prop on the LocateButton component', () => {
    const props = {
      listing: {
        selectedListing: null
      },
      location: {
        isLocation: false,
        location: null,
        regions: null,
      },
      dispatch: jest.fn(),
    }

  });

  it('locate button dispatches the correct actions', () => {
    const enzymeWrapper = shallow(<Home {...props} />);

    // Mock event to be passed to the locateMe function
    const mockEvent =  {
      preventDefault: jest.fn()
    }
    actions.requestLocation = jest.fn();
    actions.receiveLocation = jest.fn();
    actions.error = jest.fn();
    const spy = jest.fn();
    
    const enzymeWrapper = shallow(<Home {...props} />)

    expect(props.dispatch.mock.calls.length).toBe(0);
    expect(actions.requestLocation.mock.calls.length).toBe(0);
    expect(actions.receiveLocation.mock.calls.length).toBe(0);

  });

  it('locate button clicks', () => {

    const mockEvent =  {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(<Home {...props} />)

    const button = wrapper.find(LocateButton);
    button.simulate('click');
    expect(actions.receiveLocation.mock.calls.length).toBe(0);

  });
})

describe('Shallow Locate Component', () => {
  let wrapper, props_;
  beforeEach(() => {
    // spy on the component handleOpen method
    spy(Home.prototype, "locateMe");
    const { enzymeWrapper, props } = shallowSetup();
    wrapper = enzymeWrapper;
    props_ = props;
  });
  afterEach(() => {
    Home.prototype.locateMe.restore();
  });
})


describe('Location coordinates test', () => {
  const { enzymeWrapper, props } = shallowSetup();
  it('renders without crashing given the required props', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot()
  });

  it('should render a Home with state', () => {
    const { enzymeWrapper, props } = shallowSetup();
    expect(enzymeWrapper.find('span').first().text()).toBe("  ");
    expect(enzymeWrapper.containsMatchingElement(<span>props.location.name</span>)).toBe(false);
    expect(enzymeWrapper.containsMatchingElement(<span>location.name</span>)).toBe(false);
    expect(enzymeWrapper.containsMatchingElement(<span> Locate Me </span>)).toBe(true);
  });
});