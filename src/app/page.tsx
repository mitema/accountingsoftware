"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {

  const [value, setValue] = useState("");
  const [yearEstablished, setYearEstablished] = useState("");
  const [amountValue, setAmountValue ] = useState("")
  const [summaryOfProfitValue, setSummaryOfProfitValue] = useState("")
  const [accountProvider, setAccountProvider] = useState("")

  const [result, setResult] = useState<any>();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
      e.preventDefault();
      const formData = {
        name: value,
        establishedYear: yearEstablished,
        valueAmount: amountValue,
        summaryOfProfitValue: summaryOfProfitValue,
        accountProvider: accountProvider
      }

      console.log(formData)
     
      fetch("/api/form", {
        body: formData.toString(),
        method: 'post',
        headers: {
          "content-type" : "application/x-www-form-urlencoded"
        },
      }).then(async (result)=> {

          setResult(formData)
       
      })
    }

  function handleChange(event:any) {
    console.log(event.target.value)
    const value =  event.target.value;
    setValue(value);
  }
 
  return (
    <div className={styles.cardContainer}>
    <div className={styles.card}>
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.nameContainer}>
        <label className={styles.nameLabel}>Name:
          <input
            type="text" 
            value={value}
            onChange={handleChange}
            className ={styles.nameInputBox}
            name="name"
          />
        </label>
      </div>
      <div className={styles.yearEstablishedContainer}>
      <label className={styles.yearEstablishedLabel}>Year Established:
        <input
          type="text" 
          value={yearEstablished}
          onChange={ (e)=> {setYearEstablished(e.target.value)}}
          className ={styles.yearEstablishedBox}
          name="year established"
        />
      </label>
      </div>
      <div className = {styles.summaryOfProfitLabelContainer}>
      <label className={styles.summaryOfProfitLabel}>Summary of profit <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or loss by year:
        <input
          type="text" 
          value={summaryOfProfitValue}
          onChange={(e)=> setSummaryOfProfitValue(e.target.value)}
          className ={styles.summaryOfProfitBox}
          name="summary of profit"
        />
      </label>
      </div>
      <div className={styles.amountContainer}>
      <label className={styles.amountLabel}>Amount:
        <input
          type="text" 
          value={amountValue}
          onChange={(e)=> {setAmountValue(e.target.value)}}
          className ={styles.amount}
          name="amount"
        />
      </label>
      </div>
      <div>
      <label  className={styles.labelAccountProvider}>Account Provider:</label>
          <select className={styles.optionsAccountProvider} name="cars" id="cars" onChange={e=> setAccountProvider(e.target.value)}>  
            <option value = ""></option>
            <option value="xerox">Xerox</option>
            <option value="myob">myob</option>
          </select>
      </div>
      <div className={styles.submitContainer}><input className={styles.submitInputBox} type="submit" value="Submit"/> </div>    
    </form>
    <div>{JSON.stringify(result, null, 4)}</div>
    </div>
    </div>
  )
  
   
}
