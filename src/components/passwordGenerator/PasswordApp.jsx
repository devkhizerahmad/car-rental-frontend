import { useState, useEffect, useCallback } from "react";

function PasswordApp() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    const pass = ""
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123458789";
    if(charAllowed) str += "!@#$%^&*()_+";
    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    console.log("Password Generated", pass);
    
  }, [length, numberAllowed, charAllowed, setPassword]);


  return (
    <div>
      <h1>Password Generator</h1>
      <div className="mb-4 flex items-center justify-between">
        <label className="flex items-center justify-between w-64 bg-blue-400 rounded-lg px-2 py-1 border-2 border-b-black">
          Password Length:
          <input className="ml-2 w-16 bg-gray-200 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 ring-purple-600 font-mono text-lg focus:ring-purple-600"
            type="number"
            value={password}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
      </div>
    </div>

  );
}
export default PasswordApp;
