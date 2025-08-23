import { Link } from "react-router-dom";

const Users = ({ users }) => {
  if (!users) {
    return null;
  }
  return (
    <>
      <h3>Users</h3>
      <table>
        <tr>
          <th></th>
          <th>blogs created</th>
        </tr>
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
