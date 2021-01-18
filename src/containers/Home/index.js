/* eslint-disable linebreak-style */
import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { ALL_AUTHORS, ADD_AUTHOR, DELETE_AUTHOR } from './graphql'


const Home = () => {
  const history = useHistory()
  const token = localStorage.getItem('token')
  if (!token) {
    history.push('/')
  }

  const { data, loading, error } = useQuery(ALL_AUTHORS)
  if (error) {
    throw new Error('query failed')
  }

  // eslint-disable-next-line max-len
  const [addAuthor, { error: addAuthorError, loading: addAuthorLoading }] = useMutation(ADD_AUTHOR, {
    variables: {
      input: {
        firstName: 'Nick',
        lastName: 'Castillo',
        age: 18,
        email: 'nicasmar@gmail.com',
      },
    },
    refetchQueries: () => [{ query: ALL_AUTHORS }],
  })

  // eslint-disable-next-line max-len
  const [deleteAuthor, { error: deleteAuthorError, loading: deleteAuthorLoading }] = useMutation(DELETE_AUTHOR, {
    variables: {
      input: {
        firstName: 'Nick',
        lastName: 'Castillo',
      },
    },
    refetchQueries: () => [{ query: ALL_AUTHORS }],
  })
  return (
    <>
      <button type="button" onClick={addAuthor}>ADD AUTHOR</button>
      <button type="button" onClick={deleteAuthor}>DELETE AUTHOR</button>
      {loading ? 'loading...' : data.allAuthors.map(author => (
        <>
          <p>{author.firstName}</p>
          <p>{author.lastName}</p>
          <p>{author.age}</p>
          <p>{author.email}</p>
          {/* <p>{author.books.map(x => x.title)}</p> */}
        </>
      ))}
    </>
  )
}

export default Home
