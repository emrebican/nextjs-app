import CharacterList from '../components/CharacterList';

const Characters = ({ characters }) => {
  return (
    <div className="container">
      <h2 className="title">Characters</h2>
      <CharacterList characters={characters} />
      <div className="info">
        <p>
          This component renders with <b>getStaticProps</b>
        </p>{' '}
        and
        <p>
          <b>Static routes</b> render with <b>getStaticPaths</b>
        </p>
        <a
          className="link"
          href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props"
          target="_blank"
        >
          getStaticProps
        </a>
        <br />
        <a
          className="link"
          href="https://nextjs.org/docs/basic-features/data-fetching/get-static-paths"
          target="_blank"
        >
          getStaticPaths
        </a>
      </div>
      <style jsx>{`
        .container {
          position: relative;
        }
        .title {
          text-align: center;
        }
        .info {
          position: absolute;
          top: 2rem;
          right: 4rem;
          width: 280px;
          font-size: 1.2rem;
          background-color: #aaa;
          padding: 2rem;
          text-align: center;
        }
        .link {
          color: #0070f3;
        }
      `}</style>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const characters = await res.json();

  return {
    props: {
      characters
    }
  };
};

export default Characters;
