import { useRef } from 'react';
//import gsap from 'gsap';
//import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import LogoS from '../../../assets/images/logo-pj.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="559pt"
        height="897pt"
        viewBox="0 0 538.689 514.706"
      >
        <g
          className="svg-container"
          id="Group_1"
          data-name="Group 1"
          transform="translate(-11.424 -209.276)"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M12.424,210.276H113.4q81.933,0,118.147,15.129t57.118,48.959q20.91,33.834,20.91,81.088,0,52.361-27.369,87.037t-74.288,48.279q-27.54,7.825-100.3,7.82V710.4h-95.2Zm95.2,195.494h30.26q35.7,0,49.638-5.116a44.135,44.135,0,0,0,21.929-16.882q7.986-11.771,7.99-28.485,0-29-22.439-42.3-16.32-9.888-60.518-9.891h-26.86Z"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path_2"
            data-name="Path 2"
            d="M415.762,210.276H511.3V542.107q0,79.223-12.58,111.176a105.505,105.505,0,0,1-41.479,50.829q-28.9,18.87-69.357,18.87-82.617,0-140.757-72.418L315.8,586.306q22.773,25.842,38.758,34.678t30.94,8.84q15.3,0,22.779-12.92t7.48-56.778Z"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </g>
        <g
          fill="none"
          //className="svg-container"
          id="Group_2"
          data-name="Group 2"
          transform="translate(-11.424 -209.276)"
        >
          <path
            ref={outlineLogoRef}
            id="Path_3"
            data-name="Path 3"
            d="M50.237,210.276H151.215q81.932,0,118.146,15.129t57.119,48.959q20.908,33.834,20.909,81.088,0,52.361-27.369,87.037t-74.288,48.279q-27.538,7.825-100.3,7.82V710.4h-95.2Zm95.2,195.494h30.259q35.7,0,49.639-5.116a44.14,44.14,0,0,0,21.929-16.882q7.985-11.771,7.99-28.485,0-29-22.44-42.3-16.318-9.888-60.518-9.891H145.435Z"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M453.575,210.276h95.538V542.107q0,79.223-12.58,111.176a105.5,105.5,0,0,1-41.48,50.829q-28.9,18.87-69.357,18.87-82.617,0-140.757-72.418l68.679-64.258q22.773,25.842,38.759,34.678t30.939,8.84q15.3,0,22.779-12.92t7.48-56.778Z"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
