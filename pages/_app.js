import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "../redux/store";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body{
  padding:0;
  margin:0;
  font-family:Roboto, sans-serif;
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
