import stylex from "@stylexjs/stylex";

const tableStyle = stylex.create({
  table: {
        disPlay: "flex",
        posithion: "absolute",
        marginTop: 10,
        marginLeft: 100,        
        width: 1000,
    },
});
const buttonStyle = stylex.create({
    button: {
        position: "relative",
        marginTop: 10,
        marginLeft: 990,
        width: 110,
        height: 30,
        backgroundColor: "#000000",
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold",
    },
});


export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div>
        <button className={stylex(buttonStyle.button) }>글 작성하기</button>
      </div>
      <section>
        <table className={ stylex(tableStyle.table)}>
          <thead>
            <tr>
              <th>id</th>
              <th>Customer</th>
              <th>Location</th>
              <th>Stutus</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>customer name</td>
              <td>Seoul</td>
              <td>17, dec, 2022</td>
              <td>
                <p>Delivered</p>
              </td>
              <td>$128.90</td>
            </tr>
          </tbody>
        </table>
      </section>
      {children}
    </main>
  )
}