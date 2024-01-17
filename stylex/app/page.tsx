import stylex from "@stylexjs/stylex";
import React from "react";
import DashboardLayout from "./dashboard/layout";
const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingTop: 20,
  },
});

// export default function Home() {
//   return (
//     <main className={stylex(s.main)}>
//       <h1>Hello</h1>
//     </main>
//   );
// }

export default function Page() {
  return (
    <DashboardLayout>
      <main className={stylex(s.main)}>
        <h1>Hello</h1>
      </main>
    </DashboardLayout>
  )
}
