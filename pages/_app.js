import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "../redux/store";

const GlobalStyles = createGlobalStyle`
body{
  background-color:#f0f0f0;
  padding:0;
  margin:0;
  font-family:Poppins,sans-serif;
}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
