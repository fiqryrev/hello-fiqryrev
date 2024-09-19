declare module '*.mdx' {
  import { ReactNode } from 'react'
  const content: ReactNode
  export default content
}

declare module 'hast' {
  export type Node = import('unist').Node
  export type Parent = import('unist').Parent
  export type Literal = import('unist').Literal
}

declare module 'mdx/types' {
  // Add any MDX-specific types here if needed
}