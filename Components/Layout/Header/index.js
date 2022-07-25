import { useEffect, useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
import Logo from './images/logo.png';
import MobLogo from './images/Mob-Logo.png'
import { Button, IconButton } from "@mui/material";
import { Menu, Close } from '@mui/icons-material'
import { Box } from "@mui/system";
import { BlueBtn } from "../../components";
import { Phone, ArrowDropDown } from '@mui/icons-material'
import { DropDown } from "./Components/Components";

const Header = () => {
  const [width, setWidth] = useState();
  const [clicked, setClicked] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServiceDropdown] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width]);

  const onScroll = () => {
    if (window.scrollY > 50) {
      document.querySelector('header').style.cssText = `
      background-color: #fff;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      `
    } else if (scrollY < 50 && width > 1199) {
      document.querySelector('header').style.cssText = `
      background-color: rgba(255, 255, 255, 0.171);
      box-shadow: none;
      `
    }else if(width <= 1199){
      document.querySelector('header').style.cssText = `
      background-color: #fff;
      box-shadow: none;
      `
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  });

  const closeMobileMenu = () => {
    setClicked(false)
    setServiceDropdown(false)
    setAboutDropdown(false)
  }

  return (
    <>
      <header>
        {
          width > 1199 ? <nav className="navbar navbar-expand-xl bg-transparent navbar-light px-3">
            <Link href="/">
              <a className="navbar-brand">
                <Image src={Logo} alt="Bayswater Dentist Logo" />
              </a>
            </Link>
            <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <Menu />
            </Button>
            <Box className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">HOME</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link href="/about/">
                    <a className="nav-link dropdown-toggle" id="navbardropdown1" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">ABOUT</a>
                  </Link>
                  <ul className="dropdown-menu p-2 border-0 shadow" aria-labelledby="navbarDropdown">
                    <li className="nav-item">
                      <Link href="/patient-referral-program/">
                        <a className="nav-link dropdown-item">PATIENT REFERRAL PROGRAM</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/payment-plans/">
                        <a className="nav-link dropdown-item">PAYMENT PLAN</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/offer/">
                        <a className="nav-link dropdown-item">OFFER</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/team/">
                        <a className="nav-link dropdown-item">MEET OUR TEAM</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link href="/services/">
                    <a className="nav-link dropdown-toggle">SERVICES</a>
                  </Link>
                  <ul className="dropdown-menu border-0 shadow p-2">
                    <li className="nav-item">
                      <Link href="/wisdom-teeth/">
                        <a className="nav-link dropdown-item">WISDOM TEETH</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dental-implants/">
                        <a className="nav-link dropdown-item">DENTAL IMPLANTS</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dentures/">
                        <a className="nav-link dropdown-item">DENTURES</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/teeth-whitening/">
                        <a className="nav-link dropdown-item">TEETH WHITENING</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/root-canal/">
                        <a className="nav-link dropdown-item">ROOT CANAL</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/scale-clean/">
                        <a className="nav-link dropdown-item">SCALE & CLEAN</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/veneers/">
                        <a className="nav-link dropdown-item">VENEERS</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/crowns-bridges/">
                        <a className="nav-link dropdown-item">CROWNS & BRIDGES</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dental-emergency/">
                        <a className="nav-link dropdown-item">DENTAL EMERGENCY</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/invisalign/">
                        <a className="nav-link dropdown-item">INVISALIGN</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dental-fillings/">
                        <a className="nav-link dropdown-item">DENTAL FILLINGS</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/child-benefits/">
                    <a className="nav-link">CHILD BENEFITS</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog/">
                    <a className="nav-link">OUR BLOG</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact/">
                    <a className="nav-link">CONTACT US</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/covid-19/">
                    <a className="nav-link">COVID-19</a>
                  </Link>
                </li>
              </ul>
              <Box>
                <BlueBtn anchor={true} link="tel:(03)-9069 3100" text="(03)-9069 3100" />
                <BlueBtn navlink={true} link="/book/" text="BOOK NOW" />
              </Box>
            </Box>
          </nav> : <nav className='navbar navbar-expand-xl bg-transparent px-0 py-1'>
            <Button className="menu-icon" onClick={() => setClicked(!clicked)}>
              {clicked ? <Close className='text-white' /> : <Menu />}
            </Button>
            <Link href="/">
              <a className="navbar-brand">
                <Image src={MobLogo} alt="Bayswater Dentist Logo" />
              </a>
            </Link>
            <Box>
            <button className="mx-3" style={{backgroundColor:"var(--blue)", height:"2rem", width:"2rem", borderRadius:"50%", border:"none", outline:"none"}}>
              <a href="tel:(03)-9069 3100">
              <Phone className="text-white" style={{fontSize:"0.9rem"}} />
              </a>
            </button>
            <BlueBtn navlink={true} link="/book/" text="BOOK NOW" />
            </Box>
            <Box className={`${clicked ? 'nav-menu active' : 'nav-menu'}`}>
              <Box className="d-flex justify-content-center align-items-center">
                <Link href="/">
                  <a>
                    <Image src={MobLogo} alt="Bayswater Dentist Logo" />
                  </a>
                </Link>
              </Box>
              <Box p={3}>
                <ul className='navbar-nav mob'>
                  <li onClick={closeMobileMenu}>
                    <Link href="/">
                      <a className="text-white nav-link">HOME</a>
                    </Link>
                  </li>
                  <li className="nav-item dropdownListItem">
                    <Box className='d-flex align-items-center'>
                      <Link href="/about/">
                        <a className="nav-link text-white" onClick={closeMobileMenu}>ABOUT</a>
                      </Link>
                      <IconButton onClick={() => { setAboutDropdown(!aboutDropdown); setServiceDropdown(false) }}>
                        <ArrowDropDown className="text-white" />
                      </IconButton>
                    </Box>
                  </li>
                  {aboutDropdown ? <DropDown menu="about" closeMobileMenu={closeMobileMenu} /> : null}
                  <li className="nav-item dropdownListItem">
                    <Box className='d-flex align-items-center'>
                      <Link href="/services/">
                        <a className="nav-link text-white" onClick={closeMobileMenu}>SERVICES</a>
                      </Link>
                      <IconButton onClick={() => { setServiceDropdown(!servicesDropdown); setAboutDropdown(false) }}>
                        <ArrowDropDown className="text-white" />
                      </IconButton>
                    </Box>
                  </li>
                  {servicesDropdown ? <DropDown menu="services" closeMobileMenu={closeMobileMenu} /> : null}
                  <li onClick={closeMobileMenu}>
                    <Link href="/child-benefits/">
                      <a className="text-white nav-link">CHILD BENEFITS</a>
                    </Link>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <Link href="/blog/">
                      <a className="text-white nav-link">OUR BLOG</a>
                    </Link>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <Link href="/contact/">
                      <a className="text-white nav-link">CONTACT US</a>
                    </Link>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <Link href="/covid-19/">
                      <a className="text-white nav-link">COVID-19</a>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Box>
          </nav>
        }
      </header>
    </>
  )
}

export default Header