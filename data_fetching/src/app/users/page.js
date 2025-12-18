// Parallel data fetching using Suspense in a Next.js page component
// In this we break the components
// All APIs are independent and can be fetched in parallel
// Each component handles its own data fetching and loading state
// This improves user experience by showing loading states for each part of the UI
// Depend on API response times, different parts of the UI may load at different times


import { Suspense } from "react";
import SlowResponse1 from "@/components/SlowComponent1";
import SlowResponse2 from "@/components/SlowComponent2";
import UserList from "@/components/UserList";

export default function User() {
    return (
        <>
            <h1>Users</h1>
            <Suspense fallback={<div>Loading Slow Component 1...</div>}>
                <SlowResponse1 />
            </Suspense>
            
            <Suspense fallback={<div>Loading Users...</div>}>
                <UserList />
            </Suspense>
            
            <Suspense fallback={<div>Loading Slow Component 2...</div>}>
                <SlowResponse2 />
            </Suspense>
        </>
    )
}