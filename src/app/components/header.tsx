"use client"

export default function Header({ children }: {children?: React.ReactNode}) {
    return <>
        <h1>--- Hello There from the Header Component (a client component)</h1>
        {children}
    </>
}
