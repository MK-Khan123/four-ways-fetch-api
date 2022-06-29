import { Suspense } from 'react';
import './App.css';
import Quote from './components/query/Quote';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true
      }
    }
  });

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <QueryClientProvider client={client}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Quote />
            <Quote />
          </Suspense>
        </QueryClientProvider>
      </Suspense>
    </div>
  );
}

export default App;
