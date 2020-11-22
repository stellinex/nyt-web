import { useRouter } from 'next/router'
import { Card, NextLink, Title, Container, Main, Footer } from '../../styles/styled'
import Head from 'next/head'

export default function ArticleFromSearch() {
  const router = useRouter()
  const { id } = router.query
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

        <h1>{JSON.parse(sessionStorage.getItem(id)).headline.print_headline}</h1>
        <span>{JSON.parse(sessionStorage.getItem(id)).byline.original}</span>
        <p>{JSON.parse(sessionStorage.getItem(id)).abstract}</p>
      </Main>

      <Footer>Created by Phollawat Attasukvattana</Footer>
    </Container>
  )
}
