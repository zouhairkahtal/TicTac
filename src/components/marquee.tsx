import Marquee from "react-fast-marquee";
import  AudemarsPiguet  from '../assets/image/consultation/svg/audemarsPiguet.svg';
import  blancpain from '../assets/image/consultation/svg/blancpain.svg';
import  cartier  from '../assets/image/consultation/svg/cartier-2.svg';
import   CitizenWatch  from '../assets/image/consultation/svg/citizen-watch-logo.svg';
import hublot  from '../assets/image/consultation/svg/hublot-logo-1.svg';
import  IceWatch from '../assets/image/consultation/svg/ice-watch-logo.svg';
import  Omega from '../assets/image/consultation/svg/omega-1.svg';
import  PatekPhilippe from '../assets/image/consultation/svg/patek-philippe.svg';

export function MarqueeComponent(){



    return (
        <>
        <div className="w-full h-full bg-white ">

<Marquee autoFill gradient speed={300} gradientWidth={450}
 className="h-full  z-10"


>
<img src={AudemarsPiguet} alt={AudemarsPiguet}  className="w-[10rem]  mx-14 "/>
<img src={blancpain} alt={blancpain}  className="w-[10rem]  mx-14"/>
<img src={cartier} alt={cartier}  className="w-[10rem]  mx-14"/>
<img src={CitizenWatch} alt={CitizenWatch}  className="w-[10rem]  mx-14"/>
<img src={hublot} alt={hublot}  className="w-[10rem]"/>
<img src={IceWatch} alt={IceWatch}  className="w-[10rem]  mx-14"/>
<img src={Omega} alt={Omega}  className="w-[10rem]  mx-14"/>
<img src={PatekPhilippe} alt={PatekPhilippe}  className="w-[10rem]  mx-14"/>

</Marquee>
        </div>
        </>
    )
} 