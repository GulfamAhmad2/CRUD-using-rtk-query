import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://65004eb118c34dee0cd4b001.mockapi.io/users' }),
    tagTypes: ['post', 'del', 'edit'],
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => ({
                url: '/',
                method: 'GET',
            }),
            providesTags: ['post', 'del', 'edit']
        }),
        postData: builder.mutation({
            query: (data) => ({
                url: '/',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: data
            }),
            invalidatesTags:['post']
        }),
        deleteData:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:['del']
        }),
        editData:builder.mutation({
            query:(editData)=>{
                return(
                    {
                        url:`/${editData.id}`,
                        method:'PUT',
                        headers:{
                            'Content-type': 'application/json',
                        },
                        body:editData
                    }
                )
            },
            invalidatesTags:['edit']
        })

    })

})

export const { useGetDataQuery, usePostDataMutation, useDeleteDataMutation, useEditDataMutation } = fetchApi;


