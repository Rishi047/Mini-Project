// src/lib/trpc.ts

// MOCK TRPC CLIENT: This structure simulates the actual tRPC client 
// so the frontend code can compile and run without a live backend API.

export const trpc = {
  // Mocks the trpc.useUtils() call
  useUtils: () => ({
    auth: {
      me: {
        // Mocking the function to update cached user data
        setData: (input: any, data: any) => { console.log("MOCK: Set auth data to:", data) },
        // Mocking the function to invalidate the query cache
        invalidate: async () => { console.log("MOCK: Invalidated auth query") },
      },
    },
  }),
  auth: {
    // Mocks trpc.auth.me.useQuery
    me: {
      useQuery: (input: any, options: any) => ({
        data: null, // Always return unauthenticated data in the mock
        isLoading: false,
        error: null,
        refetch: () => { console.log("MOCK: Refetching auth status") },
      }),
    },
    // Mocks trpc.auth.logout.useMutation
    logout: {
      useMutation: (options: any) => ({
        mutateAsync: async () => { console.log("MOCK: User logged out") },
        isPending: false,
        error: null,
      }),
    },
  },
};