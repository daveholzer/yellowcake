import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Paseo de Palomas{' '}
      {/* <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a> */}
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. By{' '}
          <a href="https://paseodepalomas.org/">Paseo de Palomas, Inc</a>.
        </span>
      </div>
    </footer>
  </div>
)
