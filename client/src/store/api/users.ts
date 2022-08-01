import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { usersTypes,userAndTotalTypes } from "../../types"

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/api'}),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<userAndTotalTypes,undefined>({
      // note: an optional `queryFn` may be used in place of `query`
      query: () => `/users`,
      // Pick out data and prevent nested properties in a hook or selector
      /* transformResponse: (response: { data: Post }, meta, arg) => response.data, */
     /*  providesTags: (result, error, id) => [{ type: 'Users', id }], */
      // The 2nd parameter is the destructured `QueryLifecycleApi`
   /*   async onQueryStarted(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          queryFulfilled,
          getCacheEntry,
          updateCachedData,
        }
      ) {},
      // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
          updateCachedData,
        }
      ) {},  */
    }),
  }),
})

export const { useGetUsersQuery} = usersApi