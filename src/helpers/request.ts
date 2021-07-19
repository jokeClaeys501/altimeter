import * as axios from "axios";

// TODO make class

const BASE_URL =
  "https://fxloff2hbh.execute-api.eu-west-1.amazonaws.com/prod/graphql";

axios.default.defaults.baseURL = BASE_URL;

const get = async (path: string) => {
  const response = await axios.default.request({
    method: "GET",
    url: path
  });
  return response.data;
};

const post = async (path: string, body: any) => {
  const response = await axios.default.post(path, body);

  return response.data;
};

const put = async (path: string, body: any) => {
  const response = await axios.default.put(path, body);

  return response.data;
};

const del = async (path: string) => {
  const response = await axios.default.delete(path);

  return response.data;
};

const patch = async (path: string, body: any) => {
  const response = await axios.default.patch(path, body);

  return response.data;
}

export const request = {
  get,
  post,
  del,
  put,
  patch
};
