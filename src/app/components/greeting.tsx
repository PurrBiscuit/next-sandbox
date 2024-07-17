'use client'

import { useState } from 'react';

import { useGreeting } from '../providers/GreetingProvider';

export default function Greeting({ showSetGreeting }: { showSetGreeting?: boolean }) {
    const { greeting, setGreeting } = useGreeting();
    const [ newGreeting, setNewGreeting ] = useState('');

    return (
        <>
            <h1 style={{ color: 'red', marginBottom: '1rem', marginTop: '1rem', }}>New Greeting is -> {greeting}</h1>

            {showSetGreeting &&
                <form style={{ marginTop: '1rem' }}>
                    <input style={{ color: 'black' }} type="text" value={newGreeting} onChange={event => { setNewGreeting(event.target.value) }} />
                    <button style={{backgroundColor: 'grey', marginLeft: '1rem'}} onClick={event => {
                        event.preventDefault()
                        setGreeting(newGreeting)
                    }}>Set New Greeting</button>
                </form>
            }
        </>
    )
}