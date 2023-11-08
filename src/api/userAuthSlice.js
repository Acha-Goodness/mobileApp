import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = process.env.BASE_URL;

export const userSlice = createApi({
    reducerPath:"userSlice",
    baseQuery: fetchBaseQuery({baseUrl: "https://reqres.in"}),
    tagTypes:["Users"],
    endpoints: ( builder ) => ({

        getUsers: builder.query({
            query: () => `/api/users/${id}`,
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
        })


    })
})

export const {
    useGetUsersQuery,
    useSignUpMutation,
    useLoginMutation,
} = userSlice;