import Link from "next/link";

export default function user() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {" "}
      <h1>user</h1>
      <Link href={"/"}>Home</Link>
    </main>
  );
}
