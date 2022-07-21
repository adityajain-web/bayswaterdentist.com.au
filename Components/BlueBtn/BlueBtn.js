import {Button} from '@mui/material'
import Link from 'next/link'

const BlueBtn = ({anchor, navlink, link, text}) => {

    const handleOnClick = () => {
        window.scrollTo(0,0)
    }

  return (
    <>
    {
        anchor || navlink ? <Button className="blueBtn mr-2" onClick={navlink ? handleOnClick : null}>{navlink && link ? <Link href={link}>
        <a className='text-white text-decoration-none'>{text}</a>
        </Link> : anchor ?  <a href={link} className='text-white text-decoration-none'>{text}</a> : null}</Button> : null
    } 
    </>
  )
}

export default BlueBtn