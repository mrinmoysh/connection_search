import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const fetchConnections = async () => {
  const response = await fetch(
    'https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17'
  );
  const data = await response.json();
  console.log("data",data)
  return data;
};

export const useConnections = () => {
  return useQuery('connections', fetchConnections);
};

export const APIProvider: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
};