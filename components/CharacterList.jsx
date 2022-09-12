import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/CharacterList.module.css';

const CharacterList = ({ characters }) => {
  const displayCharacters = characters.results.map((character) => (
    <li key={character.id} className={styles.item}>
      <Link href={`/characters/${character.id}`}>
        <a>
          <h3>{character.name}</h3>
        </a>
      </Link>
    </li>
  ));
  return (
    <ul className={styles.container}>
      <Head>
        <title>Rick & Morty | Characters</title>
        <link rel="icon" href="/rick.ico" />
      </Head>
      {displayCharacters}
    </ul>
  );
};

export default CharacterList;
