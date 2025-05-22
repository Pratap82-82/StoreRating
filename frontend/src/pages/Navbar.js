const role = localStorage.getItem('role');

{role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
{role === 'user' && <Link to="/user">Browse Stores</Link>}
{role === 'owner' && <Link to="/owner">My Store</Link>}
