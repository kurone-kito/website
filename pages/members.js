const Member = ({info}) => {
  const {name, job, twitter, youtube, github, favorite, description} = info;
  return (
    <div
      style={{
        border: '2px solid lightgray',
        padding: 5,
        margin: '10px 0',
        borderRadius: 2
      }}
    >
      <div style={{fontSize: '1.2em', fontWeight: 'bold'}}>{name}</div>
      {twitter && <a href={twitter}>Twitter</a>}
      {youtube && <a href={youtube}>YouTube</a>}
      {github && <a href={github}>Github</a>}
      <div>{`Job: ${job}`}</div>
      <div>{`Favorite: ${favorite}`}</div>
      <div style={{fontSize: '0.8em', textIndent: '1em'}}>{description}</div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: darkcyan;
          margin-left: 1em;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

import Header from '../comps/header';

const Members = ({members}) => (
  <div>
    <Header currentTitle={'Members'} />
    <h2>We are VTuber Peogrammer's Network</h2>
    <div>
      {members.map((e) => (
        <Member key={e.name} info={e} />
      ))}
    </div>
  </div>
);

import fetch from 'isomorphic-unfetch';

Members.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/static/members.json');
  const json = await res.json();
  return {members: json.members};
};

export default Members;
