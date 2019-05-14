import React from 'react';
import Footer from '../comps/footer';
import Header from '../comps/header';

const ContactInfo = ({name, url}) => (
  <div style={{fontWeight: 'bold', margin: '0 0 0 2em'}}>
    {`${name} `}
    <a href={url} style={{color: 'darkcyan'}}>
      {url}
    </a>
  </div>
);

export default () => (
  <div>
    <Header currentTitle="Contact" />
    <div style={{margin: '2em'}}>
      VTuber Programmer's Network (以下 VPN)
      としてのコラボレーションの企画などや
      <br />
      VPN への参加をご希望される方は、
      <br />
      下記の連絡先へお願いします
    </div>
    <ContactInfo name="主宰: 創好リナ" url="https://twitter.com/TsukusuLina" />
    <Footer />
  </div>
);
