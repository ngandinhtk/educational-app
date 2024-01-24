import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Common/Heading/Header';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CourseHome from "./Components/AllCourses/CourseHome";
import Team from "./Components/Team/Team";
import price from "./Components/pricing/price";
import blog from "./Components/blog/blog";
import contact from "./Components/contact/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/course' exact component={CourseHome} />
            <Route path='/team' exact component={Team} />
            <Route path='/pricing' exact component={price} />
            <Route path='/journal' exact component={blog} />
            <Route path='/contact' exact component={contact} />
          </Switch>
      </Router>
      <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

    </div>
  );
}

export default App;
