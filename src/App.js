import "./App.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/Theme";
import Routes from "./routes/index";
import store from "./redux/store/index";
import { Provider } from "react-redux";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
