import { useState, useEffect, useCallback, useRef} from "react";

function PasswordApp() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123458789";
    if (charAllowed) str += "!@#$%^&*()_+"; 
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    console.log("Password Generated", pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
      <>
      <div className="flex items-center justify-between border-2 border-black rounded-lg px-2 py-1">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-black rounded-lg"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button className="outline-none px-3 py-0.5 bg-blue-500 shrink-0">Copy</button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <input 
        type="range" 
        max={100}
        value={length}
        className="cursor-pointer h-1 bg-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 ring-purple-600"
        onChange={(e) => setLength(e.target.value)}
         />
         <label className="text-black ml-2">Length: {length}</label>
         <input 
         type="checkbox"
          id="numberInput"
          className="mr-2 ml-2 h-4 w-4 rounded-lg focus:outline-none focus:ring-2 ring-purple-600"
          defaultChecked={numberAllowed}
          onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label className="text-black ml-2">Number</label>
          <input 
          type="checkbox"
          id="charInput"
          className="mr-2 ml-2 h-4 w-4 rounded-lg focus:outline-none focus:ring-2 ring-purple-600"
          defaultChecked={charAllowed}
          onChange={() => setCharAllowed(prev => !prev)}
          />
          <label className="text-black ml-2">Char</label>

      </div>

      </>
  
  );
}
export default PasswordApp;
