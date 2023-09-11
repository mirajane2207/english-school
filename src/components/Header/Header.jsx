import { React, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import classes from "./Header.module.css";
import ContactUsModal from '../ContactUsModal/ContactUsModal';


const Header = (props) => {
    const [modal, setModal] = useState(false);
    function showModal() {
        setModal(!modal)
    }

    return (
        <div className={classes.header__container} id='header'> 
            <Navbar scrollTo={props.scrollTo} mode={props.mode} changeMode={props.changeMode} contactUs={showModal}/>
            <div>
                <h1 className={classes.header__title}>{props.title}</h1>
                <p className={classes.header__text}>{props.text}</p>
                <button onClick={showModal}>Зв'язатися з нами</button>
            </div>
            <div className={props.mode === 'adult' ? classes.header_img_adult : classes.header_img_children}></div>
            <ContactUsModal visible={modal} setVisible={showModal} />
        </div>
    )
}

export default Header
