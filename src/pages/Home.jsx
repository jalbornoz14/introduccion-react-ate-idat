import { CardInfo } from '../components/CardInfo.jsx'

export function Home() {
  const PEOPLE = [
    { name: "Tomas", address: "Av. Tomas Marzano 123", country: "Perú" },
    { name: "Lizbet", address: "Av. Lima 312", country: "Ecuador" },
    { name: "Sofia", address: "Av. Abancay 532", country: "Brasil" },
    { name: "Pedrito", address: "Av. Peru 231", country: "Chile" },
  ];
  return (
    <>
      <h1>Introducción a React</h1>
      <div className="cards">
        <CardInfo
          name={"Jhefferson"}
          address={"Av. Tomas Marzano 123"}
          country={"Perú"}
        />
        <CardInfo name={"Maria"} address={"Av. Lima 312"} country={"Ecuador"} />
        <CardInfo
          name={"Pablo"}
          address={"Av. Abancay 532"}
          country={"Brasil"}
        />
      </div>

      <div className="cards">
        {PEOPLE.map((p) => (
          <CardInfo name={p.name} address={p.address} country={p.country} />
        ))}
      </div>
    </>
  );
}
