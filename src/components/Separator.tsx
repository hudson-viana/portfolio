import React from 'react'

type SeparatorProps = {
  hiddenWhenSM: boolean
}

export default function Separator({hiddenWhenSM}:SeparatorProps) {
  return (
    <div className={` mt-5 mb-5 mx-8 flex-grow border-t border-[#b3b5ba] ${hiddenWhenSM ? "sm:hidden" : ""}`}></div>
  )
}
