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
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-30 transition-opacity duration-300 ease-in-out"></div>
      )}
      <div
        className={classNames(
          "fixed top-0 w-full pt-4 z-[35]  opacity-50",
          isOpen ? "translate-y-0" : "-translate-y-full",
          "shadow-lg transform transition-transform duration-300 ease-in-out",
          "flex flex-col items-center"
        )}
      >
        <div className="w-full h-full bg-[#000000] flex flex-col justify-center items-center gap-4 p-8">
          {/* Content Top */}

          <ul className="h-full text-sm w-full mt-6">
            {navs.map((item, index) => (
              <li key={index} className="w-full p-4 ">
                <div className="w-full flex justify-center items-center gap-4">
                  <h2 className="w-full font-clashDisplay font-semibold text-xl text-center">
                    {item.label}
                  </h2>
                </div>
              </li>
            ))}
          </ul>
          <hr className="w-full border-gray-800" />
          <button className="w-full border-[2px] border-solid border-gray-800 px-8 py-4 bg-transparent opacity-90">
            <p className="text-base">Partner with Us</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
