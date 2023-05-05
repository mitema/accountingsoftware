"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {

  const [value, setValue] = useState<String>("")
  function handleSubmit()  {
    console.log("target")
  }

  function handleChange() {
    console.log("change")
  }
  return (
    <form onSubmit={handleSubmit}>
     <label>
          Name
            <input
            name="numberOfGuests"
            type="number"
            value={""}
            />
      </label>
        <br />
      <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={""}
            />
      </label>
      </form>

   
  
   )
}
