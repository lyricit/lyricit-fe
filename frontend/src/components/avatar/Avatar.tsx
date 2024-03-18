import type { DecorationType, FaceType } from '@/types/avatar';
import { AvatarDecoration } from './decorations';
import { AvatarFace } from './faces';

const Avatar = ({
  size = 120,
  skinColor = '#ffb84c',
  decoColor,
  faceType = 'default',
  decoType = 'default',
}: {
  size?: number;
  skinColor?: string;
  decoColor?: string;
  faceType?: keyof FaceType;
  decoType?: keyof DecorationType;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      version="1.1"
      id="avatar"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="avatar"
    >
      <defs id="defs1" />
      <g id="head">
        <circle
          fill={skinColor}
          fillOpacity="1"
          stroke="#000000"
          strokeWidth={3.65729}
          strokeDasharray="none"
          id="path1"
          cx="60"
          cy="66.509811"
          r="43.306145"
        />
      </g>
      <g id="eyes">
        <g
          id="eye-left"
          transform="matrix(0.36572831,0,0,0.36572831,-17.630029,-13.385536)"
        >
          <ellipse
            fill="#ffffff"
            fillOpacity="1"
            stroke="#000000"
            strokeWidth={7.94613}
            strokeDasharray="none"
            id="path2"
            cx="212.00545"
            cy="67.125366"
            rx="12.969934"
            ry="26.123192"
            transform="matrix(0.83767243,0.54617295,-0.40929929,0.91240018,0,0)"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray="none"
            d="m 127.34943,175.24778 c 0,0 9.9273,-5.27871 24.89046,-4.70946 16.82447,0.40661 22.60128,8.61289 22.60128,8.61289"
            id="path3"
          />
          <path
            fill="#000000"
            fillOpacity="1"
            stroke="none"
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray="none"
            strokeOpacity={1}
            d="m 95.631013,133.83981 c -12.96765,-1.84806 -19.842142,19.1331 -19.842142,19.1331 16.560862,-2.70265 27.404799,4.07204 27.404799,4.07204 0,0 4.12687,-20.47313 -7.562657,-23.20514 z"
            id="path445-8"
            transform="matrix(1.1042367,-0.10417597,0.09310871,0.90144215,38.743108,40.667837)"
          />
        </g>
        <g
          id="eye-right"
          transform="matrix(0.40385062,-0.0381001,0.03405249,0.32968292,-3.4605778,1.4878436)"
        >
          <path
            id="path2-0"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth={8.29835}
            transform="matrix(0.81269253,0.58269275,-0.3765712,0.92638768,0,0)"
            d="M 225.85562,59.662987 A 13.252763,27.882301 0 0 1 212.60286,87.545288 13.252763,27.882301 0 0 1 199.3501,59.662987 13.252763,27.882301 0 0 1 212.60286,31.780685 13.252763,27.882301 0 0 1 225.85562,59.662987 Z"
          />
          <path
            fill="none"
            stroke="#000000"
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray="none"
            d="m 199.30528,183.20445 c 0,0 32.66168,-8.97046 46.34739,8.39543"
            id="path444"
            transform="matrix(0.89686349,0.10364683,-0.09263579,1.098628,-30.979982,-48.694424)"
          />
          <path
            fill="#000000"
            fillOpacity="1"
            stroke="none"
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray="none"
            strokeOpacity={1}
            d="m 159.11107,152.46733 c -11.45901,-3.37439 -19.5681,18.96358 -19.5681,18.96358 15.10319,-1.25272 24.20115,7.31408 24.20115,7.31408 0,0 5.59778,-22.06462 -4.63305,-26.27766 z"
            id="path445"
          />
        </g>
      </g>
      <AvatarFace type={faceType} />
      <AvatarDecoration type={decoType} color={decoColor} />
    </svg>
  );
};

export default Avatar;
