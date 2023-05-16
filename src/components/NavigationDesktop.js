import {ReactComponent as HamburgerIcon} from "../assets/images/hamburgerIcon.svg";
import {ReactComponent as Brand} from "../assets/images/brand.svg";

function NavigationDesktop() {
  return (
    <button className="pt-[23px] w-full flex justify-between items-center">
        <Brand />
        <div className="flex items-center gap-[17.5px]">
            <HamburgerIcon />
            <span className="">Menu</span>
        </div>
    </button>
  );
}

export default NavigationDesktop;
