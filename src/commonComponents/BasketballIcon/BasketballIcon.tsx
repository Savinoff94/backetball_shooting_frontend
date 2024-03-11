type BasketballIconProps = {
    width?: string,
    height?: string,
    isLoading?: boolean
}

function BasketballIcon({width='40', height='40', isLoading=false} : BasketballIconProps) {
    return (
      <svg
        className={isLoading ? "animate-bounce" : ''}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="#fcba03"
        version="1.1"
        viewBox="0 0 51.054 51.055"
        xmlSpace="preserve"
        strokeWidth="1px"
      >
        <path className="" d="M44.242 8.227a25.733 25.733 0 00-3.535-3.175C36.458 1.894 31.215 0 25.527 0 19.176 0 13.375 2.346 8.902 6.198a25.696 25.696 0 00-3.288 3.398C2.11 13.968.001 19.501.001 25.526c0 6.022 2.109 11.559 5.612 15.929a25.654 25.654 0 003.289 3.4c4.472 3.853 10.274 6.199 16.625 6.199 6.837 0 13.044-2.721 17.632-7.113a25.743 25.743 0 003.104-3.585c3.001-4.185 4.79-9.298 4.79-14.829-.001-6.678-2.598-12.746-6.811-17.3zm-3.119 3.595a20.725 20.725 0 015.056 11.416h-8.622a20.677 20.677 0 013.566-11.416zm-8.301 11.416H27.66V4.859a20.68 20.68 0 019.943 3.776 25.362 25.362 0 00-4.781 14.603zM23.395 4.855v18.383H17.7c-.461-5.134-2.454-9.829-5.509-13.642a20.701 20.701 0 0111.204-4.741zM8.902 13.093a20.704 20.704 0 014.024 10.146H4.878a20.7 20.7 0 014.024-10.146zM4.84 27.506h8.126a20.68 20.68 0 01-4.063 10.452A20.691 20.691 0 014.84 27.506zm12.877 0h5.676v18.689a20.718 20.718 0 01-11.203-4.74 25.386 25.386 0 005.527-13.949zM27.66 46.2V27.506h5.502a25.485 25.485 0 006.461 13.26c-3.219 2.977-7.368 4.961-11.963 5.434zm15.084-9.032a20.766 20.766 0 01-4.791-9.662h8.262a20.691 20.691 0 01-3.471 9.662z"></path>
      </svg>
    );
  }
  
  export default BasketballIcon;