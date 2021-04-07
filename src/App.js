import BookingNavigation from "./components/BookingNavigation";
import Hotels from "./components/Hotels";
import GlobalState from "./context/Global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <div className="app">
        <BookingNavigation />
        <Hotels />
      </div>
    </GlobalState>
  );
};

export default App;
