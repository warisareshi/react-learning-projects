import { useState, useCallback, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [numAllowed, setNumAllowed] = useState(true);
  const [symAllowed, setSymAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (symAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, symAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    toast("Copied", {
      duration: 4000,
      position: "bottom-right",
      icon: "✅",
    });
    setTimeout(() => {
      setCopyBtnText("copy");
    }, 3000);
  };

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, symAllowed]);

  return (
    <main className="text-white flex flex-col items-center justify-center max-h-screen h-full w-full gap-2">
      <h1 className="text-3xl font-bold">🔐 password generator</h1>
      <p className="text-sm">
        created by{" "}
        <a
          href="https://github.com/warisareshi"
          className="text-red-300 cursor-pointer underline"
        >
          Waris Abass
        </a>{" "}
        for fun.
      </p>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          className="outline p-2 rounded-md text-black w-80"
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button
          className="bg-blue-500 px-3 rounded-md duration-100"
          onClick={copyPassword}
        >
          copy
        </button>
        <button
          className="bg-blue-500 p-2 rounded-md"
          onClick={generatePassword}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-rotate-cw"
          >
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="lengthInput">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={20}
            name=""
            value={length}
            id="lengthInput"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="numInput">Numbers?</label>
          <input
            type="checkbox"
            name=""
            id="numInput"
            defaultChecked={numAllowed}
            onChange={() => {
              toast("Numbers Enabled", {
                duration: 1000,
                position: "bottom-left",
                icon: "9️⃣ ✅",
              });
              if (numAllowed) {
                toast.dismiss();
                toast("Numbers Disabled", {
                  duration: 1000,
                  position: "bottom-left",
                  icon: "9️⃣ ❌",
                });
              }
              setNumAllowed((prev) => !prev);
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="symbolsInput">Symbols?</label>
          <input
            type="checkbox"
            name=""
            id="symbolsInput"
            defaultChecked={symAllowed}
            onChange={() => {
              toast("Symbols Enabled", {
                duration: 1000,
                position: "bottom-left",
                icon: "🔣 ✅",
              });
              if (symAllowed) {
                toast.dismiss();
                toast("Symbols Disabled", {
                  duration: 1000,
                  position: "bottom-left",
                  icon: "🔣 ❌",
                });
              }
              setSymAllowed((prev) => !prev);
            }}
          />
        </div>
      </div>
      <Toaster />
    </main>
  );
}

export default App;
