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
        $phone: String!
        $email: String!
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

const ADD_DRIVER_LICENSE = gql`
  mutation addDriverLincense(
    $ProspectId: ID!, 
    $DofBirth: String!, 
    $Number: String!, 
    $State: State!
  ){
    addDriverLincense(
      ProspectId: $ProspectId
      DofBirth: $DofBirth
      Number: $Number
      State: $State
    ){
      id
      email
      driver_license{
        DofBirth
        State
        Number
      }
      user
    }
  }
`;

const GET_PROSPECT_PER_USERNAME = gql`
    query getProspectsPerUsername( $username: String!){
    getProspectsPerUsername( username: $username){
      id
      fname
      Lname
      email
      phone
      provider
      driver_license{
        DofBirth
        State
        Number
      }
      status
      user
    }
  }
`;


export {
    LOGIN_USER,
    REGISTER_USER,
    ADD_PROSPECT,
    ADD_DRIVER_LICENSE,
    GET_PROSPECT_PER_USERNAME
}
