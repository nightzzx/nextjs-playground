"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  // console.log(status, "status is ss from client");
  console.log(session, "entire session table from client");

  if (session) {
    console.log(session.user, "user session is");

    return (
      <>
        {session.user?.name} <br />
        <button onClick={() => signOut()}>sign outs</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("google")}>sign in with google</button>
      <br></br>
      <button onClick={() => signIn("facebook")}>sign in with fb</button>
      <br></br>
      <button onClick={() => signIn("apple")}>sign in with apple id</button>
    </>
  );
}
