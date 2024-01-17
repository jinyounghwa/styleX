import stylex from "@stylexjs/stylex";

const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingTop: 30,
    fontSize: 30,
    fontStyle: "bold",
  },
});


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
    <nav>
        <div className={stylex(s.main)}>hi</div>
      </nav>
      {children}
    </section>
  )
}