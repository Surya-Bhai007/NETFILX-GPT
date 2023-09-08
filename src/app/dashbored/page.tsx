import Link from "next/link";

export default function Dashbored() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/'}> Dashbored</Link>
      <Link href={'./dashbored/user'}> User</Link>
    </main>
  );
}
