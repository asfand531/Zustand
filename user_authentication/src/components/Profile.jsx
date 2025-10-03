import useAuth from "../store/store";

function Profile() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>Please log in.</p>;
  }

  return (
    <div>
      <h2 className="font-bold text-2xl">Welcome, {user.username}</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
