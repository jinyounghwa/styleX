import stylex from "@stylexjs/stylex";

const header = stylex.create({
   navigationItem: {
    display: "flex",
    alignItems: "center",
    padding: 10 | 10 | 10 | 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    position: "fixed",
    width: "100%",
    height: 50,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  textstyle: {
    display: "inline-flex",
    listStyleType: "none",
    margin: "auto",
    backgroundPosition: "center",
    gap: 100,
  },
  }
);

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>
        <div className={ stylex(header.navigationItem)}>
          <ul className={ stylex(header.textstyle)}>
          <li>새로운 이야기</li>
          <li>지나간 이야기</li>
          <li>SoundCloud</li>
          <li>출석부</li>
          <li>커뮤니티</li>
          <li>컨텐츠들</li>
          </ul>
          <div >
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
          </div>
          </div>
      </nav>
      {children}
    </section>
  )
}