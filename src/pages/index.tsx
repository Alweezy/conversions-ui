import type { NextPage } from 'next';
import Dashboard from '../components/Dashboard';
const Home: NextPage = () => {
  return (
    <div className="grid place-items-center h-screen bg-black">
      <Dashboard />
    </div>
  );
};

export default Home;
