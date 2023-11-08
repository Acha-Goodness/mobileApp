import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = process.env.BASE_URL;

export const userSlice = createApi({
    reducerPath:"userSlice",
    baseQuery: fetchBaseQuery({baseUrl: "https://reqres.in"}),
    tagTypes:["Users"],
    endpoints: ( builder ) => ({

        getUsers: builder.query({
            query: () => `/api/users?page=2`,
            method:"GET",
            providesTags: ["Users"],
        }),

        getUserById: builder.query({
            query: (id) => `/api/users/${id}`,
            method:"GET",
            providesTags: ["Users"],
        }),

        signUp: builder.mutation({
            query: ( payload ) => {
                return{
                    url:"/api/register",
                    method: "POST",
                    body:payload,
                    headers:{
                        "Content-type" : "application/json"
                    }
                }
            },
            invalidatesTags: ["Users"],
        }),

        login: builder.mutation({
            query: ( payload ) => {
                return{
                    url:"/api/login",
                    method: "POST",
                    body:payload,
                    headers:{
                        "Content-type" : "application/json"
                    }
                }
            },
            invalidatesTags: ["Users"]
        }),

        editUser: builder.mutation({
            query: ( payload ) => {
                // console.log( payload )
                const { id } = payload
                return{
                url: `api/users/${id}`,
                method:"PATCH",
                body: payload 
              }
            }
        })


    })
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useSignUpMutation,
    useLoginMutation,
    useEditUserMutation
} = userSlice;