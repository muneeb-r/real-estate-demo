import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const fetchNews = async (page = null) => {
    try {
      setLoading(true)
      let url = 'https://newsdata.io/api/1/latest?apikey=pub_81adcd53d2054cf2a9519018e3f08e97&q=US%20Election&prioritydomain=top'
      
      if (page) {
        url += `&page=${page}`
      }
      
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      setNews(data.results || [])
      setNextPage(data.nextPage || null)
      setTotalResults(data.totalResults || 0)
      setError(null)
    } catch (err) {
      setError(err.message)
      setNews([])
    } finally {
      setLoading(false)
    }
  }

  const loadNextPage = async () => {
    if (!nextPage) return
    
    try {
      setLoading(true)
      const url = `https://newsdata.io/api/1/latest?apikey=pub_81adcd53d2054cf2a9519018e3f08e97&q=US%20Election&prioritydomain=top&page=${nextPage}`
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setNews(prevNews => [...prevNews, ...(data.results || [])])
      setNextPage(data.nextPage || null)
      setCurrentPage(prev => prev + 1)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const resetToFirstPage = () => {
    setCurrentPage(1)
    setNews([])
    fetchNews()
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const NewsCard = ({ article }) => (
    <div className="news-card">
      {article.image_url && (
        <img src={article.image_url} alt={article.title} className="news-image" />
      )}
      <div className="news-content">
        <h3 className="news-title">{article.title}</h3>
        <p className="news-description">{article.description}</p>
        <div className="news-meta">
          <span className="news-source">{article.source_id}</span>
          <span className="news-date">
            {new Date(article.pubDate).toLocaleDateString()}
          </span>
        </div>
        {article.link && (
          <a 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  )

  return (
    <div className="app">
      <header className="app-header">
        <h1>US Election News</h1>
        <div className="header-controls">
          <div className="page-info">
            Page {currentPage} {totalResults > 0 && `• ${news.length} of ${totalResults} articles`}
          </div>
          <button onClick={resetToFirstPage} className="refresh-btn" disabled={loading}>
            {loading ? 'Loading...' : 'Refresh News'}
          </button>
        </div>
      </header>

      <main className="news-container">
        {loading && <div className="loading">Loading news...</div>}
        
        {error && (
          <div className="error">
            <p>Error fetching news: {error}</p>
            <button onClick={fetchNews}>Try Again</button>
          </div>
        )}

        {!loading && !error && news.length === 0 && (
          <div className="no-news">No news articles found.</div>
        )}

        <div className="news-grid">
          {news.map((article, index) => (
            <NewsCard key={article.article_id || index} article={article} />
          ))}
        </div>

        {!loading && nextPage && (
          <div className="pagination-controls">
            <button onClick={loadNextPage} className="load-more-btn">
              Load More Articles
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
