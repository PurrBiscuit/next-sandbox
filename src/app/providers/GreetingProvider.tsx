'use client'

interface GreetingContext {
    greeting: string;
    setGreeting: (greeting: string) => void;
}

import { createContext, useContext, useState } from 'react';

export const GreetingContext = createContext<GreetingContext>(null!);

const greetingKey = 'greeting';

export const GreetingProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [greeting, setGreeting] = useState(localStorage.getItem(greetingKey) || 'Hello World');

    const setGreetingAndStore = (greeting: string) => {
        setGreeting(greeting);
        localStorage.setItem(greetingKey, greeting);
    }

    return (
        <GreetingContext.Provider value={{ greeting, setGreeting: setGreetingAndStore }}>
            {children}
        </GreetingContext.Provider>
    )
}

export const useGreeting = () => {
    return useContext(GreetingContext);
}
