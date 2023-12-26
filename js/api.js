async function search(text) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
  );
  return response.json();
}
