import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '52417651-378a9ae18bca7d74fedb43ebe'; 

export async function fetchImages(query, page = 1, perPage = 12) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    return {
      hits: response.data.hits || [],
      totalHits: response.data.totalHits || 0,
    };
  } catch (error) {
    console.error("Pixabay fetch error:", error);
    return { hits: [], totalHits: 0 };
  }
}
