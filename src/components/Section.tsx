import { ReactNode } from "react"

type sectionProps ={
  message:string,
  children:ReactNode
}

const Section= ({children,message=`My Heading goes Here`}:sectionProps) => {
  return (
    <div>
      <h4>{message}</h4>
      {children}
    </div>
  )
}

export default Section
