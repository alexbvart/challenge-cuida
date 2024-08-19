
interface FacebookIconProps {
  className? : string
}
export const FacebookIcon = ({className}:FacebookIconProps) => (

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
      d="M29 22.69c0 3.64-2.17 5.81-5.81 5.81H22c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 0 0-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 0 0-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C11.17 28.5 9 26.33 9 22.68v-8.37c0-3.64 2.17-5.81 5.81-5.81h8.38c3.64 0 5.81 2.17 5.81 5.81v8.38Z"
    />
  </svg>
)
