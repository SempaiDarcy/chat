import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  ElementType,
  ReactNode,
} from 'react'

import { Typography as AntdTypography } from 'antd'

const { Title, Paragraph, Text } = AntdTypography

type OwnProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  variant?: CustomTypographyVariant
  type?: CustomTypographyType
  level?: 1 | 2 | 3 | 4 | 5
}

type TypographyProps<T extends ElementType> = OwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof OwnProps<T>>

export const Typography = <T extends ElementType = 'span'>(
  { as, children, variant = 'text', level, ...props }: TypographyProps<T>,
  ref: React.Ref<any> // AntD doesn't export specific ref types for Typography components
) => {
  const Component = as || elementsMap[variant]

  return (
    <Component ref={ref} level={level} {...props}>
      {children}
    </Component>
  )
}

export const TypedTypography = forwardRef(Typography) as <
  T extends ElementType = 'span',
>(
  props: TypographyProps<T> & { ref?: React.Ref<any> }
) => React.ReactElement

// eslint-disable-next-line react-refresh/only-export-components
export const elementsMap: Record<
  CustomTypographyVariant,
  React.ComponentType<any>
> = {
  text: Text,
  title: Title,
  paragraph: Paragraph,
}

export type CustomTypographyVariant = 'text' | 'title' | 'paragraph'
export type CustomTypographyType =
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
