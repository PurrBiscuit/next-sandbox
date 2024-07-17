import Greeting from '../components/greeting';

export default function TestLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<>
        <h2>-- Test Nested Layout</h2>
        <Greeting />
        {children}
    </>)
}
