import { gql } from '@apollo/client';

export const GET_ROCKETS = gql`
  query GetRockets($limit: Int!) {
    rockets(limit: $limit) {
      id
      name
      description
    }
  }
`;

export const GET_SINGLE_ROCKET = gql`
  query GetSingleRocket($rocketId: ID!) {
    rocket(id: $rocketId) {
      id
      name
      description
    }
  }
`;