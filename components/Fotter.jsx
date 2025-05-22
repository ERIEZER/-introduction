import React from 'react';
import './styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div class="footer-main" >
        <div class='footer-inner'>
          <div class='footer-logo'>
            <img src='' />
          </div>
          <ul class='footer-list'>
            <ol>会社概要</ol>
            <ol>採用</ol>
            <ol>お問い合わせ</ol>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;