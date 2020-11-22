import { useRouter } from 'next/router'
import { Card, NextLink, Title, Container, Main, Footer } from '../../styles/styled'
import Head from 'next/head'

export default function Article() {
  const router = useRouter()
  const { id } = router.query
  console.log('X', router)
  console.log(sessionStorage.getItem(id))
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

        <h1>{JSON.parse(sessionStorage.getItem(id)).title}</h1>
        <p>{JSON.parse(sessionStorage.getItem(id)).abstract}</p>
      </Main>

      <Footer>Created by Phollawat Attasukvattana</Footer>
    </Container>
  )
}
