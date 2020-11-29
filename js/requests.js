const BASE_URL = "http://jsonplaceholder.typicode.com";

export const PhotoQuery = {
  async getAll(limit = 15) {
    try {
      const res = await fetch(`${BASE_URL}/photos?_limit=${limit}`, {
        credentials: "include",
      });
      return res.json();
    } catch (error) {
      console.log("🚀 ~ file: requests.js ~ line 17 ~ getAll ~ error", error);
      return error;
    }
  },
  async getMore(page = 1, limit = 15) {
    try {
      const res = await fetch(`${BASE_URL}/photos?_page=${page}&_limit=${limit}`, {
        credentials: "include",
      });
      return res.json();
    } catch (error) {
      return error;
    };
  },
};