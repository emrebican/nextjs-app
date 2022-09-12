import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Userlist.module.css';

const UsersList = ({ users }) => {
  const usersDisplay = users.map((user) => (
    <li key={user.id} className={styles.card}>
      <Link href={`/users/${user.id}`}>
        <a>
          <h3>{user.name}</h3>
        </a>
      </Link>
    </li>
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
