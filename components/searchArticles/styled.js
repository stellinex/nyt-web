import styled from 'styled-components'

export const SearchButton = styled.button`
  font-family: karla;
  border: 1px solid #eaeaea;
  background-color: transparent;
  color: #0070f3;
  border-radius: 5px;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const CardList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  height: 430px;
  overflow: auto;
`

export const Label = styled.label`
  margin-right: 8px;
`

export const Input = styled.input`
  font-family: karla;
  width: 100px;
  flex-shrink: 1;
  margin-right: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled.li`
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  transition: color 0.15s ease, border-color 0.15s ease;
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

export const SearchItem = styled.span`
  display: block;
`

export const Abstract = styled.p`
  font-size: 16px;
  color: grey;
`
