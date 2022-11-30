import axios from "axios";
import { searchResponseInterface } from "../util/interface"
// below token is added to override usage limit
// not recommended for production for that proper sign in or auth token process creation is advised
axios.defaults.headers.common['Authorization'] = 'Bearer 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' // for all requests

export const get = async (url : string) => {
  try {
    let res:searchResponseInterface = await axios.get(url);
    if(res && res.data && res.data.total_count > 0) {
      return {
        success: true,
        data: res.data,
        message: "successfully fetch results",
      };
    } else {
      return {
        success: false,
        data: {},
        message: "No results found"
      }
    }
  } catch (error) {
    return {
      success: false,
      data: {},
      message: "something went wrong"
    }
  }
};