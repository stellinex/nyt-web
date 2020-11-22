import React, { useState } from 'react'
import Link from 'next/link'

import {
  CardList,
  SearchButton,
  Label,
  Input,
  Item,
  ReadMore,
  SearchItem
} from './styled'

export default function SearchArticles() {
  // states - input query, article
  const [query, setQuery] = useState('')
  const [articles, setArticles] = useState([])
  const handleSearch = async (e) => {
    e.preventDefault()

    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=z9mOsrys9iDC3Abbq9vKcQoG7D3eq2KJ`

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.response.docs)
      const results = data.response.docs
      results.map((result) => {
        const { _id } = result
        const id = _id.slice(-8, -1)
        sessionStorage.setItem(id, JSON.stringify(result))
      })

      setArticles(data.response.docs)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSearch}>
        <Label>Search</Label>
        <Input
          type='text'
          name='query'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton type='submit'>Go</SearchButton>
      </form>
      <CardList>
        {articles.map((article) => {
          return (
            <Item key={article._id}>
              <SearchItem>{article.headline.main}</SearchItem>
              <Link href={`/article-from-search/${article._id.slice(-8, -1)}`}>
                <ReadMore>Read more</ReadMore>
              </Link>
            </Item>
          )
        })}
      </CardList>
    </React.Fragment>
  )
}
