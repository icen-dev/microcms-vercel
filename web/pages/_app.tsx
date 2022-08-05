import "styles/globals.css";
import { createContext, Dispatch, useState } from "react";
import type { AppProps } from "next/app";

export const AppContext = createContext(
  {} as {
    count: number;
    setCount: Dispatch<React.SetStateAction<number>>;
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ count, setCount }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
