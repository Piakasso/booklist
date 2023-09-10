const API_KEY = process.env.REACT_APP_API_KEY;

export const useHttp = () => {
  const request = async (searchString, pagination = 0, sort = "relevance") => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=12&orderBy=${sort}&startIndex=${pagination}&key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };

  const requestSingleBook = async (id) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request, requestSingleBook };
};
