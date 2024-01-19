import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputValue, setInputValue] = useState();
  const [buyingPrice, setBuyingPrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [firstPercent, setFirst] = useState();
  const [secondPercent, setSecond] = useState();
  const [fir, setfir] = useState();
  const [sec, setsec] = useState();
  const [check, setcheck] = useState();

  const clickHandle = () => {
    setcheck(0);
    if (inputValue !== null && inputValue !== "") {
      setFirst(parseFloat(inputValue) - parseFloat(inputValue) * 0.1);
      setSecond(parseFloat(inputValue) - parseFloat(inputValue) * 0.2);
      setBuyingPrice(parseFloat(inputValue));
      setSellingPrice(parseFloat(inputValue) + parseFloat(inputValue) * 0.1);
      const f =
        (parseFloat(inputValue) +
          (parseFloat(inputValue) - parseFloat(inputValue) * 0.1)) /
        2;
      setfir(f + f * 0.1);
      const l =
        (parseFloat(inputValue) +
          (parseFloat(inputValue) - parseFloat(inputValue) * 0.1) +
          (parseFloat(inputValue) - parseFloat(inputValue) * 0.2)) /
        3;
      setsec(l + l * 0.1);
    } else {
      setFirst("");
      setSecond("");
    }
  };
  const firstClick = () => {
    setBuyingPrice((parseFloat(inputValue) + parseFloat(firstPercent)) / 2);
    setSellingPrice(fir);
    setcheck(1);
  };
  const secondClick = () => {
    setBuyingPrice(
      (parseFloat(inputValue) +
        parseFloat(firstPercent) +
        parseFloat(secondPercent)) /
        3
    );
    setSellingPrice(sec);
    setcheck(2);
  };

  return (
    <>
      <div className={styles.container}>
        <Image
          src="/loader.webp"
          alt="Animated Image"
          width={300} // Set the width as per your requirement
          height={100} // Set the height as per your requirement
        />
        <h1 className={styles.title}>TradeTool</h1>

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="number"
            placeholder="Enter price"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={clickHandle}>
            Calculate
          </button>
        </div>

        <div className={styles.buttonContainer2}>
          <div>
            <label className={styles.h}>10%:</label>
            <div className={styles.btn}>
              <div className={styles.button2} onClick={firstClick}>
                {" "}
                {firstPercent}
              </div>
              {check === 1 || check === 2 ? (
                <Image
                  src="/tick.png"
                  alt="Tick"
                  width={28} // Set the width as per your requirement
                  height={25} // Set the height as per your requirement
                />
              ) : (
                <div className={styles.tick}></div>
              )}
            </div>
          </div>
          <div>
            <br></br>
            <label className={styles.h}>20%: </label>
            <div className={styles.btn}>
              <div className={styles.button2} onClick={secondClick}>
                {secondPercent}
              </div>
              {check === 2 ? (
                <Image
                  src="/tick.png"
                  alt="Tick"
                  width={28} // Set the width as per your requirement
                  height={25} // Set the height as per your requirement
                />
              ) : (
                <div className={styles.tick}></div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.output}>
          <div>
            <h4 className={styles.h}>BuyingPrice</h4>
            <div className={styles.outputContainer}>{buyingPrice}</div>
          </div>

          <div>
            <h4 className={styles.h}>SellingPrice</h4>
            <div className={styles.outputContainer}>{sellingPrice}</div>
          </div>
        </div>
      </div>
    </>
  );
}
