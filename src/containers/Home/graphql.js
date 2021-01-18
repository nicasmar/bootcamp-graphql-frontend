/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

export const ALL_AUTHORS = gql`
    query allAuthors {
    allAuthors {
        firstName
        lastName
        age
        email
        books {
            title
        }
    }
}
`
export const ADD_AUTHOR = gql`
    mutation addAuthor ($input: addAuthorInput!) {
    addAuthor (input: $input) {
        firstName
        lastName
        age
        email
    }
}
`
export const DELETE_AUTHOR = gql`
    mutation deleteAuthor ($input: deleteAuthorInput!) {
    deleteAuthor (input: $input) {
        firstName
        lastName
    }
}
`
