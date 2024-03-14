import React from "react";
import amazon from '../assets/images/client/uniswap.png';
import google from '../assets/images/client/aave.png';
import lenovo from '../assets/images/client/1inch.png';
import paypal from '../assets/images/client/layer2.png';
import shopify from '../assets/images/client/poly22.png';
import spotify from '../assets/images/client/arb3.png';
export default function CompanyLogo(){
    return(
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4">
                <img src={amazon} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={google} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={lenovo} className="h-6 w-16" alt=""  style={{ }}/>
            </div>

            <div className="mx-auto py-4">
                <img src={paypal} className="h-8 w-32" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={shopify} className="h-6 " alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={spotify} className="h-6" alt="" />
            </div>
        </div>
    )
}