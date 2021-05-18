import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return ( 
        <footer>
            <div className="copyright">Copyright 2021 Magma Co.</div>
            <div className="links">
                <ul>
                    <li><a href="https://www.facebook.com/dan.korotenko" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    <li><a href="https://github.com/dankorotenko" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                    <li><a href="https://www.instagram.com/dankorotenko/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;