import Head from 'next/head';
import RootLayout from '../components/layouts/RootLayout';
import Hero from '@/components/ui/Hero';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Car Rantal Service</title>
        <meta name="description" content="This is car rental service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page: JSX.Element) {
  return <RootLayout>{page}</RootLayout>;
};
