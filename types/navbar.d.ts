import { CSSProperties } from 'react'

export interface NavbarProps {
  title?: string, // 标题
  extraLeft?: JSX.Element,
  extraRight?: JSX.Element,
  style?: string | CSSProperties,
  className?: string,
}