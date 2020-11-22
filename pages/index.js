import Head from 'next/head'
import { useState, useEffect } from 'react'
import {
  Card,
  NextLink,
  Title,
  Container,
  Main,
  Footer,
  List,
  Article,
  Content,
  PopularContent,
  SearchContent,
  PeriodSelector,
  Selector
} from '../styles/styled'
import SearchArticles from '../components/searchArticles'
import PopularArticles from '../components/popularArticles'

export default function Home() {
  const [allArticles, setAllArticles] = useState([])
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')
  const [period, setPeriod] = useState('1day')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // useEffect(() => {
  //   if (search) {
  //     const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=z9mOsrys9iDC3Abbq9vKcQoG7D3eq2KJ`
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setData(data))
  //   }
  // }, [search])

  const allList = data && data.response.docs

  return (
    <Container>
      <Head>
        <title>New York Times - Most Popular</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <Title>New York Times</Title>

        {/* <NextLink href='/detail'>
          <Card>Detail &rarr;</Card>
        </NextLink> */}

        <Content>
          <PopularContent>
            <PeriodSelector>
              Most Viewed by
              <Selector onClick={() => setPeriod('1day')}>1 day</Selector>
              <Selector onClick={() => setPeriod('7days')}>7 days</Selector>
              <Selector onClick={() => setPeriod('30days')}>30 days</Selector>
            </PeriodSelector>
            <PopularArticles period={period} />
          </PopularContent>
          <SearchContent>
            <SearchArticles />
          </SearchContent>
        </Content>
      </Main>

      <Footer>Created by Phollawat Attasukvattana</Footer>
    </Container>
  )
}
