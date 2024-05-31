import React from 'react'
import "./aboutme.css"

export default function Aboutme() {
  return (
    
    
    <div className="secondmain">
      <div className="contain">
        <b className="me">About me</b>

        <div className="mecont">
          <div className="aboutme">
            <img
              src="https://bolby-react.vercel.app/images/avatar-2.svg"  
              alt=""
              height="150px"
              width="156px"
            />
          </div>
          <div className="total">
          <div className="paramain">
       
            <div className="para">
              <p>
                I am Raghul , web developer from Chennai , Tamilnadu <br />
                I have rich experience in web site design and <br />
                building and customization, also <br /> I am good at WordPress.
              </p>

              <div>
                <button>Download CV</button>
              </div>
            </div>
          </div>
         
          <div className="mainbar">
            <div className="bar">
              <p>frontend</p>
              <div className="barmain">
                <div className="barsub"></div>
              </div>
            </div>
            <div className="barone">
              <p>backend</p>
              <div className="barmain">
                <div className="barsec"></div>
              </div>
            </div>
            <div className="bartwo">
              <p>database</p>
              <div className="barmain">
                <div className="barthr"></div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="logmain">
          <div className="memy">
            <b>My Tech Knowledge</b>
          </div>
          <div className="logsub">
            <div className="logoimg">
              <a
                href=""
                target="_blank"
              >
                <img
                  src="src/Component/funComp/images/html.png"
                  alt=""
                  width={150}
                  height={120}
                />
              </a>
            </div>
            <div className="logoimg">
              <a
                href=""
                target="_blank"
              >
            
                <img
                  src="src/Component/funComp/images/css logo.png"
                  alt=""
                  width={200}
                  height={120}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="" target="_blank">
           
                <img
                  src="src/Component/funComp/images/JavaScript.png"
                  alt=""
                  width={150}
                  height={120}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://getbootstrap.com/" target="_blank">
           
                <img
                  src="src/Component/funComp/images/Bootstrap Logo.png"
                  alt=""
                  width={150}
                  height={120}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://react.dev/" target="_blank">
              
                <img
                  src="src/Component/funComp/images/react logo.png"
                  alt=""
                  width={170}
                  height={120}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://www.python.org/" target="_blank">
             
                <img
                  src="src/Component/funComp/images/python logo.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://code.visualstudio.com/" target="_blank">
             
                <img
                  src="src/Component/funComp/images/visual-studio-code.png"
                  alt=""
                  width={180}
                  height={120}
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/" target="_blank">
           
                <img
                  src="src/Component/funComp/images/github_PNG47.png"
                  alt=""
                  width={170}
                  height={120}
                  className="logoimggit"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
