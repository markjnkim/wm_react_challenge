import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import sinon from 'sinon';

import * as actions from '../../actions';
import { Home } from './Home';
import { LocateButton } from '../styles';
import * as coords from '../../__test__/mocks/coord-mock.json';
import * as location from '../../__test__/mocks/location-mock.json';

// let [requestLocation, receiveLocation] = new Array(3).fill(jest.fn());

function shallowSetup() {
  // Sample props to pass to our shallow render
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
  // wrapper instance around rendered output
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
    // Setup wrapper and assign props.
    const { enzymeWrapper, props } = shallowSetup();
    // enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector. 
    expect(enzymeWrapper.find('span').first().text()).toBe("  ");
    expect(enzymeWrapper.containsMatchingElement(<span>props.location.name</span>)).toBe(false);
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
  //   const wrapper = shallow(<App {...props} />)
  //   // Query for the Picker component in the rendered output
  //   const PickerComponent = wrapper.find(Picker)
  //   expect(PickerComponent.props().value).toBe(props.selectedSubreddit)
  });

  it('locate button dispatches the correct actions', () => {
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
    // Mock event to be passed to the locateMe function
    const mockEvent =  {
      preventDefault: jest.fn()
    }
    // Mock the actions we expect to be called
    // let [mockEvent, actions.requestLocation, actions.receiveLocation,actions.error ] = new Array(3).fill(jest.fn());
    actions.requestLocation = jest.fn();
    actions.receiveLocation = jest.fn();
    actions.error = jest.fn();
    const spy = jest.fn();
    
    const wrapper = shallow(<Home {...props} />)
    // Call the function on the component instance, passing the mock event
  //  expect(wrapper.find(LocateButton).length).toBe(undefined);
    // expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(props.dispatch.mock.calls.length).toBe(0);
    expect(actions.requestLocation.mock.calls.length).toBe(0);
    expect(actions.receiveLocation.mock.calls.length).toBe(0);

  });

  it('locate button clicks', () => {
    // const props = {
    //   listing: {
    //     selectedListing: null
    //   },
    //   location: {
    //     isLocation: false,
    //     location: null,
    //     regions: null,
    //   },
    //   dispatch: jest.fn(),
    // }
    // Mock event to be passed to the locateMe function
    const mockEvent =  {
      preventDefault: jest.fn()
    }
    // Mock the actions we expect to be called
    // let [mockEvent, actions.requestLocation, actions.receiveLocation,actions.error ] = new Array(3).fill(jest.fn());
    // actions.requestLocation = jest.fn();
    // actions.receiveLocation = jest.fn();
    // actions.error = jest.fn();
    // const spy = jest.fn();
    
    const wrapper = shallow(<Home {...props} />)
    // Call the function on the component instance, passing the mock event
  //  expect(wrapper.find(LocateButton).length).toBe(undefined);
    // expect(mockEvent.preventDefault).toHaveBeenCalled();
    const button = wrapper.find(LocateButton);
    button.simulate('click');
    // expect(wrapper.dispatch.mock.calls.length).toBe(0);
    // expect(wrapper.instance().locateMe.toHaveBeenCaled())).;
    expect(actions.receiveLocation.mock.calls.length).toBe(0);

  });
})

describe('Home Locate Button', () => {
  let wrapper, props_;
  beforeEach(() => {
    // spy on the component handleOpen method
    sinon.spy(Home.prototype, "locateMe");
    const { enzymeWrapper, props } = shallowSetup();
    wrapper = enzymeWrapper;
    props_ = props;
  });
  afterEach(() => {
    Home.prototype.locateMe.restore();
  });
})



