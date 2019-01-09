import React from 'react';
import styled from 'styled-components';
import { device } from '../../data/Devices';

const Footer = () => (
  <FooterWrapper>
    <div className="footer-list">
      <div className="footer-item">
        <h3>Bezoekadres</h3>
        Kamer 2.81 <br />
        Buys Ballot Gebouw <br />
        Princetonplein 5 <br />
        3584 CC UTRECHT
      </div>
      <div className="footer-item">
        <h3>Postadres</h3>
        Studievereniging Sticky <br />
        Princetonplein 5 <br />
        3584 CC UTRECHT
      </div>
      <div className="footer-item">
        <h3>Gegevens</h3>
        <strong>IBAN:</strong> NL61INGB0002877106 <br />
        <strong>BTW:</strong> NL-8173.55.303.B01 <br />
        <strong>KvK:</strong> 30220729, UTRECHT
      </div>
    </div>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  padding-bottom: 4.5em;
  @media ${device.tablet} {
    padding: 0;
  }
  background-color: #444;
  display: flex;
  justify-content: center;
  align-content: space-between;
  .footer-list {
    color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    .footer-item {
      margin: 0.8em 2em;
    }
  }
`;

export default Footer;