import { navs } from "@/config/nav";
import classNames from "classnames";
import { FC } from "react";

interface Props {
  isOpen: boolean;
}

const SideBarMenu: FC<Props> = (props) => {
  const { isOpen } = props;

  // function toggleMobileMenu() {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <div
      className={classNames(
        "fixed top-0 right-0 w-full pt-4 h-full z-[35] bg-transparent",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "shadow-lg transform transition-transform duration-300 ease-in-out",
        "flex flex-col items-center"
      )}
    >
      <div className="w-full h-full bg-[#000000] flex flex-col gap-4 p-4">
        {/* Content Top */}

        <ul className="h-[350px] overflow-scroll text-sm w-full mt-6">
          {navs.map((item, index) => (
            <li key={index} className="w-full p-4 ">
              <div className="w-full flex items-start gap-4">
                <h2 className="w-full font-clashDisplay font-semibold text-xl uppercase">
                  {item.label}
                  <div className="w-full h-[1px] bg-[#282329] mt-6 opacity-40" />
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarMenu;
