import React from "react";

function UserCard({ user }) {
  if (!user) {
    return <h3>Working fetching your User user...</h3>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}
export default UserCard;
