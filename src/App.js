import { BrowserRouter } from "react-router-dom";
import AppRouter from "./appRouters/AppRouter";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/reducer";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ConfigProvider>
            <ToastContainer
              position="top-right"
              autoClose={2500}
              hideProgressBar
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <AppRouter />
          </ConfigProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
