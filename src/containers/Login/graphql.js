/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

const LOGIN = gql`
    mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user {
            email
            id
            }
            token
        }
    }
`
export default LOGIN
