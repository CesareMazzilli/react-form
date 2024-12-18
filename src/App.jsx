import { useState } from "react";


function App() {
  const [activeArticles, setActiveArticles] = useState([]);
  const [articleTitle, setArticleTitle] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");

  const handleArticlesForm = (event) => {
    event.preventDefault()

    const newArticle = {
      id: Date.now(),
      title: articleTitle,
      author: articleAuthor
    };
    const newArray = [...activeArticles, newArticle];

    setActiveArticles(newArray)

    setArticleTitle("");
    setArticleAuthor("");
  };
  const removeElem = (toRemove) => {
    const newArray1 = activeArticles.filter((curItem) => curItem.id !== toRemove.id)
    setActiveArticles(newArray1)
  } 

  return (
    <>
      <div className="container">
        <h2>I nostri articoli</h2>
        {activeArticles.length > 0 ? (
          <div >
            {
              activeArticles.map((curItem) => (<div key={curItem.id}>
                <h4>{curItem.title}</h4>
                <p>{curItem.author}</p>
                <button onClick={() => {removeElem(curItem)}}>🗑️</button>
              </div>
              ))
            }
          </div>
        ) : (
          <p>nessun articolo inserito</p>
        )
        }

        <h2>Aggiungi articolo</h2>
        <form action="" onSubmit={handleArticlesForm}>
          <div className="mb-3">
            <label htmlFor="titolo">Inserire titolo </label>
            <input className="form-control" id="titolo" type="text" value={articleTitle} onChange={(event) => { setArticleTitle(event.target.value) }} />
          </div>

          <div>
            <label htmlFor="autore">Inserire autore</label>
            <input type="text" id="autore" className="form-control" value={articleAuthor}
              onChange={(event) => { setArticleAuthor(event.target.value) }} />
          </div>
          <button type="submit" className="btn btn-primary">Salva</button>
        </form>
      </div>
    </>
  )
}

export default App