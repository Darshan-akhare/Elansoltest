const DashboardPage = () => {
  // Check if user is authenticated
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/'; // Redirect to login page
    return null; // Render nothing
  }

  // User is authenticated, render the dashboard
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Your static table goes here */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User Name</td>
            <td>User DOB</td>
            <td>User Email</td>
            <td>User Password</td>
          </tr>
          {/* Add more rows if needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;