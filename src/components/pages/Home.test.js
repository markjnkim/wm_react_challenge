import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import * as actions from '../../actions';
import { Home } from './Home';
import { LocateButton } from '../styles';
import * as coords from '../../__test__/mocks/coord-mock.json'


describe('Home', () => {
  it('renders without crashing given the required props', () => {
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
    const wrapper = shallow(<Home {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // it('sets the selectedSubreddit prop as the `value` prop on the Picker component', () => {
  //   const props = {
  //     listing: {
  //       selectedListing: null
  //     },
  //     location: {
  //       isLocation: false,
  //       location: null,
  //       regions: null,
  //     },
  //     dispatch: jest.fn(),
  //   }
  //   const wrapper = shallow(<App {...props} />)
  //   // Query for the Picker component in the rendered output
  //   const PickerComponent = wrapper.find(Picker)
  //   expect(PickerComponent.props().value).toBe(props.selectedSubreddit)
  // })

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

  })

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

  })


})
{/* // // describe('>>>H O M E --- Shallow Render REACT COMPONENTS', () => {
// //   let wrapper;
// //   const output = 10;

// //   beforeEach(() => {
// //     wrapper = shallow(<Home output={output} />)

// //   })

// //   it('+++ render the DUMB component', () => {
// //     expect(wrapper.length).toEqual(1)
// //   });

// //   it('+++ contains output', () => {
// //     expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
// //   });

// // }); */}