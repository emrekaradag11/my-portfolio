import '../assets/styles/style.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from './../store/';
import MobileFixed from '../components/MobileFixed';

export default function App({ Component, pageProps }: AppProps) {
  return  <Provider store={store} >
            <Component {...pageProps} />
            <MobileFixed />
          </Provider>
  
}
