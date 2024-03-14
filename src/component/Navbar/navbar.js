import React from 'react'
import logo_dark from '../../assets/images/Frame.png';
import logo_light from '../../assets/images/Frame.png';
// import logo_dark from '../../assets/images/logo-dark.png';
// import logo_light from '../../assets/images/logo-light.png';
import '../../assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '../../assets/css/tailwind.css';
import { useState, useEffect } from 'react';
import { Settings, ShoppingCart } from 'feather-icons-react';
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    let [manu , setManu] = useState('');
    let location = useLocation();
    
    useEffect(()=>{
        let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])
    

    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
        'bg-white dark:bg-slate-900' : ''}`}>
        <div className="container relative">
          <div>
                <Link className="logo" to="/">
                <span className="inline-block dark:hidden">
                    <img src={logo_dark} className="l-dark" style={{ marginTop: "18px" ,height:"40px ", width:"150px" }} alt="" />
                    <img src={logo_dark} className="l-light" 
                     style={{ marginTop: "18px" ,height:"40px ", width:"150px"}} alt="" />
                </span>
                <img src={logo_dark}  style={{ marginTop: "18px",height:"40px ", width:"150px" }} className="hidden dark:inline-block" alt="" />
            </Link>
            </div>

            <div className="menu-extras">
                <div className="menu-item">
                    <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>

            {
                navClass !== 'nav-light' ? <ul className={`buy-button list-none space-x-1 mb-0`} >
                    </ul>
                    :
                    <ul className="buy-button list-none space-x-1 mb-0">
                </ul>
            }
           
           <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                        

                        <li className={`${["portfolio-modern-two", "portfolio-modern-three", "portfolio-modern-four", "portfolio-modern-five", "portfolio-modern-six", "portfolio-classic-two", "portfolio-classic-three", "portfolio-classic-four", "portfolio-classic-five", "portfolio-classic-six", "portfolio-creative-two", "portfolio-creative-three", "portfolio-creative-four", "portfolio-creative-five", "portfolio-creative-six", "portfolio-masonry-two", "portfolio-masonry-three", "portfolio-masonry-four", "portfolio-masonry-five", "portfolio-masonry-six", "portfolio-detail-one", "portfolio-detail-two", "portfolio-detail-three", 'portfolio-detail-four'].includes(manu) ? "active" : ""} has-submenu parent-parent-menu-item`} >
                            <Link to="#">Defi</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Trading and Exchange <br />Platforms</li>
                                        <li className={manu === "portfolio-modern-two" || "" ? "active" : ""}><Link to="/portfolio-modern-two" className="sub-menu-item">Decentralized Exchanges </Link></li>
                                        <li className={manu === "portfolio-modern-three" || "" ? "active" : ""}><Link to="/portfolio-modern-three" className="sub-menu-item">DeFi Derivatives</Link></li>
                                        <li className={manu === "portfolio-modern-four" || "" ? "active" : ""}><Link to="/portfolio-modern-four" className="sub-menu-item">NFT Marketplaces</Link></li>
                                       
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Financial Services and <br /> Lending</li>
                                        <li className={manu === "portfolio-classic-two" || "" ? "active" : ""}><Link to="/portfolio-classic-two" className="sub-menu-item">DeFi Lending Platforms</Link></li>
                                        <li className={manu === "portfolio-classic-three" || "" ? "active" : ""}><Link to="/portfolio-classic-three" className="sub-menu-item">Stablecoin Development</Link></li>
                                        <li className={manu === "portfolio-classic-four" || "" ? "active" : ""}><Link to="/portfolio-classic-four" className="sub-menu-item">DeFi Insurance Platforms</Link></li>
                                       
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Investment and Asset<br /> Management</li>
                                        <li className={manu === "portfolio-creative-two" || "" ? "active" : ""}><Link to="/portfolio-creative-two" className="sub-menu-item">Yield Farming Protocols</Link></li>
                                        <li className={manu === "portfolio-creative-three" || "" ? "active" : ""}><Link to="/portfolio-creative-three" className="sub-menu-item">DeFi Asset Management Tools</Link></li>
                                        <li className={manu === "portfolio-creative-four" || "" ? "active" : ""}><Link to="/portfolio-creative-four" className="sub-menu-item">Automated Market Makers<br /> (AMMs)</Link></li>
                                       
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Liquidity and Reward<br /> Programs</li>
                                        <li className={manu === "portfolio-masonry-two" || "" ? "active" : ""}><Link to="/portfolio-masonry-two" className="sub-menu-item">Liquidity Mining Programs</Link></li>
                                        <li className={manu === "portfolio-masonry-three" || "" ? "active" : ""}><Link to="/portfolio-masonry-three" className="sub-menu-item">AMM Backtesting engines</Link></li>
                                        <li className={manu === "portfolio-masonry-four" || "" ? "active" : ""}><Link to="/portfolio-masonry-four" className="sub-menu-item">Staking Platforms</Link></li>
                                       
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Automation and Smart<br /> Solutions</li>
                                        <li className={manu === "portfolio-detail-one" || "" ? "active" : ""}><Link to="/portfolio-detail-one" className="sub-menu-item">Automated Vaults</Link></li>
                                        <li className={manu === "portfolio-detail-two" || "" ? "active" : ""}><Link to="/portfolio-detail-two" className="sub-menu-item">DeFi Smart Accounts</Link></li>
                                        <li className={manu === "portfolio-detail-three" || "" ? "active" : ""}><Link to="/portfolio-detail-three" className="sub-menu-item">Arbitrage Bots</Link></li>
                                      
                                    </ul>
                                </li>
                            </ul>
                        </li>


                        <li className={`${["portfolio-modern-two", "portfolio-modern-three", "portfolio-modern-four", "portfolio-modern-five", "portfolio-modern-six", "portfolio-classic-two", "portfolio-classic-three", "portfolio-classic-four", "portfolio-classic-five", "portfolio-classic-six", "portfolio-creative-two", "portfolio-creative-three", "portfolio-creative-four", "portfolio-creative-five", "portfolio-creative-six", "portfolio-masonry-two", "portfolio-masonry-three", "portfolio-masonry-four", "portfolio-masonry-five", "portfolio-masonry-six", "portfolio-detail-one", "portfolio-detail-two", "portfolio-detail-three", 'portfolio-detail-four'].includes(manu) ? "active" : ""} has-submenu parent-parent-menu-item`} >
                            <Link to="#">Blockchain</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Modern Portfolio</li> */}
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Finance & Banking </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Healthcare</Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Supply Chain Management</Link></li>

                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Classic Portfolio</li> */}
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Real Estate </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Education </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Legal & Governance </Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Creative Portfolio</li> */}
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Retail & E-Commerce </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Energy</Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Entertainment & Media </Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Masonry Portfolio</li> */}
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Insurance </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Manufacturing </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Agriculture </Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Portfolio Detail</li> */}
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Art & Collectibles </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Telecommunications </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Transportation & Logistics</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${["portfolio-modern-two", "portfolio-modern-three", "portfolio-modern-four", "portfolio-modern-five", "portfolio-modern-six", "portfolio-classic-two", "portfolio-classic-three", "portfolio-classic-four", "portfolio-classic-five", "portfolio-classic-six", "portfolio-creative-two", "portfolio-creative-three", "portfolio-creative-four", "portfolio-creative-five", "portfolio-creative-six", "portfolio-masonry-two", "portfolio-masonry-three", "portfolio-masonry-four", "portfolio-masonry-five", "portfolio-masonry-six", "portfolio-detail-one", "portfolio-detail-two", "portfolio-detail-three", 'portfolio-detail-four'].includes(manu) ? "active" : ""} has-submenu parent-parent-menu-item`} >
                            <Link to="#" >Research Services</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Portfolio Detail</li> */}
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Market Analysis </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Competition Research </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Regulatory Compliance</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Portfolio Detail</li> */}
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Blockchain Security</Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Feasibility Studies </Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Trend Analysis </Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Portfolio Detail</li> */}
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Token Research</Link></li>
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Blockchain User Behavior<br/> Studies </Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Portfolio Detail</li> */}
                                        <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Blockchain for Specific<br/> Industries</Link></li>
                                 
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        {/* <li className="megamenu-head">Portfolio Detail</li> */}
                                <li className={manu === "index-modern-saas" || "" ? "active" : ""}><Link to="/index-modern-saas" className="sub-menu-item">Smart Contract Auditing</Link></li>
                                       
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`${["portfolio-modern-two", "portfolio-modern-three", "portfolio-modern-four", "portfolio-modern-five", "portfolio-modern-six", "portfolio-classic-two", "portfolio-classic-three", "portfolio-classic-four", "portfolio-classic-five", "portfolio-classic-six", "portfolio-creative-two", "portfolio-creative-three", "portfolio-creative-four", "portfolio-creative-five", "portfolio-creative-six", "portfolio-masonry-two", "portfolio-masonry-three", "portfolio-masonry-four", "portfolio-masonry-five", "portfolio-masonry-six", "portfolio-detail-one", "portfolio-detail-two", "portfolio-detail-three", 'portfolio-detail-four'].includes(manu) ? "active" : ""} has-submenu parent-parent-menu-item`} >
                            <Link to="#">Consultation</Link>
                        </li>

                        <li className={manu === "contact-one" || "" ? "active" : ""}><Link to="/contact" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div >
        </nav >
    )
}