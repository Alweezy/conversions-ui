import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { store } from '../../src/state';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
