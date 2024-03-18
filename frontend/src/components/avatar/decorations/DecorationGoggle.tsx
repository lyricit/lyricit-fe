const DecorationCap = ({ color = '#f266ab' }: { color?: string }) => (
  <>
    <defs id="defs1">
      <linearGradient id="linearGradient27">
        <stop
          stopColor={color}
          stopOpacity={0.89803922}
          offset="0.31974518"
          id="stop29"
        />
        <stop
          stopColor="#2cd3e1"
          stopOpacity={0.89999998}
          offset="1"
          id="stop28"
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient27"
        id="linearGradient28"
        x1="40.395725"
        y1="11.557877"
        x2="85.4161"
        y2="48.141884"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <path
      fill="url(#linearGradient28)"
      opacity="1"
      stroke="#000000"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeDasharray="none"
      strokeOpacity={1}
      paintOrder="normal"
      d="m 32.626361,27.223512 c 0,0 2.173323,-6.4422 7.498639,-10.848512 19.973894,-6.8563149 56.232112,2.23975 61.43566,19.929379 0.6885,4.290632 -6.823821,13.206531 -10.154252,14.314249 C 79.092342,45.654746 69.012814,40.713902 60.5,38 57.534786,35.92348 58.919754,31.987505 57.625,29.375 53.460908,31.881989 51.715223,35.774013 45.3125,35 39.720159,34.396254 34.627719,31.414662 34.627719,31.414662 Z"
      id="path18"
    />
    <path
      fill="#000000"
      fillOpacity="1"
      stroke="#000000"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeDasharray="none"
      strokeOpacity={1}
      d="m 91.406408,50.618628 c 9.217912,1.505174 9.836852,4.432504 12.111572,8.414198 0.89037,-6.597976 0.52402,-14.964068 -1.95732,-22.728447 M 32.626361,27.223512 28.875,34.275744 c 1.603485,-2.45231 3.938472,-2.984428 6.875,-1.9375"
      id="path19"
    />
  </>
);

export default DecorationCap;
