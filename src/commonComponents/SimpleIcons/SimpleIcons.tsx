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


export {
  AnimatedPlusIcon,
  AnimatedCrossIcon,
  type IconProps,
  type AnimatedIconProps
}