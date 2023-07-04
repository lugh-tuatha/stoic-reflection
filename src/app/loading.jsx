'use client'
import React, { useState } from 'react'
import HashLoader from "react-spinners/HashLoader";

export default function Loading() {
  let [color, setColor] = useState("#9D72E8");

  return (
    <div className="sweet-loading w-screen h-screen flex justify-center items-center">
      <HashLoader
        color={color}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
