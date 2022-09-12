import Head from 'next/head';

const about = () => {
  return (
    <div className="main">
      <Head>
        <title>Rick & Morty | About</title>
        <link rel="icon" href="/morty.ico" />
      </Head>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        elementum erat ac tortor ornare, in rutrum massa egestas. Mauris in
        pulvinar libero. Vivamus eget egestas odio. Donec quis cursus felis.
        Etiam maximus elit tortor, nec tincidunt felis maximus vitae. Duis
        euismod turpis quis eros semper, vitae lacinia leo venenatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        elementum erat ac tortor ornare, in rutrum massa egestas.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <style jsx>{`
        .main {
          min-height: 100vh;
          padding: 4rem 12rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default about;
