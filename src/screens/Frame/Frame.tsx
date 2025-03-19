import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const Frame = (): JSX.Element => {
  const navItems = ["Feature", "About", "Blog"];

  return (
    <div className="bg-[#0b0c0f] flex flex-row justify-center w-full">
      <div className="bg-[#0b0c0f] overflow-hidden w-full max-w-[1920px] h-screen relative">
        {/* Background elements */}
        <div className="absolute w-full h-full inset-0 overflow-hidden">
          <div className="absolute w-[2480px] h-[1110px] top-[807px] left-[-289px] bg-[#450f9e4c] rounded-[1240px/555px] blur-[78.65px]" />
          <div className="absolute w-[807px] h-[784px] top-[466px] left-[1021px] bg-[#450f9e80] rounded-[403.5px/392px] blur-[78.65px]" />

          {/* Grid lines */}
          <div className="relative w-full h-full">
            {Array.from({ length: 8 }).map((_, index) => (
              <img
                key={`line-${index}`}
                className={`absolute w-[455px] h-[945px] top-[135px] left-[${index * 198}px] object-cover`}
                alt="Grid line"
                src="/line-139.svg"
              />
            ))}

            <img
              className="absolute w-full h-[806px] top-0 left-0"
              alt="Ellipse background"
              src="/ellipse-1247.svg"
            />
            <img
              className="absolute w-full h-[973px] top-0 left-0"
              alt="Ellipse background"
              src="/ellipse-1247.svg"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute w-[1150px] h-[498px] top-[487px] left-[469px]">
            {Array.from({ length: 14 }).map((_, index) => (
              <img
                key={`frame-${index}`}
                className={`absolute w-[25px] h-6 ${
                  index === 0
                    ? "top-[123px] left-[191px]"
                    : index === 1
                      ? "top-0 left-[51px]"
                      : index === 2
                        ? "top-[106px] left-0"
                        : index === 3
                          ? "top-[246px] left-[134px] w-6"
                          : index === 4
                            ? "top-[214px] left-[345px] w-[23px] h-[23px]"
                            : index === 5
                              ? "top-[348px] left-[281px] w-6 h-[23px]"
                              : index === 6
                                ? "top-[275px] left-[513px] w-[26px]"
                                : index === 7
                                  ? "top-[422px] left-[442px] w-7"
                                  : index === 8
                                    ? "top-[307px] left-[694px] w-[27px]"
                                    : index === 9
                                      ? "top-[466px] left-[618px] w-[27px] h-[25px]"
                                      : index === 10
                                        ? "top-[298px] left-[895px] w-7"
                                        : index === 11
                                          ? "top-[473px] left-[812px] w-[29px] h-[26px]"
                                          : index === 12
                                            ? "top-[233px] left-[1123px] w-[27px] h-[31px]"
                                            : "top-[436px] left-[1027px] w-7 h-[26px]"
                }`}
                alt={`Decorative element ${index + 1}`}
                src={`/frame-100000507${index + 1}.svg`}
              />
            ))}
          </div>

          <img
            className="absolute w-[768px] h-px top-[88px] left-[834px]"
            alt="Line"
            src="/line-146.svg"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center h-full">
          {/* Navigation bar */}
          <div className="w-full max-w-[1400px] mx-auto px-8">
            <Card className="mt-7 px-12 py-5 bg-[#12141a99] border-none backdrop-blur-[14.95px] rounded-[28px]">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-[7.23px]">
                  <div className="relative w-[49.17px] h-[47px]">
                    <div className="relative w-[49px] h-[47px]">
                      <img
                        className="absolute w-[39px] h-[39px] top-2 left-0"
                        alt="Subtract"
                        src="/subtract.svg"
                      />
                      <div className="absolute w-[33px] h-[33px] top-0 left-4 bg-white rounded-[16.63px]" />
                    </div>
                  </div>
                  <div className="[font-family:'Clash_Display-Regular',Helvetica] font-normal text-white text-[30.7px]">
                    Hackathon.dev
                  </div>
                </div>

                {/* Navigation links */}
                <div className="flex items-center gap-[55px]">
                  {navItems.map((item, index) => (
                    <Button
                      key={index}
                      variant="link"
                      className="[font-family:'Clash_Display-Regular',Helvetica] font-normal text-white text-[20px] p-0 hover:text-purple-400 transition-colors"
                    >
                      {item}
                    </Button>
                  ))}
                </div>

                {/* Auth buttons */}
                <div className="flex items-center gap-4">
                  <Button className="px-8 py-2 bg-[#1e1c1b] hover:bg-[#2a2827] rounded-[12px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-[18px] transition-colors">
                    Register
                  </Button>
                  <Button className="px-8 py-2 rounded-[12px] [background:linear-gradient(90deg,rgba(110,39,224,1)_0%,rgba(70,15,158,1)_100%)] hover:opacity-90 [font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-[18px] transition-opacity">
                    Submit
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Hero section */}
          <div className="w-full max-w-[1400px] mx-auto px-8 mt-32 flex items-center justify-between">
            <div className="flex flex-col items-start gap-12 max-w-[600px]">
              {/* Hero text */}
              <div className="space-y-6">
                <h1 className="[font-family:'Clash_Display-Regular',Helvetica] font-normal text-[72px] leading-[1.1] [background:linear-gradient(143deg,rgba(255,255,255,1)_0%,rgba(248,248,248,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                  The World's Largest Hackathon
                </h1>
                <p className="text-[20px] text-gray-300 leading-relaxed max-w-[520px]">
                  Join thousands of developers worldwide competing for over $1M+ in prizes. 
                  Build the next generation of technology and showcase your skills to industry leaders.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-4">
                <Button className="px-8 py-3 rounded-[12px] [background:linear-gradient(90deg,rgba(110,39,224,1)_0%,rgba(70,15,158,1)_100%)] hover:opacity-90 [font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-[18px] transition-opacity">
                  Register Now
                </Button>
                <Button className="px-8 py-3 bg-[#1e1c1b] hover:bg-[#2a2827] rounded-[12px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-[18px] transition-colors">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative w-[650px] h-[650px]">
              <img
                className="absolute w-full h-full right-0 top-0 object-contain"
                alt="AI Robot"
                src="/31772-1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};