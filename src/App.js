// import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router , Route , Link}  from 'react-router-dom';
// import OtherPage from './OtherPage';
function App(answer) {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <div><h3>Hello</h3></div>
    // </div>
      <div className="salut">
        {answer.argument.map((item , index) =>(
          <span key={index}>salutttttttttt : {item}</span> 
        ))}
        {/* <Router>
          <Link to="/otherpage" >OtherPage</Link>
          <Route path="/otherpage" composent={OtherPage}></Route>
        </Router> */}
      </div>
  );
}

export function Exemple() {
  return(
<div>
  <p>hiiiiiiii</p>
</div>
  );
}

export default App;
