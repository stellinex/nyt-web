import { useRouter } from 'next/router'
import { Card, NextLink, Title, Container, Main, Footer } from '../../styles/styled'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Article() {
  const router = useRouter()
  const { id } = router.query
  const [article, setArticle] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setArticle(JSON.parse(window.localStorage.getItem(id)))
    }
  }, [])

  return (
    <Container>
      <Head>
        <title>New York Times - Most Popular</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <Title>New York Times - Most Popular</Title>

        <NextLink href='/'>
          <Card>Home &rarr;</Card>
        </NextLink>

        {article && <h1>{article.title}</h1>}
        {article && <p>{article.abstract}</p>}
      </Main>

      <Footer>Created by Phollawat Attasukvattana</Footer>
    </Container>
  )
}
