import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const API_KEY = "tGZE8c6wIS53mOG1pv4dLtBRnN09aoBwmJCPtzjjNCjDFgxHeth3Pvg30edCjZuw"

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: (name) => `producto/${name}`,
    }),
    getProducts: builder.query({
      query: (user => ({
        url: `productos`,
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'mode': 'cors', 
          'Access-Control-Allow-Origin': '*',
        }
      }))
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsByNameQuery, useGetProductsQuery } = productApi