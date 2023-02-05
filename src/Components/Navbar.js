import React from 'react';
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';








const Navbar = () => {
    return (
        <nav>
            <Link to="#frontpage" class="caption" smooth>
                PENNAPPS
            </Link>

            <table class="navbuttons">
                <td>
                    <Link to="#about" class="navb" smooth>
                        ABOUT
                    </Link>
                </td>
                <td>
                    <Link to="#apply" class="navb" smooth>
                        APPLY
                    </Link>
                </td>
            </table>


        </nav>
        
    );
}


export default Navbar;