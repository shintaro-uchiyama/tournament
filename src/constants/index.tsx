export const ENTRY_TOURNAMENT = 'ENTRY_TOURNAMENT';
export type ENTRY_TOURNAMENT = typeof ENTRY_TOURNAMENT;
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export type HANDLE_INPUT_CHANGE = typeof HANDLE_INPUT_CHANGE;
import gql from "graphql-tag";

export const GET_TOURNAMENTS = 'GET_TOURNAMENTS';
export type GET_TOURNAMENTS = typeof GET_TOURNAMENTS;

export const TOURNAMENTS_QUERY = gql`
  {
    tournaments {
      id
      subtitle
      date
      image
      description
    }
  }
`;

const Env = () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      env: {
        graphqlUrl: "http://tournament.local/graphql",
      }
    }
  } else if (process.env.NODE_ENV === 'production') {
    return {
      env: {
        graphqlUrl: "https://api.ucwork.xyz/graphql",
      }
    }
  } else {
    return {
      env: {
        graphqlUrl: "http://tournament.local/graphql",
      }
    }
  }
}

export const env = Env().env