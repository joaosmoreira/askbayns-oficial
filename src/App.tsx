import { Layout } from '@/components/layout';
import { Routes } from '@/components/routes';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Layout>
        <Routes />
      </Layout>
      <Toaster />
    </div>
  );
}

export default App;