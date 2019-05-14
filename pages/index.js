import Footer from '../comps/footer';
import Header from '../comps/header';

export default () => (
  <div>
    <Header currentTitle="Top" />
    <h2 className="pop" style={{textAlign: 'center'}}>
      Welcome to VTuber Programmer's Network
    </h2>
    <Footer />
    <style jsx>
      {`
        .pop {
          animation: pop_anim 1s ease;
        }

        @keyframes pop_anim {
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
      `}
    </style>
  </div>
);
