import { Main } from "./styles";

function Waves() {
  return (
    <Main>
      <svg
        className="wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
            className="wave-1"
          fill="hsla(204,60%,30%,1)"
          fill-opacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,69.3C672,53,768,75,864,106.7C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
            className="wave-2"
          fill="hsla(204,60%,40%,1)"
          fill-opacity="1"
          d="M0,192L48,213.3C96,235,192,277,288,282.7C384,288,480,256,576,208C672,160,768,96,864,80C960,64,1056,96,1152,128C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
            className="wave-3"
          fill="hsla(204,60%,50%,1)"
          fill-opacity="1"
          d="M0,192L48,170.7C96,149,192,107,288,106.7C384,107,480,149,576,186.7C672,224,768,256,864,245.3C960,235,1056,181,1152,181.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Main>
  );
}

export default Waves;