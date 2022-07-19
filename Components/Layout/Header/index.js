import { useEffect, useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
import Logo from './images/logo.png';
import { Button } from "@mui/material";
import { Menu, Close } from '@mui/icons-material'
import { Box } from "@mui/system";

const Header = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <header>
        {
          width > 1028 ? <nav className="navbar navbar-expand-xl bg-transparent navbar-light px-2">
            <Link href="/" className="navbar-brand">
              <Image src={Logo} alt="Bayswater Dentist Logo" />
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
            </Box>
          </nav> : <nav>Mobile</nav>
        }
      </header>
    </>
  )
}

export default Header