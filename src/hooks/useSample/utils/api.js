import { axiosInstance } from "../../../core/utils";
import { format1 } from "./format";

const fetchSample = () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get("/api/users").then((result) => {
      console.log({
        result,
      });
      resolve(format1(result));
    });
  });
};

export { fetchSample };
