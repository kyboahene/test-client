import gql from 'graphql-tag'

const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    email
    username
    createdAt
    token
  }
}
`;


const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;


const ADD_PROSPECT = gql`
    mutation addProspect(
        $username: String!
        $fname: String!
        $Lname: String!
        $password: String!
        $phone: String!
    ) {
        addProspect(
            prospectDetails: {
                username: $username
                fname: $fname
                Lname: $Lname
                email: $email
                phone: $phone
            }
        ){
            id
            email
            status
            createdAt
        }
    }
`;


export {
    LOGIN_USER,
    REGISTER_USER,
    ADD_PROSPECT
}
