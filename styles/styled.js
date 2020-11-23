import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.main`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`

export const Title = styled.h1`
  margin: 0 0 18px;
  line-height: 1.15;
  font-size: 1.5rem;
  text-align: center;
`

export const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

export const NextLink = styled(Link)`
  color: #0070f3;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const List = styled.ul`
  list-style-type: none;
`
export const Article = styled.li`
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  transition: color 0.15s ease, border-color 0.15s ease;
`

export const PeriodSelector = styled.div`
  margin-bottom: 12px;
  min-width: 60px;
  margin-left: 24px;
  display: flex;
  flex-wrap: wrap;
`

export const Selector = styled.button`
  font-family: karla;
  border: 1px solid #eaeaea;
  background-color: transparent;
  margin-left: 12px;
  color: #0070f3;
  border-radius: 5px;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const PopularContent = styled.div`
  width: 60%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const SearchContent = styled.div`
  width: 40%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`
