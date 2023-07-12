import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PageComposer } from 'Components/PageComposer/PageComposer'


export const App = ({ Component, pageProps }: AppProps) => {
  return <PageComposer><h1>Title</h1></PageComposer>
};

export default App;
