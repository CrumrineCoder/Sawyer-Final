import React, { useState, useEffect } from 'react';
import facebook_icon from "../assets/icons/facebook_icon.svg";
import instagram_icon from "../assets/icons/instagram_icon.svg";
import twitter_icon from "../assets/icons/twitter_icon.svg";

function Footer(props) {
    const [showCompany, setShowCompany] = useState(true);
    const [showOrder, setShowOrder] = useState(true);
    return (
        <div className="footer">
            <div className="footerSocialContainer">
                <h3 className="footerSocialSlogan">We are commited to serving the freshest, most delightful treats.</h3>
                <div className="socialHandlesContainer">
                    <img alt="Facebook link" src={facebook_icon} className="socialHandleIcon" />
                    <img alt="Instagram link" src={instagram_icon} className="socialHandleIcon" />
                    <img alt="Twitter link" src={twitter_icon} className="socialHandleIcon" />
                </div>
                <div className="footerSocialCopyright">© 2019 Macarons</div>
            </div>
            <div className="footerInfoContainer">
                <hr className="footerDivider"></hr>
                <div className="footerLinksContainer">
                    <span onClick={() => setShowCompany(!showCompany)} className={showCompany ? "footerLinksCategoryButton fas fa-chevron-up" : "footerLinksCategoryButton fas fa-chevron-down"}></span>
                    <h5 className="footerLinksCategoryHeader">Company</h5>
                    <div className={showCompany ? "footerLinkContainer" : "footerLinkContainer footerLinkObscure"}>
                        <a href="#" className="footerLink">About</a>
                        <a href="#" className="footerLink">Locations</a>
                        <a href="#" className="footerLink">Contact Us</a>
                    </div>
                </div>
                <hr className="footerDivider"></hr>
                <div className="footerLinksContainer">
                    <span onClick={() => setShowOrder(!showOrder)}  className={showOrder ? "footerLinksCategoryButton fas fa-chevron-up" : "footerLinksCategoryButton fas fa-chevron-down"}></span>
                    <h5 className="footerLinksCategoryHeader">Orders</h5>
                    <div className={showOrder ? "footerLinkContainer" : "footerLinkContainer footerLinkObscure"}>
                        <a href="#" className="footerLink">Order Tracker</a>
                        <a href="#" className="footerLink">Delivery FAQs</a>
                    </div>
                </div>
                <hr className="footerDivider"></hr>
            </div>
        </div>
    )
}

export default Footer; 