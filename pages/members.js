const Member = ({info}) => {
  const {name, job, twitter, youtube, github, favorite, description} = info;
  const favorites = (
    <div>
      Favorites:{' '}
      {(favorite + '').split('\n').map((e) => (
        <p key={e} style={{margin: '0 0 0 1em'}}>
          {e}
        </p>
      ))}
    </div>
  );
  return (
    <div
      style={{
        border: '2px solid lightgray',
        padding: 5,
        margin: '10px auto',
        borderRadius: 2,
        maxWidth: 600
      }}
    >
      <div style={{fontSize: '1.2em', fontWeight: 'bold'}}>{name}</div>
      {twitter && <a href={twitter}>Twitter</a>}
      {youtube && <a href={youtube}>YouTube</a>}
      {github && <a href={github}>Github</a>}
      <div>{`Job: ${job}`}</div>
      <div>{favorites}</div>
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
import Footer from '../comps/footer';

const Members = ({members}) => (
  <div>
    <Header currentTitle={'Members'} />
    <h2 style={{textAlign: 'center'}}>We are VTuber Programmer's Network</h2>
    <div>
      {members.map((e) => (
        <Member key={e.name} info={e} />
      ))}
    </div>
    <Footer />
  </div>
);

Members.getInitialProps = async () => {
  const {
    default: {members: members}
  } = await import('../static/members.json');
  return {members};
};

export default Members;
