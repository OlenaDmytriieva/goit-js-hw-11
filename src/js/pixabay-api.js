export function queryPixabay(query) {
  return fetch(
    `https://pixabay.com/api/?key=42368868-12588a31d2c2b3196976be5e8&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error('Network response is not ok');
    }
    return response.json();
  });
}
