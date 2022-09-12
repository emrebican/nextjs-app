import Image from 'next/image';
import styles from '../../styles/CharacterList.module.css';

const CharacterDetail = ({ character }) => {
  return (
    <div className={styles.card}>
      <h2>CharacterDetail</h2>
      <div>
        <h2 className={styles.title}>{character.name}</h2>
        <p>
          <b>Status: </b>
          {character.status}
        </p>
        <p>
          <b>Species: </b>
          {character.species}
        </p>
        <p>
          <b>Gender: </b>
          {character.gender}
        </p>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={320}
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const characters = await res.json();

  const paths = characters.results.map((character) => {
    return {
      params: { id: character.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params.id}`
  );
  const character = await res.json();

  return {
    props: {
      character
    }
  };
};

export default CharacterDetail;
