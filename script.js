// Get all manga list API URL
const API_URL = 'https://manga-scrapper-for-asura-scans-website.p.rapidapi.com/'

// RapidAPI request options
const REQUEST_OPTIONS = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "manga-scrapper-for-asura-scans-website.p.rapidapi.com",
        "x-rapidapi-key": "6e6744b5dcmshf6d3910e25d2d61p16e159jsn03f75d031805"
    }
}

// Button click handler
const onClickFetchChapterImages = () => {
    // Getting manga title and chapter title element
    const mangaTitle = document.getElementById('manga-title').textContent
    const chapterTitle = document.getElementById('chapter-title').textContent

    // Calling back the API and passing the result with displayResult as a callback function
    return fetchChapterImages(mangaTitle, chapterTitle, displayResult)
}

// Call the API to get manga chapter list data
const fetchChapterImages = (mangaTitle, chapterTitle, callback) => {
    // Encoding manga title and chapter title for URI format
    const mangaTitleFormatted = encodeURIComponent(mangaTitle)
    const chapterTitleFormatted = encodeURIComponent(chapterTitle)

    // GET request to the server
    fetch(`${API_URL}${mangaTitleFormatted}/${chapterTitleFormatted}`, REQUEST_OPTIONS)
        // Return the data from the server
        .then(response => {
            return response.json()
        })
        // Calling a callback function with data from the server
        .then(jsonData => callback(jsonData))
        // Show an alert if there is any error
        .catch(err => {
            alert('API Could not be reached at this time')
            console.error(err)
        })
}

// Make the fetched data displayed in front end
const displayResult = result => {
    result.forEach(item => {
        const template = `<img src="${item}">`
        document.getElementById('template').innerHTML += template
    })
}