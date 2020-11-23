import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import _ from 'lodash'
import {
  Container,
  Section,
  Abstract,
  List,
  Item,
  ByLine,
  ReadMore,
  Group,
  Title
} from './styled'

export default function PopularArticles({ period }) {
  const [results, setResults] = useState([])
  useEffect(async () => {
    const setPeriod = (period) => {
      switch (period) {
        case '30days':
          return '30'
        case '7days':
          return '7'
        default:
          return '1'
      }
    }

    const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${setPeriod(
      period
    )}.json?api-key=z9mOsrys9iDC3Abbq9vKcQoG7D3eq2KJ`

    try {
      const res = await fetch(url)
      const data = await res.json()
      data.results.map((result) => {
        const { id } = result
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(id, JSON.stringify(result))
        }
      })
      setResults(Object.entries(_.groupBy(data.results, 'section')))
    } catch (err) {
      console.error(err)
    }
  }, [period])

  return (
    <Container>
      {results.map((result) => {
        const [section, list] = result
        return (
          <Group key={section}>
            <List>
              <Section>{section}</Section>
              {list.map((item, i) => (
                <Item key={i}>
                  <Title>{item.title}</Title>
                  <Link href={`/article/${item.id}`}>
                    <ReadMore>Read more</ReadMore>
                  </Link>
                </Item>
              ))}
            </List>
          </Group>
        )
      })}
    </Container>
  )
}
