import { useEffect, useState } from 'react';

const PasswordGenerators = ({title}) => {

    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=';

    let [password, setPassword] = useState('');

    const getLowerase = () => {
        return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    }
    const getUppercase = () => {
        return upperLetters[Math.floor(Math.random() * upperLetters.length)];
    }
    const getNumber = () => {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
    const getSymbol = () => {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    const generatePassword = () => {
        const lenEl = document.querySelector('#len');
        const len = lenEl.value;
        for(let i = 0; i < len; i++){
            const x = generateX();
            setPassword(password+=x);
        }
    }

    const generateX = () =>{
        const upperEl = document.querySelector('#upper');
        const lowerEl = document.querySelector('#lower');
        const numberEl = document.querySelector('#number');
        const symbolEl = document.querySelector('#symbol');

        const xs = [];
        if(upperEl.checked){
            xs.push(getUppercase());
        }

        if(lowerEl.checked){
            xs.push(getLowerase());
        }

        if(numberEl.checked){
            xs.push(getNumber());
        }

        if(symbolEl.checked){
            xs.push(getSymbol());
        }

        return xs[Math.floor(Math.random() * xs.length)]
    }

    const copyHandler = () => {
        const resultEl = document.querySelector('#pw');
        const copy = document.createElement('textarea');
        document.body.appendChild(copy);
        const pass = resultEl.innerText;
        copy.value = pass;
        if(!pass) {return;}
        copy.select();
        document.execCommand('copy');
        document.body.removeChild(copy);
        alert('password copied');
        setPassword('');
    }


    return ( 
        <div className="password-generator">
            <h1>{title}</h1>
            <div className="pw-container">
                <div className="pw-header">
                    <div className="pw">
                        <span id="pw">{ password }</span>
                        <button onClick={copyHandler}>Copy to clipboard</button>
                    </div>
                </div>
                <div className="pw-body">
                    <div className="form-control">
                        <label htmlFor="len">Password Length</label>
                        <input id="len" type="number" min="4" max="40" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="upper">Contain Uppercase Letter</label>
                        <input id="upper" type="checkbox" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="lower">Contain Lowercase Letter</label>
                        <input checked id="lower" type="checkbox" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="number">Contain Numbers</label>
                        <input id="number" type="checkbox" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="symbol">Contain Symbols</label>
                        <input id="symbol" type="checkbox" />
                    </div>
                    <button className="generate" onClick={generatePassword}>Generate Password</button>
                </div>
            </div>
        </div>
     );
}
 
export default PasswordGenerators;