import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 430px;
  overflow: auto;
  /* height: 100px; */
  /* flex-wrap: wrap; */
`

export const Group = styled.div`
  /* width: 30%; */
`

export const Section = styled.div`
  margin-left: 24px;
`

export const Title = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 400;
  font-size: 16px;
`

export const Abstract = styled.div`
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 36px; */
`

export const List = styled.div`
  /* display: flex; */
`

export const Item = styled.div`
  margin: 1rem 24px 1rem;
  padding: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 5px;
`

export const ByLine = styled.span`
  text-transform: capitalize;
  display: block;
  color: gray;
  margin-top: 4px;
`

export const ReadMore = styled.a`
  margin-top: 8px;
  font-size: 16px;
  text-transform: capitalize;
  display: inline-block;
  cursor: pointer;
  color: #0070f3;

  &:hover {
    text-decoration: underline;
  }
`
