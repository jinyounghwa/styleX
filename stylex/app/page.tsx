import stylex from "@stylexjs/stylex";
import React from "react";
import DashboardLayout from "./dashboard/layout";
import TableLayout from "./table/layout";
const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingTop: 20,
  },
});

export default function Page() {
  return (
    <DashboardLayout>
      <TableLayout>
      <main className={stylex(s.main)}>
          <div>
            <p>Footer</p>
        </div>
      </main>
      </TableLayout>
    </DashboardLayout>
  )
}
