(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),c=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=c(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=c(r),p=a,h=b["".concat(l,".").concat(p)]||b[p]||d[p]||i;return r?n.a.createElement(h,o(o({ref:t},s),{},{components:r})):n.a.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},61:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return c}));var a=r(2),n=r(6),i=(r(0),r(113)),l={id:"flash",title:"Flashing Firmware to your keyboard",slug:"/flash"},o={unversionedId:"flash",id:"flash",isDocsHomePage:!1,title:"Flashing Firmware to your keyboard",description:"Preparing your build and flashing environment",source:"@site/docs/flashing_firmware.md",slug:"/flash",permalink:"/docs/flash",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/flashing_firmware.md",version:"current",sidebar:"someSidebar",previous:{title:"Building Firmware",permalink:"/docs/build"},next:{title:"Customizing Adafruit BSP",permalink:"/docs/customize_BSP"}},u=[{value:"Building from Windows PowerShell script",id:"building-from-windows-powershell-script",children:[]},{value:"Building from macOS shell script",id:"building-from-macos-shell-script",children:[]},{value:"Building from Linux",id:"building-from-linux",children:[]}],s={rightToc:u};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"preparing-your-build-and-flashing-environment"},"Preparing your build and flashing environment"),Object(i.b)("p",null,"Follow the instructions on the Arduino BSP Setup page for the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://learn.adafruit.com/bluefruit-nrf52-feather-learning-guide/arduino-bsp-setup"}),"Adafruit nRF52 Feather"),".  The BlueMicro_BLE firmware uses the same libraries and bootloader."),Object(i.b)("p",null,"Depending on whether your hardware has on-board serial or not, you will need a serial USB adapter.  Note that the hardware is +3.3V.  As such, a standard +5V serial adapter may damage the nRF52 processor."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"macOS installation")),Object(i.b)("p",null,'While following the above Adafruit article, to install nrfutil on macOS High Sierra the following commands may be required for part 2 "Third Party Tool Installation".'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo python get-pip.py")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo pip install pip==9.0.3")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo pip install tornado nosem")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo pip install nrfutil==0.5.3 --ignore-installed six"))),Object(i.b)("p",null,'This will install python pip and downgrade it to version 9 (nrfutil fails with "No module named pip.req" when using the latest version). Next install the tornado and nosem packages and finally the version of nrfutil that can be used with Adafruits library (DFU via Serial).'),Object(i.b)("h1",{id:"building-the-firmware-for-your-keyboard"},"Building the Firmware for your Keyboard"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clone the Repository"),Object(i.b)("li",{parentName:"ul"},'If the keyboard already exists in the Keyboards folder, copy the keyboard_config.h and keymap.h files to the "firmware" folder'),Object(i.b)("li",{parentName:"ul"},"If example files are not available, take the keyboard config files that are the closest to yours."),Object(i.b)("li",{parentName:"ul"},'Make necessary adjustments to the two files.  keyboard_config.h contains the configuration that should be relevant to the keyboard, regardless of the keymap.   keymap.h is "your personal" keymap file.'),Object(i.b)("li",{parentName:"ul"},"Compile the firmware"),Object(i.b)("li",{parentName:"ul"},"Flash the firmware by serial.  Depending if the hardware uses the DTR line to automatically  reset the chip, you may have to manually press reset just before the flashing command gets called.  If it doesn't work, make sure that the the lines are crossed (TX -> RX and RX <- TX).")),Object(i.b)("h2",{id:"building-from-windows-powershell-script"},"Building from Windows PowerShell script"),Object(i.b)("p",null,"Has been tested on Windows 7 and 10."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Quick and easy")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Double cick the build-windows-shortcut in the build folder"),Object(i.b)("li",{parentName:"ul"},"Follow on screen instructions")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Command line with parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Press the windows key, type "powershell", right click "Windows PowerShell", select "Run as Administrator", enter the command "Set-ExecutionPolicy Bypass" and select Yes'),Object(i.b)("li",{parentName:"ul"},"Run PowerShell and navigate to the build directory"),Object(i.b)("li",{parentName:"ul"},"Run ./build-windows keyboard:keymap:target"),Object(i.b)("li",{parentName:"ul"},'You can replace either keyboard, keymap or target with "all" as a wildcard'),Object(i.b)("li",{parentName:"ul"},"Optional switches are -verbose and -continueOnError")),Object(i.b)("p",null,"Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"./build-windows all"),Object(i.b)("li",{parentName:"ul"},"./build-windows ErgoTravel -verbose"),Object(i.b)("li",{parentName:"ul"},"./build-windows gherkin:default -continueOnError"),Object(i.b)("li",{parentName:"ul"},"./build-windows iris:default:left")),Object(i.b)("h2",{id:"building-from-macos-shell-script"},"Building from macOS shell script"),Object(i.b)("p",null,"The Arduino IDE must be installed in the /Application directory. Tested on macOS High Sierra."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Quick and easy")),Object(i.b)("p",null,"After opening this way once you can simply double click to execute"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Right click the build-macos script in the build folder and choose open, then press open on the developer warning"),Object(i.b)("li",{parentName:"ul"},"Follow on screen instructions")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Terminal script with parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run ./build-macos keyboard:keymap:target"),Object(i.b)("li",{parentName:"ul"},'You can replace either keyboard, keymap or target with "all" as a wildcard'),Object(i.b)("li",{parentName:"ul"},"Optional switches are -v for verbose output and -c for continue on build error")),Object(i.b)("p",null,"Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"./build-macos all"),Object(i.b)("li",{parentName:"ul"},"./build-macos -v ErgoTravel "),Object(i.b)("li",{parentName:"ul"},"./build-macos -c gherkin:default"),Object(i.b)("li",{parentName:"ul"},"./build-macos iris:default:left")),Object(i.b)("h2",{id:"building-from-linux"},"Building from Linux"),Object(i.b)("p",null,"Follow the instructions ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://learn.adafruit.com/bluefruit-nrf52-feather-learning-guide/arduino-bsp-setup"}),"here"),", then\nfind your arduino avr installation (should be somewhere in /usr/share/arduino/hardware/) and replace the arduinoAvrPath\nvariable in build-linux with yours."),Object(i.b)("p",null,"Usage is the same as detailed in the windows and mac sections."),Object(i.b)("h1",{id:"need-to-flash-the-bootloader"},"Need to flash the bootloader?"),Object(i.b)("p",null,"Follow the instructions on the Flashing the Bootloader page for the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://learn.adafruit.com/bluefruit-nrf52-feather-learning-guide/flashing-the-bootloader"}),"Adafruit nRF52 Feather"),".  You will need a j-link and connect it to the SWD lines of the hardware."),Object(i.b)("p",null,"In the case that you are customizing your bootloader, or progamming a non-feather board using SWD, the following steps should be taken (provided by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://forums.adafruit.com/viewtopic.php?f=57&t=167184#wrap"}),"reschue"),")  Read this post in details if you need to follow these steps."),Object(i.b)("p",null,"These are specific to the nRF52832 but can be adapted to the 840 as well. Note that with a custom bootloader, the 'Burn Bootloader' feature in the Arduino IDE needs to be used at least once if you're starting with a blank chip."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Open up Arduino, select the "Adafruit Feather nrf52832" board under "Tools"'),Object(i.b)("li",{parentName:"ul"},'Also under "Tools", select "Programmer: J-Link for Bluefruit nrf52"'),Object(i.b)("li",{parentName:"ul"},"Connect the Segger J-Link to your computer"),Object(i.b)("li",{parentName:"ul"},"Connect the J-Link to your board, and power it up."),Object(i.b)("li",{parentName:"ul"},'Select "Burn Bootloader" under "Tools". It should complete without errors. At this point the red LED (GPIO 17) should begin the dim-bright-dim cycle. This is the idle loop of the bootloader waiting for a application program to be loaded.'),Object(i.b)("li",{parentName:"ul"},"Install the Segger JLink command line tools, if you've not already done so."),Object(i.b)("li",{parentName:"ul"},'In a DOS "Command Prompt" window enter the command: nrfjprog --memwr 0x7F000 --val 0x01'),Object(i.b)("li",{parentName:"ul"},'Now, back in the Arduino IDE, select "Upload Using Programmer" and you should be good to go.')),Object(i.b)("p",null,'You can make changes to your sketch and repeat the Upload Using Programmer as many times as you wish without having to execute any of the "nrfjprog" commands.'))}c.isMDXComponent=!0}}]);