import { CHANGE_INPUT, SIMPLE_SEARCH, SIMPLE_SEARCH_SUCCESS } from './types';
import { simpleSearchRequest } from './service';
import INITIAL_STATE from './state'
import axios from 'axios';
// import data from '../../data/server-sample.json'

export const changeInput = (value) => (
  {
    type: CHANGE_INPUT,
    payload: value
  }
  );

  // export const simpleSearch = async (value) => {
  //   console.log(1, value);
  //   try {
  //     const result = await simpleSearchRequest(value)
  //     return(
  //       {
  //         type: SIMPLE_SEARCH,
  //         payload: result
  //       }
  //     )
  //   } catch (error) {
  //     console.log("EXPLOSION");
  //   }
  // };

  export const simpleSearch = (value) => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
      dispatch({ type: SIMPLE_SEARCH });
      // Return promise with success and failure actions
      return axios.get("http://localhost:4000/properties?q=" + value).then(  
        properties => dispatch({ type: SIMPLE_SEARCH_SUCCESS, payload: properties.data })
      );
    };
  };