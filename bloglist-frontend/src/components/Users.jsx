import { Link } from "react-router-dom";

const Users = ({ users }) => {
  if (!users) {
    return null;
  }
  return (
    <>
      <h3>Users</h3>
      <table className="table w-50 mt-5 border">
        <thead>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.username}</Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
