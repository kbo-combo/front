import styled from 'styled-components';

const SvgIcons = () => (
  <Svg xmlns="http://www.w3.org/2000/svg">
    <defs>
      <symbol id="account-circle" viewBox="0 0 24 24">
        <path
            d="M5.85 17.1q1.275-.975 2.85-1.538T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 1.475.488 2.775T5.85 17.1ZM12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.012-2.488T12 6q1.475 0 2.488 1.012T15.5 9.5q0 1.475-1.012 2.488T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
      </symbol>
      <symbol viewBox="0 0 14 14" id="account-circle-line">
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7" cy="5.5" r="2.5"></circle>
          <path d="M2.73 11.9a5 5 0 0 1 8.54 0"></path>
          <circle cx="7" cy="7" r="6.5"></circle>
        </g>
      </symbol>
      <symbol viewBox="0 0 14 14" id="combo-icon">
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="4" cy="10" r="1.2"></circle>
          <path d="M5 9 L10 3 Q11 2 12 3 L13 4 Q14 5 13 6 L8 11 Q7 12 6 11 Z"></path>
          <path d="M2 6 L5 9"></path>
          <path d="M3 4 L6 7"></path>
        </g>
      </symbol>
      <symbol viewBox="0 0 14 14" id="home-line">
        <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6.94a1 1 0 0 0-.32-.74L7 .5L.82 6.2a1 1 0 0 0-.32.74v5.56a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1Z"
        ></path>
      </symbol>
      <symbol viewBox="0 0 24 24" id="left-month">
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 6L9 12L15 18"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" id="right-month">
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6L15 12L9 18"
        />
      </symbol>
      <symbol id="rulebook" viewBox="0 0 24 24">
        <path fill="none" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3V3Zm4 5h8M7 12h8M7 15h5M3 19h14"/>
      </symbol>
    </defs>
  </Svg>
);

export default SvgIcons;

const Svg = styled.svg`
  display: none;
`;
