import Header from '../comps/header';

export default () => (
  <div>
    <Header currentTitle={'Top'} />
    <h2 className="slideIn" style={{textAlign: 'center'}}>
      Welcome to VTuber Programmer's Network
    </h2>
    <style jsx>{`
      .slideIn {
        animation: slideMe 1s ease;
      }

      @keyframes slideMe {
        50% {
          transform: scale(1.2);
          opacity: 0.6;
        }
      }
    `}</style>
  </div>
);
