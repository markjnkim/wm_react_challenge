import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Home } from '../components/pages/Home';
    
describe('App', () => {
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
    const wrapper = shallow(<App {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
describe('>>>H O M E --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const output = 10;

  beforeEach(() => {
    wrapper = shallow(<Home output={output} />)

  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('+++ contains output', () => {
    expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
  });

});