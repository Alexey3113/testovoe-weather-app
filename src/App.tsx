import { QueryClientProvider } from "react-query";

import { queryClient } from "./configs/react-query/config";
import AppRouter from "providers/router/AppRouter";

import "./styles/index.css"

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <AppRouter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
