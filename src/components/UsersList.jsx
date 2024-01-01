import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/use/userSlice";

function UsersList() {
  const dispatch = useDispatch();

  const { isLoading, error, data } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>UsersList</h2>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}

export default UsersList;
