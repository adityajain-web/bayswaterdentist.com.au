import React, {useState} from 'react'
import Link from "next/link";

const DropDown = ({ menu, closeMobileMenu }) => {

    const [click, setClick] = useState(false);

    const handleOnClick = () => {
        setClick(!click)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <ul onClick={handleOnClick} className={`${click ? 'dropdownMenu clicked' : 'dropdownMenu'} shadow p-3 bg-white`}>
                {
                    menu === "about" ? [
                        { id: "about-menu-1", link: "/patient-referral-program/", text: "PATIENT REFERRAL PROGRAM" },
                        { id: "about-menu-2", link: "/payment-plans/", text: "PAYMENT PLAN" },
                        { id: "about-menu-3", link: "/offer/", text: "OFFER" },
                        { id: "about-menu-4", link: "/team/", text: "MEET OUR TEAM" },
                    ].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => {setClick(false); closeMobileMenu()}}>
                        <Link href={item.link}>
                            <a className='nav-link text-dark'>{item.text}</a>
                        </Link>
                    </li>) : menu === "services" ? [
                        { id: "service-menu-1", link: "/wisdom-teeth.html/", text: "WISDOM TEETH" },
                        { id: "service-menu-2", link: "/dental-implants/", text: "DENTAL IMPLANTS" },
                        { id: "service-menu-3", link: "/dentures/", text: "DENTURES" },
                        { id: "service-menu-4", link: "/teeth-whitening/", text: "TEETH WHITENING" },
                        { id: "service-menu-5", link: "/root-canal/", text: "ROOT CANAL" },
                        { id: "service-menu-6", link: "/scale-clean/", text: "SCALE & CLEAN" },
                        { id: "service-menu-7", link: "/veneers/", text: "VENEERS" },
                        { id: "service-menu-8", link: "/crowns-bridges/", text: "CROWNS & BRIDGES" },
                        { id: "service-menu-9", link: "/dental-emergency/", text: "DENTAL EMERGENCY" },
                        { id: "service-menu-10", link: "/invisalign/", text: "INVISALIGN" },
                        { id: "service-menu-11", link: "/dental-fillings/", text: "DENTAL FILLINGS" },
                    ].map(item => <li className="nav-item" key={item.id} onClick={() => {setClick(false); closeMobileMenu()}}>
                        <Link href={item.link}>
                            <a className="nav-link text-dark">{item.text}</a>
                        </Link>
                    </li>) : null
                }
            </ul>
        </>
    )
}

export default DropDown