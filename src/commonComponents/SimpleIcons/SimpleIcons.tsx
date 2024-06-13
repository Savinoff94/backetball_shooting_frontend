import React, { ReactElement } from "react";

type IconProps = {
    width?: string,
    height?: string,
    classes?: string
}
type AnimatedIconProps = {
    width?: string,
    height?: string,
    isLoading?: boolean
}

function PlusIcon({width = '40', height = '40', classes = ''} : IconProps) {
  return (
    <svg
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h16m-8-8v16"
      ></path>
    </svg>
  );
}

function CrossIcon({width = '40', height = '40', classes = ''} : IconProps) {
  return (
    <svg
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="-3.5 0 19 19"
    >
    <path d="M11.383 13.644A1.03 1.03 0 019.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 11-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 111.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 011.455 1.456L7.455 9.716z"></path>
    </svg>
  );
}

function AnimatedIconWrapper(classes: string, Icon: React.ComponentType<IconProps>) {
  return function({ width, height, isLoading }: AnimatedIconProps): ReactElement {
    return <Icon width={width} height={height} classes={isLoading ? classes : ''} />;
  }
}

const AnimatedPlusIcon = AnimatedIconWrapper('transition rounded-lg duration-200 border-2 border-red-500', PlusIcon);
const AnimatedCrossIcon = AnimatedIconWrapper('transition rounded-lg duration-200 border-2 border-red-500', CrossIcon);

function MicrophoneIcon({width = '90', height = '90', classes = 'relative'} : IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={classes}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="black"
        fillRule="evenodd"
        d="M12 4.5c-1.686 0-3 1.305-3 2.85v4.8C9 13.695 10.314 15 12 15s3-1.305 3-2.85v-4.8c0-1.545-1.314-2.85-3-2.85zM7.5 7.35C7.5 4.919 9.544 3 12 3s4.5 1.919 4.5 4.35v4.8c0 2.431-2.044 4.35-4.5 4.35s-4.5-1.919-4.5-4.35v-4.8zm-.75 5.4c0 2.394 2.253 4.5 5.25 4.5s5.25-2.106 5.25-4.5h1.5c0 3.168-2.7 5.635-6 5.963V21h-1.5v-2.287c-3.3-.328-6-2.795-6-5.963h1.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}


export {
  AnimatedPlusIcon,
  AnimatedCrossIcon,
  type IconProps,
  type AnimatedIconProps,
  MicrophoneIcon
}