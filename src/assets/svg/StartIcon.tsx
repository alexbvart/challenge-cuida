import styles from './iconosSvg.module.css'

interface StartIcomProps {
    className? : string
  }
  export const StartIcom = ({className}:StartIcomProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    className={`${styles.iconStart} ${className}`}
  >
    <path
      fill="#F3CC40"
      d="m6.333 1.05.843 1.686c.115.23.421.46.677.498l1.526.255c.977.167 1.207.869.504 1.571L8.696 6.255a1.043 1.043 0 0 0-.25.868l.339 1.475c.268 1.163-.351 1.616-1.38 1.01l-1.43-.85a1.029 1.029 0 0 0-.945 0l-1.437.843c-1.028.607-1.648.153-1.38-1.009l.34-1.475c.063-.275-.052-.664-.25-.869L1.122 5.067c-.703-.703-.473-1.411.504-1.571l1.526-.256c.256-.044.562-.268.677-.498l.843-1.686c.454-.92 1.207-.92 1.66-.006Z"
    />
  </svg>
)
