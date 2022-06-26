import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import { BsInstagram, BsLinkedin, BsTelegram, BsGithub } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import profile from "./profile1.jpg";
import TextLoop from "react-text-loop";
import Typist from "react-typist";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: "🚀",
    hideWhenDone: true,
  }
  const [darkmode, setdarkmode] = useState(false);

  return (
   <div>
      <div className={`card ${darkmode ? 'dark' : ''}`}>
        <div className='toggle-btn' onClick={() => setdarkmode(!darkmode)}></div>
        <div className='dark-mod'></div>

        <div className="card_body">
          <div className="profile text-center">
            <img src={profile} className="avatar" alt="profile" />
            <div className="bg_content rd-12 p-8">
                <h1>@M.Alfin Rasydin</h1>
                <p className="mt-13">IT Support</p>
              <Typist cursor={config_cursor}>
                <span className="about mt-1">System Computer & Network Engineer</span>
              </Typist>
            </div>

            <div className="bg_content rd-12 p-8 mt-13">
              Familiar With 
              <TextLoop interval={800}>
                <span className="highlight">Cisco</span>
                <span className="highlight">Mikrotik</span>
                <span className="highlight">System Computer</span>
                <span className="highlight">MYSQL</span>
                <span className="highlight">Microsoft Office</span>
              </TextLoop>
            </div>
          </div>

          <div className="mt-13">
            <a className="btn_action bg_content" href="https://www.instagram.com/m_fgsb28/" rel="noreferrer" target="_blank">
              <BsInstagram />
              <span>instagram</span>
            </a>
          </div>

          <div className="mt-13">
            <a className="btn_action bg_content" href="https://t.me/Apaaja777" rel="noreferrer" target="_blank">
              <BsTelegram />
              <span>Telegram</span>
            </a>
          </div>
          <div className="mt-13">
            <a className="btn_action bg_content" href="https://www.linkedin.com/in/alfin-rashydin-84b226242/" rel="noreferrer" target="_blank">
              <BsLinkedin />
              <span>Linked-in</span>
            </a>
            
          </div>
          <div className="mt-13">
            <a className="btn_action bg_content" href="https://github.com/alfinRashydin28" rel="noreferrer" target="_blank">
              <BsGithub />
              <span>Github</span>
            </a>
          </div>

        </div>
        
      </div>
      <ParticlesBg type="lines" bg={true} />
    </div> 
  );
}

export default App;