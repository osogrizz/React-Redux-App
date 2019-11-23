import axios from 'axios';

export const SPACEX_LOAD_START = 'SPACEX_LOAD_START';
export const SPACEX_LOAD_SUCCESS = 'SPACEX_LOAD_SUCCESS';
export const SPACEX_LOAD_FAIL = 'SPACEX_LOAD_FAIL';

export const getSpaceX = () => dispatch => {
  
  // dispatch({ type: SPACEX_LOAD_START });

  axios
  .get('https://api.spacexdata.com/v3/launches/upcoming') // https://api.spacexdata.com/v3
    .then( res => {
      dispatch({
        type: SPACEX_LOAD_SUCCESS,
        payload: res.data
      })
      console.log(res.data)
    }
  )
  .catch(err => {
    console.log(err);
    dispatch({
      type: SPACEX_LOAD_FAIL,
      payload: 'error loading data'
    })
  })
  
}