 /*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const Component1 = ({
  property1,
  className,
  icBaselineTiktok = "https://c.animaapp.com/WzNSGM6X/img/ic-baseline-tiktok-1.svg",
  jamLinkedin = "https://c.animaapp.com/WzNSGM6X/img/jam-linkedin.svg",
  mdiInstagram = "https://c.animaapp.com/WzNSGM6X/img/mdi-instagram.svg",
  icOutlineWhatsapp = "https://c.animaapp.com/WzNSGM6X/img/ic-outline-whatsapp.svg",
  iconoirTwitter = "https://c.animaapp.com/WzNSGM6X/img/iconoir-twitter.svg",
  vector = "https://c.animaapp.com/WzNSGM6X/img/vector-15-2.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`w-[400px] h-[374px] ${className}`}>
      <div
        className={`relative ${
          ["variant-2", "variant-3", "variant-4", "variant-5"].includes(state.property1) ? "w-[555px]" : ""
        } ${
          state.property1 === "variant-2"
            ? "top-0.5"
            : state.property1 === "variant-3"
            ? "top-[9px]"
            : state.property1 === "variant-4"
            ? "top-8"
            : state.property1 === "variant-5"
            ? "top-16"
            : ""
        } ${
          state.property1 === "variant-2"
            ? "h-[530px]"
            : state.property1 === "variant-3"
            ? "h-[523px]"
            : state.property1 === "variant-4"
            ? "h-[500px]"
            : state.property1 === "variant-5"
            ? "h-[468px]"
            : "h-[374px]"
        }`}
      >
        <div
          className={`left-0 absolute ${state.property1 === "variant-4" ? "w-[274px]" : "w-[225px]"} ${
            ["default", "variant-6"].includes(state.property1)
              ? "top-16"
              : state.property1 === "variant-2"
              ? "top-[62px]"
              : state.property1 === "variant-3"
              ? "top-[55px]"
              : "top-0"
          } ${state.property1 === "variant-4" ? "h-[335px]" : "h-[300px]"} ${
            ["default", "variant-2", "variant-3", "variant-5", "variant-6"].includes(state.property1)
              ? "overflow-hidden"
              : ""
          } ${
            ["default", "variant-2", "variant-3", "variant-5", "variant-6"].includes(state.property1)
              ? "rounded-[20px]"
              : ""
          } ${
            ["default", "variant-2", "variant-3", "variant-5", "variant-6"].includes(state.property1) ? "bg-white" : ""
          }`}
        >
          {state.property1 === "variant-4" && (
            <>
              <div
                className="absolute w-[225px] h-[300px] top-8 left-0 bg-white rounded-[20px] overflow-hidden"
                onMouseEnter={() => {
                  dispatch("mouse_enter_1243");
                }}
                onMouseLeave={() => {
                  dispatch("mouse_leave_1243");
                }}
              >
                <div className="absolute top-[219px] left-16 [font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-8 whitespace-nowrap">
                  TIKTOK
                </div>
                <img
                  className="absolute w-[146px] h-[146px] top-[49px] left-10"
                  alt="Ic baseline tiktok"
                  src="https://c.animaapp.com/WzNSGM6X/img/ic-baseline-tiktok-4.svg"
                />
              </div>
              <div className="absolute w-[225px] h-[300px] top-[17px] left-6 bg-[#fcf5ed] rounded-[20px] overflow-hidden rotate-[10.00deg]">
                <div className="absolute top-[219px] left-[53px] [font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-8 whitespace-nowrap">
                  LINKEDIN
                </div>
                <img
                  className="absolute w-[169px] h-[169px] top-[27px] left-6 rotate-[-10.00deg]"
                  alt="Jam linkedin"
                  src="https://c.animaapp.com/WzNSGM6X/img/jam-linkedin-4.svg"
                />
              </div>
            </>
          )}

          {["default", "variant-2", "variant-3", "variant-5", "variant-6"].includes(state.property1) && (
            <>
              <div className="[font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] left-16 tracking-[0] text-2xl top-[219px] text-black absolute font-normal text-center whitespace-nowrap leading-8">
                TIKTOK
              </div>
              <img
                className="w-[146px] left-10 top-[49px] h-[146px] absolute"
                alt="Ic baseline tiktok"
                src={
                  state.property1 === "variant-5"
                    ? "https://c.animaapp.com/WzNSGM6X/img/ic-baseline-tiktok-5.svg"
                    : state.property1 === "variant-2"
                    ? "https://c.animaapp.com/WzNSGM6X/img/ic-baseline-tiktok-2.svg"
                    : state.property1 === "variant-3"
                    ? "https://c.animaapp.com/WzNSGM6X/img/ic-baseline-tiktok-3.svg"
                    : icBaselineTiktok
                }
              />
            </>
          )}
        </div>
        {["default", "variant-2", "variant-3", "variant-6"].includes(state.property1) && (
          <>
            <div
              className={`w-[225px] left-6 rotate-[10.00deg] h-[300px] overflow-hidden rounded-[20px] bg-[#fcf5ed] absolute ${
                state.property1 === "variant-2"
                  ? "top-[47px]"
                  : state.property1 === "variant-3"
                  ? "top-10"
                  : "top-[49px]"
              }`}
            >
              <div className="[font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] left-[53px] tracking-[0] text-2xl top-[219px] text-black font-normal text-center whitespace-nowrap leading-8 absolute">
                LINKEDIN
              </div>
              <img
                className="w-[169px] left-6 top-[27px] rotate-[-10.00deg] h-[169px] absolute"
                alt="Jam linkedin"
                src={
                  state.property1 === "variant-6"
                    ? "https://c.animaapp.com/WzNSGM6X/img/jam-linkedin-1.svg"
                    : state.property1 === "variant-2"
                    ? "https://c.animaapp.com/WzNSGM6X/img/jam-linkedin-2.svg"
                    : state.property1 === "variant-3"
                    ? "https://c.animaapp.com/WzNSGM6X/img/jam-linkedin-3.svg"
                    : jamLinkedin
                }
              />
            </div>
            <div
              className={`w-[225px] left-[51px] rotate-[20.00deg] h-[300px] overflow-hidden rounded-[20px] bg-white absolute ${
                state.property1 === "variant-2"
                  ? "top-9"
                  : state.property1 === "variant-3"
                  ? "top-[29px]"
                  : "top-[38px]"
              }`}
              onMouseLeave={() => {
                dispatch("mouse_leave");
              }}
              onMouseEnter={() => {
                dispatch("mouse_enter");
              }}
            >
              <div className="[font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] left-[42px] tracking-[0] text-2xl top-[219px] text-black font-normal text-center whitespace-nowrap leading-8 absolute">
                INSTAGRAM
              </div>
              <img
                className="w-[187px] left-[19px] top-4 rotate-[-20.00deg] h-[187px] absolute"
                alt="Mdi instagram"
                src={
                  state.property1 === "variant-6"
                    ? "https://c.animaapp.com/WzNSGM6X/img/mdi-instagram-1.svg"
                    : state.property1 === "variant-2"
                    ? "https://c.animaapp.com/WzNSGM6X/img/mdi-instagram-2.svg"
                    : state.property1 === "variant-3"
                    ? "https://c.animaapp.com/WzNSGM6X/img/mdi-instagram-3.svg"
                    : mdiInstagram
                }
              />
            </div>
            <div
              className={`w-[225px] h-[300px] overflow-hidden rounded-[20px] bg-[#fcf5ed] absolute ${
                state.property1 === "variant-3" ? "left-[255px]" : "left-[76px]"
              } ${
                state.property1 === "variant-2"
                  ? "top-9"
                  : state.property1 === "variant-3"
                  ? "top-[190px]"
                  : "top-[38px]"
              } ${state.property1 === "variant-3" ? "rotate-[130.00deg]" : "rotate-[30.00deg]"}`}
              onMouseLeave={() => {
                dispatch("mouse_leave_1172");
              }}
              onMouseEnter={() => {
                dispatch("mouse_enter_1172");
              }}
            >
              <div className="[font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] left-[46px] tracking-[0] text-2xl top-[219px] text-black font-normal text-center whitespace-nowrap leading-8 absolute">
                WHATSAPP
              </div>
              <img
                className={`absolute ${state.property1 === "variant-3" ? "w-[206px]" : "w-[199px]"} ${
                  state.property1 === "variant-3" ? "left-2.5" : "left-[13px]"
                } ${state.property1 === "variant-3" ? "top-[3px]" : "top-1.5"} ${
                  state.property1 === "variant-3" ? "rotate-[-130.00deg]" : "rotate-[-30.00deg]"
                } ${state.property1 === "variant-3" ? "h-[206px]" : "h-[199px]"}`}
                alt="Ic outline whatsapp"
                src={
                  state.property1 === "variant-6"
                    ? "https://c.animaapp.com/WzNSGM6X/img/ic-outline-whatsapp-1.svg"
                    : state.property1 === "variant-2"
                    ? "https://c.animaapp.com/WzNSGM6X/img/ic-outline-whatsapp-2.svg"
                    : state.property1 === "variant-3"
                    ? "https://c.animaapp.com/WzNSGM6X/img/ic-outline-whatsapp-3.svg"
                    : icOutlineWhatsapp
                }
              />
            </div>
            <div
              className={`w-[225px] h-[300px] rounded-[20px] bg-white absolute ${
                ["variant-2", "variant-3"].includes(state.property1) ? "left-[255px]" : "left-[105px]"
              } ${
                state.property1 === "variant-2"
                  ? "top-[197px]"
                  : state.property1 === "variant-3"
                  ? "top-[190px]"
                  : "top-[37px]"
              } ${["variant-2", "variant-3"].includes(state.property1) ? "rotate-[130.00deg]" : "rotate-[40.00deg]"} ${
                ["default", "variant-2", "variant-6"].includes(state.property1) ? "overflow-hidden" : ""
              }`}
              onMouseLeave={() => {
                dispatch("mouse_leave_1178");
              }}
              onMouseEnter={() => {
                dispatch("mouse_enter_1178");
              }}
            >
              <div className="w-[290px] -left-8 top-[-27px] h-[290px] absolute">
                <img
                  className={`w-[206px] left-[42px] top-[42px] h-[206px] absolute ${
                    ["variant-2", "variant-3"].includes(state.property1) ? "rotate-[-130.00deg]" : "rotate-[-40.00deg]"
                  }`}
                  alt="Iconoir twitter"
                  src={
                    state.property1 === "variant-6"
                      ? "https://c.animaapp.com/WzNSGM6X/img/iconoir-twitter-1.svg"
                      : state.property1 === "variant-2"
                      ? "https://c.animaapp.com/WzNSGM6X/img/iconoir-twitter-2.svg"
                      : state.property1 === "variant-3"
                      ? "https://c.animaapp.com/WzNSGM6X/img/iconoir-twitter-3.svg"
                      : iconoirTwitter
                  }
                />
                <div className="[font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] left-[90px] tracking-[0] text-2xl top-[246px] text-black font-normal text-center whitespace-nowrap leading-8 absolute">
                  TWITTER
                </div>
              </div>
              <div className="w-5 left-[200px] top-[276px] rotate-[-40.00deg] h-5 rounded-[10px] bg-black absolute">
                <img
                  className={`absolute ${["variant-2", "variant-3"].includes(state.property1) ? "w-[17px]" : "w-3"} ${
                    ["variant-2", "variant-3"].includes(state.property1) ? "left-px" : "left-1"
                  } ${["variant-2", "variant-3"].includes(state.property1) ? "top-1" : "top-0.5"} ${
                    ["variant-2", "variant-3"].includes(state.property1) ? "rotate-[-90.00deg]" : ""
                  } ${["variant-2", "variant-3"].includes(state.property1) ? "h-3" : "h-[17px]"}`}
                  alt="Vector"
                  src={
                    state.property1 === "variant-2"
                      ? "https://c.animaapp.com/WzNSGM6X/img/vector-15-3.svg"
                      : state.property1 === "variant-3"
                      ? "https://c.animaapp.com/WzNSGM6X/img/vector-15-4.svg"
                      : vector
                  }
                />
              </div>
            </div>
          </>
        )}

        {["variant-4", "variant-5"].includes(state.property1) && (
          <div
            className={`w-[374px] h-[366px] absolute ${
              state.property1 === "variant-5" ? "left-[180px]" : "left-[181px]"
            } ${state.property1 === "variant-5" ? "top-[101px]" : "top-[134px]"}`}
          >
            <div
              className={`w-[225px] left-[75px] top-[33px] rotate-[130.00deg] h-[300px] overflow-hidden rounded-[20px] absolute ${
                state.property1 === "variant-4" ? "bg-white" : "bg-[#fcf5ed]"
              }`}
            >
              <div
                className={`[font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] tracking-[0] text-2xl top-[219px] text-black font-normal text-center whitespace-nowrap leading-8 absolute ${
                  state.property1 === "variant-4" ? "left-[42px]" : "left-[53px]"
                }`}
              >
                {state.property1 === "variant-5" && <>LINKEDIN</>}

                {state.property1 === "variant-4" && <>INSTAGRAM</>}
              </div>
              <img
                className={`w-[206px] rotate-[-130.00deg] h-[206px] absolute ${
                  state.property1 === "variant-4" ? "left-2.5" : "left-1.5"
                } ${state.property1 === "variant-4" ? "top-[7px]" : "top-[9px]"}`}
                alt="Jam linkedin"
                src={
                  state.property1 === "variant-4"
                    ? "https://c.animaapp.com/WzNSGM6X/img/mdi-instagram-4.svg"
                    : "https://c.animaapp.com/WzNSGM6X/img/jam-linkedin-5.svg"
                }
              />
            </div>
            <div
              className={`w-[225px] left-[75px] rotate-[130.00deg] h-[300px] overflow-hidden rounded-[20px] absolute ${
                state.property1 === "variant-5" ? "top-[33px]" : "top-[34px]"
              } ${state.property1 === "variant-5" ? "bg-white" : "bg-[#fcf5ed]"}`}
            >
              <div
                className={`[font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] tracking-[0] text-2xl top-[219px] text-black font-normal text-center whitespace-nowrap leading-8 absolute ${
                  state.property1 === "variant-5" ? "left-[42px]" : "left-[46px]"
                }`}
              >
                {state.property1 === "variant-4" && <>WHATSAPP</>}

                {state.property1 === "variant-5" && <>INSTAGRAM</>}
              </div>
              <img
                className={`w-[206px] left-2.5 rotate-[-130.00deg] h-[206px] absolute ${
                  state.property1 === "variant-5" ? "top-[7px]" : "top-[3px]"
                }`}
                alt="Ic outline whatsapp"
                src={
                  state.property1 === "variant-5"
                    ? "https://c.animaapp.com/WzNSGM6X/img/mdi-instagram-5.svg"
                    : "https://c.animaapp.com/WzNSGM6X/img/ic-outline-whatsapp-4.svg"
                }
              />
            </div>
            {state.property1 === "variant-5" && (
              <div className="absolute w-[225px] h-[300px] top-[34px] left-[75px] bg-[#fcf5ed] rounded-[20px] overflow-hidden rotate-[130.00deg]">
                <div className="absolute top-[219px] left-[46px] [font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-8 whitespace-nowrap">
                  WHATSAPP
                </div>
                <img
                  className="absolute w-[206px] h-[206px] top-[3px] left-2.5 rotate-[-130.00deg]"
                  alt="Ic outline whatsapp"
                  src="https://c.animaapp.com/WzNSGM6X/img/ic-outline-whatsapp-5.svg"
                />
              </div>
            )}

            <div className="w-[225px] left-[75px] top-[34px] rotate-[130.00deg] h-[300px] rounded-[20px] bg-white absolute">
              <div className="w-[290px] -left-8 top-[-27px] h-[290px] absolute">
                <img
                  className="w-[206px] left-[42px] top-[42px] rotate-[-130.00deg] h-[206px] absolute"
                  alt="Iconoir twitter"
                  src={
                    state.property1 === "variant-5"
                      ? "https://c.animaapp.com/WzNSGM6X/img/iconoir-twitter-5.svg"
                      : "https://c.animaapp.com/WzNSGM6X/img/iconoir-twitter-4.svg"
                  }
                />
                <div className="[font-family:'Neue_Haas_Grotesk_Text_Pro-55Roman',Helvetica] left-[90px] tracking-[0] text-2xl top-[246px] text-black font-normal text-center whitespace-nowrap leading-8 absolute">
                  TWITTER
                </div>
              </div>
              <div className="w-5 left-[200px] top-[276px] rotate-[-40.00deg] h-5 rounded-[10px] bg-black absolute">
                <img
                  className="w-[17px] left-px top-1 rotate-[-90.00deg] h-3 absolute"
                  alt="Vector"
                  src={
                    state.property1 === "variant-5"
                      ? "https://c.animaapp.com/WzNSGM6X/img/vector-15-6.svg"
                      : "https://c.animaapp.com/WzNSGM6X/img/vector-15-5.svg"
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "variant-3",
        };

      case "mouse_enter_1172":
        return {
          property1: "variant-2",
        };

      case "mouse_enter_1178":
        return {
          property1: "variant-6",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave_1172":
        return {
          property1: "variant-6",
        };

      case "mouse_enter":
        return {
          property1: "variant-3",
        };
    }
  }

  if (state.property1 === "variant-6") {
    switch (action) {
      case "mouse_leave_1178":
        return {
          property1: "default",
        };

      case "mouse_enter":
        return {
          property1: "variant-3",
        };

      case "mouse_enter_1172":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "mouse_enter_1243":
        return {
          property1: "variant-5",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "mouse_leave_1243":
        return {
          property1: "variant-4",
        };
    }
  }

  return state;
}
