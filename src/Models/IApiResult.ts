import { ApolloError, ApolloClient } from '@apollo/client';

export interface IApiResult {
    loading: boolean;
    error?: ApolloError;
    data: any;
    client: ApolloClient<any>;
  }
  