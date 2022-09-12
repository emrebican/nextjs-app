import React from 'react';

const userDetail = ({ user }) => {
  return (
    <div className="container">
      <h2>{user.name}</h2>
      <small>{user.username}</small>
      <br />
      <small>{user.email}</small>
      <br />
      <p>{user.address.city}</p>
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user
    }
  };
};

export default userDetail;
