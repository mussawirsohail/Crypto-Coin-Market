import Image from "next/image";
import CoinMarket from "./coinmarket/page";

export default function Home() {
  return (
<>
  <div className="Heading">
    <h1>Coin Market Dashboard</h1>
  </div>
<CoinMarket/>
</>
  );
}
