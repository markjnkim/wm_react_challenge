// ./**tests**/reducer_test.js
import reducer from './listing'
// import {initialState} from '../src/redux/reducer'


describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle DETAIL_SELECTED', () => {
   
    expect(
      reducer({
        listing: {
          selectedListing: null
        },
        location: {
          isLocation: false,
          location: null,
          regions: null,
        },
        dispatch: jest.fn(),
      },
      {
        type: 'DETAIL_SELECTED'
      })
    ).toMatchSnapshot()
  })

  
})