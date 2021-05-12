import { useState } from "react";

function SendAuthPage() {
  const [token, setToken] = useState("000000");

  function sendAuth() {
    setToken(() => {
      let randomNumber = String(Math.floor(Math.random() * 1000000)).padStart(
        6,
        "0"
      );
      return randomNumber;
    });
  }

  return (
    <div>
      <span>{token}</span>
      <button onClick={sendAuth}>인증번호 전송</button>
    </div>
  );
}

export default SendAuthPage;

// import { useState } from "react";

// function SendAuthPage() {
//   const [tokens, setTokens] = useState(["000000"]);

//   function sendAuth() {
//     setTokens(() => {
//       const temp = [...tokens];

//       const randomNumber = String(Math.floor(Math.random() * 1000000)).padStart(
//         6,
//         "0"
//       );

//       temp.push(randomNumber);
//       console.log(temp);

//       return temp;
//     });
//   }

//   return (
//     <div>
//       {tokens.map((token) => (
//         <div>{token}</div>
//       ))}
//       <button onClick={sendAuth}>인증번호 전송</button>
//     </div>
//   );
// }

// export default SendAuthPage;
