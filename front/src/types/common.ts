import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import {AxiosError} from 'axios';

type ReponseError = AxiosError<{
  statusCode: string;
  message: string;
  error: string;
}>;

type UseMutatiolnCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ReponseError, TVariables, unknown>,
  'mutationFn'
>;

type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ReponseError, TData, QueryKey>,
  'queryKey'
>;

export type {ReponseError, UseMutatiolnCustomOptions, UseQueryCustomOptions};
