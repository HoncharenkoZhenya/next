import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC } from 'react';

import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
