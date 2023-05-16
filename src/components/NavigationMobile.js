import {ReactComponent as HamburgerIcon} from "../assets/images/hamburgerIcon.svg";

function Navigation() {
  return (
    <button className="absolute top-[23px] right-[23px]">
        <div className="flex items-center gap-[17.5px]">
            <HamburgerIcon />
            <span className="">Menu</span>
        </div>
    </button>
  );
}

export default Navigation;
