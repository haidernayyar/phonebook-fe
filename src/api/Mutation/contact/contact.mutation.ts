import { gql } from "@apollo/client";

export const ADD_CONTACT = gql`
  mutation AddContact($input: AddContactInput!) {
    addContact(input: $input) {
      _id
      firstName
      lastName
      number
    }
  }
`

export const UPDATE_CONTACT = gql`
  mutation UpdateContact($updateContactId: ID!, $input: UpdateContactInput!) {
    updateContact(id: $updateContactId, input: $input) {
      _id
      firstName
      lastName
      number
    }
  }
`

export const DELETE_CONTACT = gql`
  mutation DeleteContact($deleteContactId: ID!) {
    deleteContact(id: $deleteContactId) {
      _id
    }
  }
`