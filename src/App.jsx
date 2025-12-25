import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddItem from "./components/AddItem";
import CRUDoperation from "./components/CRUDoperation";
import ClickHandler from "./components/ClickHandler";
import Conditions from "./components/Conditions";
import FetchItem from "./components/FetchItem";
import FetchWithAxios from "./components/FetchWithAxios";
import MultiForm from "./components/MultiForm";
import PractiveUseEffect from "./components/PractiveUseEffect";
import TodoList from "./components/TodoList";
import UnControlableForm from "./components/UnControlableForm";
import LoginWithGithub from "./components/LoginWithGithub";
import LoginWithGoogle from "./components/LoginWithGoogle";
import DigitalClock from "./components/AnalogClock";
import ShoppingCart from "./components/ShoppingCart";
import QuizApp from "./components/Quiz";
import MasterHooksProject from "./components/PracticeHooksProject";
import PracticeHooks from "./components/PracticeHooks";
import NotesPractice from "./components/NotesPractice";
import PasswordApp from "./components/passwordGenerator/PasswordApp";
import CurrencyApp from "./components/currencyConverter/CurrencyApp";
import UserContextProvider from "./context/UserContextProvider";
import TestAcontext from "./components/TestAcontext";
import TestBcontext from "./components/TestBcontext";
// import Todos from "./components/Todos";
import AddTodo from "./components/ReduxToolkit/componentsRedux/AddTodo";
 import Todos from "./components/ReduxToolkit/componentsRedux/Todos.jsx";
import AppWrite from "./components/AppWrite/AppWrite.jsx";

function App() {

  return (
    <>
      <h3>Welcome to Car Rental App</h3>
      {/* <AddTodo/>
      <Todos/> */}
      <AppWrite/>

      {/* <UserContextProvider>
        <TestAcontext />
        <TestBcontext />
        
      </UserContextProvider> */}
        {/* <Todos /> */}
    </>
    // <Router>
    //   <Navbar />
    //   <div className="container" style={{ padding: '2rem' }}>
    //     <Routes>
    //       <Route path="/" element={<h3 style={{ color: 'white', textAlign: 'center' }}>Welcome to Car Rental App</h3>} />
    //       <Route path="/add-item" element={<AddItem />} />
    //       <Route path="/crud" element={<CRUDoperation />} />
    //       <Route path="/click-handler" element={<ClickHandler />} />
    //       <Route path="/conditions" element={<Conditions />} />
    //       <Route path="/fetch-item" element={<FetchItem />} />
    //       <Route path="/fetch-axios" element={<FetchWithAxios />} />
    //       <Route path="/multi-form" element={<MultiForm />} />
    //       <Route path="/practice-effect" element={<PractiveUseEffect />} />
    //       <Route path="/todo" element={<TodoList />} />
    //       <Route path="/uncontrollable-form" element={<UnControlableForm />} />
    //       <Route path="/login-github" element={<LoginWithGithub />} />
    //       <Route path="/login-google" element={<LoginWithGoogle />} />
    //       <Route path="digital-clock" element={<DigitalClock/>}/>
    //       <Route path="shopping-cart" element={<ShoppingCart/>}/>
    //       <Route path="quiz-app" element={<QuizApp/>}/>

    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
