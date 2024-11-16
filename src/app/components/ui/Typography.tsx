'use client'

import { useEffect, useState } from 'react'

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

export const Heading1 = ({ children, className = '' }: HeadingProps) => {
  const hasMounted = useHasMounted()
  
  if (!hasMounted) {
    return null // or a loading state
  }

  return (
    <h1 className={`text-3xl md:text-8xl font-Black leading-tight ${className}`}>
      {children}
    </h1>
  )
}

export const Heading2 = ({ children, className = '' }: HeadingProps) => {
  const hasMounted = useHasMounted()
  
  if (!hasMounted) {
    return null
  }

  return (
    <h2 className={`text-[34px] md:text-6xl font-Black leading-tight ${className}`}>
      {children}
    </h2>
  )
}

export const Heading3 = ({ children, className = '' }: HeadingProps) => {
  const hasMounted = useHasMounted()
  
  if (!hasMounted) {
    return null
  }

  return (
    <h3 className={`text-[26px] md:text-4xl font-Black leading-tight ${className}`}>
      {children}
    </h3>
  )
}

export const Heading4 = ({ children, className = '' }: HeadingProps) => {
  const hasMounted = useHasMounted()
  
  if (!hasMounted) {
    return null
  }

  return (
    <h4 className={`text-xl md:text-3xl font-Quicksand leading-tight ${className}`}>
      {children}
    </h4>
  )
}

export const Heading5 = ({ children, className = '' }: HeadingProps) => {
  const hasMounted = useHasMounted()
  
  if (!hasMounted) {
    return null
  }

  return (
    <h5 className={`text-xl md:text-2xl font-Quicksand font-light leading-tight ${className}`}>
      {children}
    </h5>
  )
}

export const Heading6 = ({ children, className = '' }: HeadingProps) => {
  const hasMounted = useHasMounted()
  
  if (!hasMounted) {
    return null
  }

  return (
    <h6 className={`text-base md:text-xl font-semibold leading-tight ${className}`}>
      {children}
    </h6>
  )
}

export const BodyText = ({ children, className = '' }: HeadingProps) => {
  const hasMounted = useHasMounted()
  
  if (!hasMounted) {
    return null
  }

  return (
    <p className={`text-[21px] font-Quicksand ${className}`}>
      {children}
    </p>
  )
}

export const SmallText = ({ children, className = '' }: HeadingProps) => {
  const hasMounted = useHasMounted()
  
  if (!hasMounted) {
    return null
  }

  return (
    <p className={`font-thin text-sm font-Quicksand leading-relaxed ${className}`}>
      {children}
    </p>
  )
} 