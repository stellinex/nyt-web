import Head from 'next/head'
import { Card, NextLink, Title, Container, Main, Footer } from '../styles/styled'

export default function Detail() {
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
      </Main>

      <Footer>Created by Phollawat Attasukvattana</Footer>
    </Container>
  )
}
