import UsersList from '../components/UsersList';
import styles from '../styles/Userlist.module.css';

const Users = ({ users }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>All Users</h2>
      <UsersList users={users} />
      <div className={styles.info}>
        <p>
          This component renders with <b>getStaticProps</b>
        </p>{' '}
        and
        <p>
          <b>Static routes</b> render with <b>getServerSideProps</b>
        </p>
        <a
          className={styles.link}
          href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props"
        >
          getStaticProps
        </a>
        <br />
        <a
          className={styles.link}
          href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
        >
          getServerSideProps
        </a>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: { users }
  };
};

export default Users;
