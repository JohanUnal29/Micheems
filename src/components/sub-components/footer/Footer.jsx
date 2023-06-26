import React from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaTiktok} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosPhonePortrait } from 'react-icons/io';
import './Footer.css';

export default function Footer() {
    return (
        <footer class="pie-pagina">
            <div class="grupo-1">
                <div class="box">
                    <figure>
                        <img src="https://drive.google.com/uc?export=download&id=1924cU6mFI_lXAvhY7VAPks-9TgXW0Kmu" alt="Logo de cheems" />
                    </figure>
                </div>
                <div class="box">
                    <h2>Contactanos</h2>
                    <p><IoIosPhonePortrait className='emailphone'/> (+57) 320 2420980</p>
                    <p><MdEmail className='emailphone'/> Micheems@gmail.com</p>
                </div>
                <div class="box">
                    <h2>Siguenos</h2>
                    <div class="red-social">
                        <a href="#"><FaWhatsapp className='fa fa-whatsapp' /></a>
                        <a href="#"><FaInstagram className='fa fa-instagram' /></a>
                        <a href="#"><FaTwitter className='fa fa-twitter' /></a>
                        <a href="#"><FaFacebook className='fa fa-facebook' /></a>
                        <a href="#"><FaTiktok className='fa fa-tiktok' /></a>
                    </div>
                </div>
            </div>
            <div class="grupo-2">
                <small>&copy; 2023 <b>Micheems</b></small>
            </div>
        </footer>
    );
}
