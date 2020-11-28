const BASE_URL = "http://jsonplaceholder.typicode.com"

export const PhotoQuery = {
  async getAll(page= 1,limit = 15) {
    try {
      const res = await fetch(`${BASE_URL}/photos`, {
        credentials: "include",
      });
      return res.json()
    } catch (error) {
      return error;
    }
  },
  // async getMore(number = 15) {
  //   try {
  //     const res = await fetch(`${BASE_URL}/photos?_limit=${number}`, {
  //       credentials: "include",
  //     });
  //     return res.json();
  //   } catch (error) {
  //     return error;
  //   }
  // }
}