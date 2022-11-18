import axios from "axios";
import { searchResponseInterface } from "../util/interface"
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
    console.log(error);
    return {
      success: false,
      data: {},
      message: "something went wrong"
    }
  }
};