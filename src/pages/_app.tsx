import "@/styles/globals.css";

export default function App({ Component, pageProps }:any) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <div>{getLayout(<Component pageProps={...pageProps} />)}</div>
  );
}