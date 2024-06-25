import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, authUrl } from "../firebase/database";

const headers = {
  "Content-Type": "application/json",
};

const createAuthQuery = (url, method, body) => ({
  url: `${url}?key=${apiKey}`,
  method,
  body,
  headers,
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: authUrl }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (auth) => createAuthQuery("v1/accounts:signUp", "POST", auth),
    }),
    login: builder.mutation({
      query: (auth) =>
        createAuthQuery("v1/accounts:signInWithPassword", "POST", auth),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
