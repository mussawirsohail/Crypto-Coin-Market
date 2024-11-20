"use client"
import { use, useState } from "react";
import { useEffect } from "react";

interface DataType {
  rates:{
    BTC: string;
    ETH: string;
    SXP:string;
    HOT:string;
    USDT:string;
    RUNE:string;
    YFII:string;
    FLOKI:string;
    LEND:string;
    BNB: string;
    SNX:string;
    COIN:String;
    XRP: string;
    ADA: string;
    DOGE: string;
    NEXO:string;
    YGG:string;
    BAND:string;
    SOL: string;
    DOT: string;
    MATIC: string;
    GNO:string;
    XEM:string;
    CVC:string;
    SHIB: string;
    LTC: string;
    TRX: string;
    MITH:string;
    AVAX: string;
    UNI: string;
    ATOM: string;
    AGIX:string;
    LINK: string;
    XLM: string;
    BCH: string;
    APT: string;
    TVK:string;
    ICP: string;
    FIL: string;
    SUSHI:string
    BAL:String;
    TFUEL:string;
    QTUM:string;
    ALGO: string;
    QNT: string;
    VET: string;
    AAVE: string;
    EOS: string;
    STPT:string;
    GALA:string;
    MKR: string;
    OXT:string;
    DASH:string
    NEAR: string;
    THETA: string;
    GRT: string;
    SAND: string;
    AXS: string;
    TWT:string;
    FTM: string;
    XTZ: string;
    CHZ: string;
    RLC:string;
    MANA: string;
    CAKE: string;
    KLAY: string;
    ZIL: string;
    FET:string;
    ENJ: string;
    HUSD:string;
    LOOM:string;
    OCEAN:string;
    ONE: string;
    OMG: string;
    ZRX: string;
    BAT: string;
    STX: string;
    CRV: string;
    LRC: string;
    YFI: string;
    COMP: string;
    KSM:string;
    REN: string;
    CRO:string;
    STMX:string;
    HNT:string;
    CELO:string;
    HBC:string;


  }
}
export default function CoinMarket() {
    const API_KEY = "4c1f07a5f28153f9205e340ee7210433";
    const [data, setData] = useState<DataType | null>(null);

    useEffect(() => {
      fetch(`https://api.coinlayer.com/api/live?access_key=${API_KEY}`)
        .then((response) => response.json())
        .then((jsonConverted) => {
          console.log("JSON Converted Data :", jsonConverted);
          setData(jsonConverted);
        });
    }, []);   //[] This statment is use for execute data for 1 time.
    return (
      <>
      <div className="ParentContainer">
      <div className="ChildContainer">
      <p> BNB: ${data?.rates?.BNB} </p>
      <div className="buttons"> 
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>
      <div className="ChildContainer">
      <p> DOGE: ${data?.rates?.DOGE} </p>
      <div className="buttons"> 
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>
      <div className="ChildContainer">
      <p> ETH: ${data?.rates?.ETH} </p>
      <div className="buttons"> 
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
     </div>
     </div>
     <div className="ChildContainer">
     <p> BTC: ${data?.rates?.BTC} </p>
     <div className="buttons"> 
     <button className="buy">Buy</button>
     <button className="sell">Sale</button>
     </div>
     </div>
     <div className="ChildContainer">
     <p> USDT: ${data?.rates?.USDT} </p>
     <div className="buttons"> 
     <button className="buy">Buy</button> 
     <button className="sell">Sale</button>
     </div>
     </div>
     <div className="ChildContainer">
     <p> XRP: ${data?.rates?.XRP} </p>
     <div className="buttons"> 
     <button className="buy">Buy</button>
     <button className="sell">Sale</button>
      </div>
      </div>
      <div className="ChildContainer">
      <p> LTC: ${data?.rates?.LTC} </p>
      <div className="buttons"> 
      <button className="buy">Buy</button>   
      <button className="sell">Sale</button>
      </div>
      </div>
      <div className="ChildContainer">
      <p> ADA: ${data?.rates?.ADA} </p>
      <div className="buttons"> 
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>
      <div className="ChildContainer">
      <p> SOL: ${data?.rates?.SOL} </p>
      <div className="buttons">
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>
      <div className="ChildContainer">
      <p>STMX: ${data?.rates?.STMX}</p>
      <div className="buttons">
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>

      <div className="ChildContainer">
      <p>FTM: ${data?.rates?.FTM}</p>
      <div className="buttons">
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>

      <div className="ChildContainer">
      <p>NEAR: ${data?.rates?.NEAR}</p>
      <div className="buttons">
      <button className="buy">Buy</button>
     <button className="sell">Sale</button>
      </div>
      </div>

      <div className="ChildContainer">
      <p>DASH: ${data?.rates?.DASH}</p>
      <div className="buttons">
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>

      <div className="ChildContainer">
      <p>XEM: ${data?.rates?.XEM}</p>
      <div className="buttons">
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>
      <div className="ChildContainer">
      <p>ENJ: ${data?.rates?.ENJ}</p>
      <div className="buttons">
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>
      <div className="ChildContainer">
      <p>CVC: ${data?.rates?.CVC}</p>
      <div className="buttons">
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>
      <div className="ChildContainer">
     <p>ENJ: ${data?.rates?.ENJ}</p>
     <div className="buttons">
     <button className="buy">Buy</button>
     <button className="sell">Sale</button>
     </div>
     </div>

     <div className="ChildContainer">
     <p>CVC: ${data?.rates?.CVC}</p>
     <div className="buttons">
     <button className="buy">Buy</button>
     <button className="sell">Sale</button>
     </div>
     </div>

<div className="ChildContainer">
  <p>BAND: ${data?.rates?.BAND}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>YFI: ${data?.rates?.YFI}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>MITH: ${data?.rates?.MITH}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>GRT: ${data?.rates?.GRT}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>LEND: ${data?.rates?.LEND}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>RUNE: ${data?.rates?.RUNE}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>YFII: ${data?.rates?.YFII}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>REN: ${data?.rates?.REN}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>KSM: ${data?.rates?.KSM}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>FET: ${data?.rates?.FET}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>CHZ: ${data?.rates?.CHZ}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>NEXO: ${data?.rates?.NEXO}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>YGG: ${data?.rates?.YGG}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>VET: ${data?.rates?.VET}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>HNT: ${data?.rates?.HNT}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>CELO: ${data?.rates?.CELO}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>BAND: ${data?.rates?.BAND}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>STPT: ${data?.rates?.STPT}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>GALA: ${data?.rates?.GALA}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>TFUEL: ${data?.rates?.TFUEL}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>
<div className="ChildContainer">
          <p> THETA: ${data?.rates?.THETA} </p>
          <div className="buttons"> 
            <button className="buy">Buy</button>
            <button className="sell">Sale</button>
            </div>
        </div>

<div className="ChildContainer">
  <p>AGIX: ${data?.rates?.AGIX}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>TWT: ${data?.rates?.TWT}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>TVK: ${data?.rates?.TVK}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>REN: ${data?.rates?.REN}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>FLOKI: ${data?.rates?.FLOKI}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>HUSD: ${data?.rates?.HUSD}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>HBC: ${data?.rates?.HBC}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>GNO: ${data?.rates?.GNO}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>RLC: ${data?.rates?.RLC}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>OXT: ${data?.rates?.OXT}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>BAL: ${data?.rates?.BAL}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>OCEAN: ${data?.rates?.OCEAN}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>LOOM: ${data?.rates?.LOOM}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>SAND: ${data?.rates?.SAND}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>COIN: ${data?.rates?.COIN}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>SNX: ${data?.rates?.SNX}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>SXP: ${data?.rates?.SXP}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>HOT: ${data?.rates?.HOT}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>QTUM: ${data?.rates?.QTUM}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>
<div className="ChildContainer">
  <p>DOGE: ${data?.rates?.DOGE}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>

<div className="ChildContainer">
  <p>THETA: ${data?.rates?.THETA}</p>
  <div className="buttons">
    <button className="buy">Buy</button>
    <button className="sell">Sale</button>
  </div>
</div>
<div className="ChildContainer">
          <p> DOT: ${data?.rates?.DOT} </p>
          <div className="buttons"> 
            <button className="buy">Buy</button>
            <button className="sell">Sale</button>
            </div>
        </div>
        <div className="ChildContainer">
          <p> LINK: ${data?.rates?.LINK} </p>
          <div className="buttons"> 
            <button className="buy">Buy</button>
            <button className="sell">Sale</button>
            </div>
        </div>
        <div className="ChildContainer">
          <p> UNI: ${data?.rates?.UNI} </p>
          <div className="buttons"> 
            <button className="buy">Buy</button>
            <button className="sell">Sale</button>
            </div>
        </div>
        <div className="ChildContainer">
        <p>CRO: ${data?.rates?.CRO}</p>
        <div className="buttons">
        <button className="buy">Buy</button>
        <button className="sell">Sale</button>
        </div>
        </div>

        <div className="ChildContainer">
        <p>ICP: ${data?.rates?.ICP}</p>
        <div className="buttons">
        <button className="buy">Buy</button>
        <button className="sell">Sale</button>
        </div>
        </div>

        <div className="ChildContainer">
        <p>MKR: ${data?.rates?.MKR}</p>
        <div className="buttons">
        <button className="buy">Buy</button>
        <button className="sell">Sale</button>
        </div>
      </div>

      <div className="ChildContainer">
      <p>SUSHI: ${data?.rates?.SUSHI}</p>
      <div className="buttons">
      <button className="buy">Buy</button>
      <button className="sell">Sale</button>
      </div>
      </div>

      <div className="ChildContainer">
      <p>ZRX: ${data?.rates?.ZRX}</p>
      <div className="buttons">
      <button className="buy">Buy</button>
     <button className="sell">Sale</button>
      </div>
      </div>


</div>
      </>
    );
  }
  
