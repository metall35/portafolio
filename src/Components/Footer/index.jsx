import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" w-full py-10 row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/mateo-pl/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} className='fill-white' />
                </a>
                <a href="https://www.github.com/metall35" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} className='fill-white'  />
                </a>
            </div>
        </footer>
    );
};

export default Footer;