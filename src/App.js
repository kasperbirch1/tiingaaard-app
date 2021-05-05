// import BookingNavigation from "./components/BookingNavigation";
// import Hotels from "./components/Hotels";
import TestNav from "./components/TestNav";
import GlobalState from "./context/Global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <div className="app">
        <TestNav />
        {/* <BookingNavigation /> */}
        {/* <Hotels /> */}
      </div>
    </GlobalState>
  );
};

export default App;
