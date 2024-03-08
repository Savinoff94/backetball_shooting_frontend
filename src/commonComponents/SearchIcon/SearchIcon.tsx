type SearchIconProps = {
    width?: string,
    height?: string,
}


function SearchIcon({width = "24", height = "24"} : SearchIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#486BEA"
        strokeLinecap="round"
        strokeWidth="2"
        d="M4 21l5-5"
      ></path>
      <path
        stroke="#486BEA"
        strokeWidth="2"
        d="M19.5 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
      ></path>
    </svg>
  );
}

export default SearchIcon;