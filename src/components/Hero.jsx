import React from 'react';
import ParticlesComponent from './Particles';
import '../styles/anim.css'
import Logo from './Logoparticle';
import ezihostLogo from '../assets/ezihost.png';
import "../styles/particles.css";

const Hero = () => {
    return (
        <div id="particles-js" className="bg-[#11111c] h-[100vh] w-full relative">
            <ParticlesComponent id="particles" />

            <div className="absolute !w-full !h-full flex items-center justify-center flex-col"
                style={{
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: 'auto',
                }}>

                <img
                    className='floating-image'
                    src={ezihostLogo}
                    alt="Center Image"
                />
                <Logo />

            </div>
        </div>
    );
};

export default Hero;



{/* <img data-tgpli-src="//www.eziline.com/wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt className="tp-rs-img rs-lazyload" width={153} height={45} data-lazyload="//www.eziline.com/wp-content/uploads/2-ezihost.png" data-tgpli-inited id="tgpli-674beeea55fbb" data-no-retina src="//www.eziline.com/wp-content/uploads/2-ezihost.png" data-src-rs-ref="//www.eziline.com/wp-content/uploads/2-ezihost.png" style={{position: 'static', height: '100%', width: '100%'}} /> */ }