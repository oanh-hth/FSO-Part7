import axios from "axios";
const baseUrl = "/api/blogs";

let token;
const setToken = newToken => (token = `Bearer ${newToken}`);

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const getSingleBlog = async id => {
  const res = await axios.get(`${baseUrl}/${id}`);
  return res.data;
};

const create = async newBlog => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newBlog, config);
  return response.data;
};

const update = async (id, newBlog) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(`${baseUrl}/${id}`, newBlog, config);
  return response.data;
};

const remove = async id => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response;
};

const comment = async ({ id, comment }) => {
  const response = await axios.post(`${baseUrl}/${id}/comments`, comment);
  return response.data;
};

export default {
  getAll,
  setToken,
  create,
  getSingleBlog,
  update,
  remove,
  comment,
};
