import { useQuery } from '@apollo/react-hooks';
// import { useQuery } from '@apollo/client';
import { USERS } from '../graphql/queries';

const AllUsers = () => {
  const { data } = useQuery(USERS, { onError(_error) {} });

  return (
    <ul>
      {data && data.users.map((user) => <li key={user.id}>{user.username}</li>)}
    </ul>
  );
};

export default AllUsers;
