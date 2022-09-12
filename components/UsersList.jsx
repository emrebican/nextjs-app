import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Userlist.module.css';

const UsersList = ({ users }) => {
  const usersDisplay = users.map((user) => (
    <Link href={`/users/${user.id}`}>
      <a>
        <li key={user.id} className={styles.card}>
          <h3>{user.name}</h3>
        </li>
      </a>
    </Link>
  ));
  return (
    <ol className={styles.list}>
      <Head>
        <title>Rick & Morty | Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {usersDisplay}
    </ol>
  );
};

export default UsersList;
