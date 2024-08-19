
interface YoutubeIconProps {
  className? : string
}
export const YoutubeIcon = ({className}:YoutubeIconProps) => (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={37}
    fill="none"
    className={className}
  >
    <rect
      width={37}
      height={37}
      x={0.5}
      fill="#9738F5"
      fillOpacity={0.1}
      rx={18.5}
    />
    <path
      fill="#8764C1"
      d="M24 10.5H14c-3 0-5 2-5 5v6c0 3 2 5 5 5h10c3 0 5-2 5-5v-6c0-3-2-5-5-5Zm-3.11 9.03-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.17.82-1.63 1.82-1.03l2.47 1.48c.95.58.95 1.5 0 2.07Z"
    />
  </svg>
)
