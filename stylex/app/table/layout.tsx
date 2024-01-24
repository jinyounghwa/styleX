import stylex from "@stylexjs/stylex";

const tableStyle = stylex.create({
    table: {
        borderCollapse: "collapse",
        width: "100%",
    },
    th: {
        border: "1px solid #dddddd",
        textAlign: "left",
        padding: 8,
    },
    td: {
        border: "1px solid #dddddd",
        textAlign: "left",
        padding: 8,
    },
});



export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <section>
        <table>
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