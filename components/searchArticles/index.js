import React, { useState } from 'react'

import {
  CardList,
  SearchButton,
  Label,
  Input,
  Item,
  SearchItem,
  Abstract
} from './styled'

export default function SearchArticles() {
  const [query, setQuery] = useState('')
  const [articles, setArticles] = useState([])
  const handleSearch = async (e) => {
    e.preventDefault()

    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=z9mOsrys9iDC3Abbq9vKcQoG7D3eq2KJ`

    try {
      const res = await fetch(url)
      const data = await res.json()
      const results = data.response.docs
      setArticles(results)
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
              <Abstract>{article.abstract}</Abstract>
            </Item>
          )
        })}
      </CardList>
    </React.Fragment>
  )
}
