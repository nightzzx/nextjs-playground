"use client";

import Link from "next/link";

export default function Home() {
  // console.log(status, "status is ss from client");

  // if (session) {
  //   console.log(session.user, "user session is");

  //   return (
  //     <>
  //       {session.user?.name} <br />
  //       <button onClick={() => signOut()}>sign outs</button>
  //     </>
  //   );
  // }

  return (
    <>
      Not signed in <br />
      {/* <button onClick={() => signIn("google")}>sign in with google</button>
      <br></br>
      <button onClick={() => signIn("facebook")}>sign in with fb</button>
      <br></br>
      <button onClick={() => signIn("apple")}>sign in with apple id</button> */}
    </>
  );
}
