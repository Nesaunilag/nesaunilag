import { Text } from "../../components";
import { Link } from "react-router-dom"; // Import Link
import React from "react";

export default function MegaMenu1() {
  return (
    <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
      <div className="w-full rounded-lg bg-[#ffffff] p-5 shadow-[0_0_13px_5px_#00000029]">
        <div className="flex gap-[30px]">
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="text-[18px] font-bold text-[#000000] sm:text-[15px]">Title 1</Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <Link to="/about" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Get To Know Us</Text>
              </Link>
              <Link to="/executives" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Executives</Text>
              </Link>
              <Link to="/alumni" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Notable Alumni</Text>
              </Link>
              <Link to="/menu4" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Menu 4</Text>
              </Link>
              <Link to="/menu5" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Menu 5</Text>
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="text-[18px] font-bold text-[#000000] sm:text-[15px]">Title 2</Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <Link to="/menu1" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Menu 1</Text>
              </Link>
              <Text className="text-[16px] font-normal text-[#656d76] sm:text-[13px]">Menu 2</Text>
              <Text className="text-[16px] font-normal text-[#656d76] sm:text-[13px]">Menu 3</Text>
              <Text className="text-[16px] font-normal text-[#656d76] sm:text-[13px]">Menu 4</Text>
              <Link to="/menu5" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Menu 5</Text>
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="text-[18px] font-bold text-[#000000] sm:text-[15px]">Title 3</Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <Link to="/menu1" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Menu 1</Text>
              </Link>
              <Link to="/menu2" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Menu 2</Text>
              </Link>
              <Link to="/menu3" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Menu 3</Text>
              </Link>
              <Link to="/menu4" className="sm:text-[13px]">
                <Text className="text-[16px] font-normal text-[#656d76]">Menu 4</Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
