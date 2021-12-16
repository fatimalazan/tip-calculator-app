import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [billQty, setBill] = useState(null);
  const [tipQty, setTip] = useState(null);
  const [personQty, setPerson] = useState(null);

  const calculateTip = (totalBill, tipAmount, personNum) => {
    const totalTip = (totalBill / 100) * tipAmount;
    const result = totalTip / personNum;
    const placeholder = 0;
    if (result && isFinite(result)) {
      return result.toFixed(2);
    }
    return placeholder.toFixed(2);
  };

  const calculateTotal = (totalBill, tipAmount, personNum) => {
    const billPerPerson = totalBill / personNum;
    const tipPerPerson = ((totalBill / 100) * tipAmount) / personNum;
    const totalAmount = billPerPerson + tipPerPerson;
    const placeholder = 0;
    if (totalAmount && isFinite(totalAmount)) {
      return totalAmount.toFixed(2);
    }
    return placeholder.toFixed(2);
  };

  const inputValidation = (input) => {
    if (parseInt(input) === 0) {
      return true;
    }
    return false;
  };

  const enableReset = () => {
    if (!!billQty && !!tipQty && !!personQty) {
      return false;
    }
    return true;
  };

  const resetBtn = () => {
    setBill('');
    setTip('');
    setPerson('');
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" type="image/png" href="/favicon-32x32.png" />
        <title>Frontend Mentor | Tip Calculator App</title>
      </Head>

      <main>
        <div className="site-logo">
          <img src="/logo.svg" alt="splitter-logo" className="logo" />
        </div>
        <div className="calculator-main">
          <div className="first-col">
            <div className="bill-form">
              <form>
                <div className="input-label">
                  <label htmlFor="bill-num" className="bill-label">
                    Bill
                  </label>
                  {inputValidation(billQty) ? <span className="error-msg">Can't be zero</span> : null}
                </div>
                <input
                  type="number"
                  id="bill-qty"
                  name="bill-qty"
                  className={inputValidation(billQty) ? 'input-error-1' : 'bill-input'}
                  placeholder="0"
                  value={billQty}
                  onChange={(e) => setBill(e.target.value)}
                />
              </form>
            </div>
            <div className="tip-form">
              <form>
                <label htmlFor="tip-num" className="tip-label">
                  Select Tip %
                </label>
                <div className="tip-form--inputs">
                  <button
                    type="button"
                    onClick={() => setTip(5)}
                    className={tipQty === 5 ? 'quantity-btn active' : 'quantity-btn'}
                  >
                    5%
                  </button>

                  <button
                    type="button"
                    onClick={() => setTip(10)}
                    className={tipQty === 10 ? 'quantity-btn active' : 'quantity-btn'}
                  >
                    10%
                  </button>
                  <button
                    type="button"
                    onClick={() => setTip(15)}
                    className={tipQty === 15 ? 'quantity-btn active' : 'quantity-btn'}
                  >
                    15%
                  </button>
                  <button
                    type="button"
                    onClick={() => setTip(25)}
                    className={tipQty === 25 ? 'quantity-btn active' : 'quantity-btn'}
                  >
                    25%
                  </button>
                  <button
                    type="button"
                    onClick={() => setTip(50)}
                    className={tipQty === 50 ? 'quantity-btn active' : 'quantity-btn'}
                  >
                    50%
                  </button>
                  <input
                    type="number"
                    id="tip-quantity"
                    name="tip-quantity"
                    value={typeof tipQty === 'string' ? tipQty : ''}
                    onChange={(e) => setTip(e.target.value)}
                    className="quantity-input"
                    placeholder="Custom"
                  />
                </div>
              </form>
            </div>
            <div className="people-form">
              <form>
                <div className="input-label">
                  <label htmlFor="people-num" className="people-label">
                    Number of People
                  </label>
                  {inputValidation(personQty) ? <span className="error-msg">Can't be zero</span> : null}
                </div>
                <input
                  type="number"
                  id="people-num"
                  name="people-num"
                  className={inputValidation(personQty) ? 'input-error-2' : 'people-input'}
                  onChange={(e) => setPerson(e.target.value)}
                  value={personQty}
                  placeholder="0"
                />
              </form>
            </div>
          </div>
          <div className="second-col">
            <div className="display-amount">
              <div className="tip-amount amount">
                <p className="tip-amount title">
                  Tip Amount
                  <br />
                  <span className="sm-font"> / person</span>
                </p>
                <p className="tip-amount num">${calculateTip(billQty, tipQty, personQty)}</p>
              </div>
              <div className="total amount">
                <p className="total title">
                  Total
                  <br />
                  <span className="sm-font"> / person</span>
                </p>
                <p className="total num">${calculateTotal(billQty, tipQty, personQty)}</p>
              </div>
            </div>
            <button type="button" className="reset-btn" disabled={enableReset()} onClick={() => resetBtn()}>
              Reset
            </button>
          </div>
        </div>
        <div className="attribution">
          <span>
            Challenge by{' '}
            <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX" target="_blank">
              Frontend Mentor
            </a>{' '}
            |{' '}
          </span>
          <span>
            Coded by{' '}
            <a href="https://github.com/fatimalazan" target="_blank">
              ftmlzn
            </a>
          </span>
        </div>
      </main>
    </>
  );
}
