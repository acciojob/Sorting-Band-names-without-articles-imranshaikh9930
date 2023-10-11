
const bandNames = [
  'The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'
];
function sortBandNames(bandNames) {
  return bandNames.sort((a, b) => {
      const articles = /^(a |an |the )/i;
      const nameA = a.replace(articles, "");
      const nameB = b.replace(articles, "");
      return nameA.localeCompare(nameB);
  });
}

// Get the ul element
const ulElement = document.getElementById('band');

// Sort and display the band names
const sortedBandNames = sortBandNames(bandNames);
for (const name of sortedBandNames) {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
}