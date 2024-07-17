import Link from 'next/link'

import Greeting from '../components/greeting'
import Header from '../components/header'
import Server from '../components/server'

export default function Test() {
    return <>
        <Header>
            {/*
                A server component can only be passed to a client component as a child.
                You cannot directly import a server component into a client component.
            */}
            <Server />
        </Header>
        <h2>------ Testing (page.js)</h2>
        <Greeting showSetGreeting />
        <Link href='/page2'>Go To Page 2</Link>
    </>
}
