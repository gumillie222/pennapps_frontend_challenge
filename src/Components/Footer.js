import React from 'react';
import './Footer.css';
import footer from '../images/footer-background.png';
import seaslogo from '../images/penn-logo.png';

const Footer = () => {
    return (
        <div class="footer">
 
            <img src={footer} class="background" alt="iamge here" />
            <table class="footeroverlay">
                <td class="leftcells">
                    <td>
                        <tr class="footerlogo">PENN<br/>APPS</tr>
                        <tr class="footerattributes">© 2022 PennApps <br/>contact@pennapps.com</tr>
                    </td>
                    <td class="footerelml">Code of Conduct</td>
                    <td>
                        <tr class="footerelml">Facbook</tr>
                        <tr class="footerelml">Twitter</tr>
                        <tr class="footerelml">Instagram</tr>
                    </td>
                </td>
                <td>
                    <tr class="footerattributes">Organized with support from:</tr>
                    <tr><img src={seaslogo} alt="Penn Seas" /></tr>
                </td>
                

            </table>
            
        </div>
    );
};

export default Footer;