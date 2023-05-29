import { create } from "apisauce";

const baseUrl = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/";

const api = create({
  baseURL: baseUrl,
});

export const GetUsers = async () => {
  const result = await api.get(`/users`);
  return result;
};
