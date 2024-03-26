// const API_KEY = "3d45d5a5a6574183ab8e6f3ae279ef65",
// fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-02-25&sortBy=publishedAt&apiKey=3d45d5a5a6574183ab8e6f3ae279ef65")


let getNews = (search) => {

  fetch(`https://newsapi.org/v2/everything?q=${search}&from=2024-02-25&sortBy=publishedAt&apiKey=3d45d5a5a6574183ab8e6f3ae279ef65`)
    .then(res => res.json())
    .then(res => {
      let news = document.querySelector("#showNews")
      const articles = res.articles
      for (var i = 0; i < articles.length; i++) {
        //destructuring
        const { urlToImage, title, description } = articles[i]
        news.innerHTML += `
      <div class="card" style="width: 18rem;">
    <img src="${urlToImage}" class=" news-image card-img-top" alt="...">
    <div class="card-body ">
      <h5 class="card-title">${title.slice(0, 30)}...</h5>
      <p class="card-text">${description.slice(0,80)}...</p>
      
      </div>

  </div>
      `
        console.log(articles[i])
      }
    })
    .catch(err => console.log(err))

  }
getNews()

let newsSearch= () => {
  let search = document.querySelector("#searchInp")
  let news = document.querySelector("#showNews")
  news.innerHTML = ""
  // console.log(search.value)
  getNews(search.value)
}


