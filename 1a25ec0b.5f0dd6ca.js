(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{107:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var r=a(0),n=a.n(r);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},b=Object.keys(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var j=n.a.createContext({}),p=function(t){var e=n.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},i=function(t){var e=p(t.components);return n.a.createElement(j.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,b=t.originalType,c=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),i=p(a),m=r,o=i["".concat(c,".").concat(m)]||i[m]||d[m]||b;return a?n.a.createElement(o,l(l({ref:e},j),{},{components:a})):n.a.createElement(o,l({ref:e},j))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var O in e)hasOwnProperty.call(e,O)&&(l[O]=e[O]);l.originalType=t,l.mdxType="string"==typeof t?t:r,c[1]=l;for(var j=2;j<b;j++)c[j]=a[j];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return l})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return p}));var r=a(2),n=a(6),b=(a(0),a(107)),c={id:"features",title:"Features Compared",sidebar_label:"Features Compared",slug:"/Features"},l={unversionedId:"features",id:"features",isDocsHomePage:!1,title:"Features Compared",description:"BlueMicro is currently missing some features found in other popular firmware. This table compares the features supported by BlueMicro, QMK and ZMK:",source:"@site/docs/features.md",slug:"/Features",permalink:"/docs/Features",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/features.md",version:"current",sidebar_label:"Features Compared",sidebar:"someSidebar",previous:{title:"Keyboards",permalink:"/docs/keyboards"},next:{title:"Installing Tools",permalink:"/docs/tools"}},O=[],j={rightToc:O};function p(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(b.b)("wrapper",Object(r.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"BlueMicro is currently missing some features found in other popular firmware. This table compares the features supported by BlueMicro, QMK and ZMK:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Feature")),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"th"},{href:"http://bluemicro.jpconstantineau.com/"}),"BlueMicro")),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"th"},{href:"https://github.com/joric/nrfmicro/wiki/QMK"}),"QMK nRF52 Fork")),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"th"},{href:"https://zmkfirmware.dev/"}),"ZMK")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Connectivity and Power Saving Options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Low Latency BLE Support"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Multi-Device BLE Support (Several Computers)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"USB HID"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Battery Reporting (BLE Battery Service)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Low Power Sleep States"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Low Active Power Usage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Firmware Options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Keymaps and Layers"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Basic Keycodes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Basic consumer (Media) Keycodes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mouse Keys"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hold-Tap (which includes Mod-Tap and Layer-Tap)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"One Shot Keys"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Combo Keys"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Macros"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Keyboard and Controller Board Hardware Options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Split Keyboard Support"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Key Backlight LED PWM Control"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"RGB Underglow"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Encoders"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"OLED Display Support"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Low Power Mode (VCC Shutoff)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Microcontroller Support")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Support for Nordic nRF52 Microcontrollers"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Support for Wide Range of ARM Microcontrollers"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Support for AVR/8 Bit Microcontrollers"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Tooling and Build Configuration")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Serial Debug CLI"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hardware Troubleshooting tools"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User Configuration Repositories"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Realtime Keymap Updating"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ud83d\udca1")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Feature"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"BlueMicro"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"QMK"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Wireless"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Native BLE"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Using add-on module")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* HID Service"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* Device Information Service"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* Battery Service"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(?)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* Wireless Device Firmware Update"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* Central/Peripheral Communications"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* Dongle free"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Depends")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Accented Keys \xe8\xe9\xea"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes (windows)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"N-Key rollover"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"HID standard: Mods + 6 keys"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Advanced Keycodes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* Layers"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* Momentary Keys"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* One Shot Keys"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* Toggle Keys"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"* Mod-Tap Keys"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Audio"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Auto Shift"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Key Timing"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Leader Key"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Future"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Stenography"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial No NKRO."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Tap Dance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Tap/Double Tap"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Tap/Hold"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))))))}p.isMDXComponent=!0}}]);