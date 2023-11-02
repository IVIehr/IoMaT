import "./styles/App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { userState } from "./atom/user";
import Start from "./Start";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [queryClient] = useState(() => {
    return new QueryClient();
  });
  const setHuman = useSetRecoilState(userState);

  useEffect(() => {
    const token = window.localStorage.getItem("AIS:ACCESS_TOKEN");
    if (token) {
      setHuman({ token });
    }
  }, [window.localStorage]);

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Start />
        <div dir="ltr">
          <ReactQueryDevtools />
        </div>
      </QueryClientProvider>
      <ToastContainer
        rtl
        position="bottom-right"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
      />
    </div>
  );
}

export default App;
