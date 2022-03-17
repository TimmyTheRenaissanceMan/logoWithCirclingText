import logo from './logo.svg';
import './App.css';

function App() {
  return (
        <div style={{ position: "relative", height: "100%", width: "100%", marginTop: "50vh" }}>
      <div className="cirleAnimationContainer">
        <div id="circle" className="text-center">
           <img className="circleAnimationImage" src={logo} alt="logo" />
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "80vw", height: "80vw" }}
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300"
          >
            <defs>
              <path
                id="circlePath"
                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text fill="#000">
                <textPath className="circleText" xlinkHref="#circlePath">
                  THEY             SEE             ME             ROLLIN 
                  {/* 8 spaces */}
                </textPath>
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
