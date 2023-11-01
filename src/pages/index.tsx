import Head from "next/head";
import RootLayout from "../components/layouts/RootLayout";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Car Rantal Service</title>
        <meta
          name="description"
          content="This is car rental service"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3> Hello world</h3>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page: JSX.Element) {
  return <RootLayout>{page}</RootLayout>;
};

  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allNews: data,
    }
  };
}; */