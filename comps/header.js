const Logo = () => (
  <img
    src="static/vpn_logo.svg"
    width={40}
    height={40}
    style={{borderRadius: 5, margin: 5}}
  />
);

import Head from 'next/head';
import Link from 'next/link';

const LinkButton = ({title, nav}) => (
  <div>
    <Head>
      <title>VTuber Programmer's Network</title>
      <link rel="icon" href="static/favicon.ico" />
    </Head>
    <Link href={nav}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      a {
        padding: 15px;
        text-decoration: none;
        color: black;
      }
      a:hover {
        color: gray;
        text-decoration: underline;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default (currentNav) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gridColumnGap: 5,
      width: '100%'
    }}
  >
    <Logo />
    <div style={{fontSize: '2em', fontWeight: 'bold'}}>
      VTuber Programmer's Network
    </div>
    <div style={{display: 'flex'}}>
      <LinkButton title="Top" nav="/index" />
      <LinkButton title="Members" nav="/members" />
      <LinkButton title="News" nav="/news" />
      <LinkButton title="Contact" nav="/contact" />
    </div>
  </div>
);
