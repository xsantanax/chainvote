'use client'
import React, { useEffect, useRef, useState } from 'react'

function MyObserver() {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callback = (entries: any) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
    console.log('intersecting')
    console.log('isVisible', isVisible)
  }

  const options = { root: null, rootMargin: '100px' }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return (
    <div style={{ display: `${isVisible ? 'block' : 'none'}` }}>
      <div ref={containerRef} className="card">
        This is a card
      </div>
      <div className="card show"> This is a card</div>
      <div className="card"> This is a card</div>
      <div className="card"> This is a card</div>
      <div className="card"> This is a card</div>
      <style>
        {`
            .card {
              display:none;
            }
            .card.show {
              display:block;
            }
        `}
      </style>
    </div>
  )
}

export default MyObserver
