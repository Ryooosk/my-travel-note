const ListComponent = (props) => {
  const { handleSelectedArea } = props;
  const areaHoList = ["北海道"];
  const areaToList = ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"];
  const areaKaList = ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"];
  const areaChubuList = ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"];
  const areaKiList = ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"];
  const areaChugoList  = ["鳥取県", "島根県", "岡山県", "広島県", "山口県"];
  const areaShiList = ["徳島県", "香川県", "愛媛県", "高知県"];
  const areaKyuList = ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];

  return (
    <div className="main">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+JP&display=swap" rel="stylesheet"/>
      </head>
      <details>
        <summary>北海道地方</summary>
        <ul>
          {areaHoList.map((area) => {
            return (
              <li key = {area}>
                <button onClick={() => {
                  handleSelectedArea(area)
                }}>{area}</button>
              </li>
            )
          })}
        </ul>
      </details>
      <details>
        <summary>東北地方</summary>
        <ul>
          {areaToList.map((area) => {
            return (
              <li key = {area}>
                <button onClick={() => {
                  handleSelectedArea(area)
                }}>{area}</button>
              </li>
            )
          })}
        </ul>
      </details>
      <details>
        <summary>関東地方</summary>
        <ul>
          {areaKaList.map((area) => {
            return (
              <li key = {area}>
                <button onClick={() => {
                  handleSelectedArea(area)
                }}>{area}</button>
              </li>
            )
          })}
        </ul>
      </details>
      <details>
        <summary>中部地方</summary>
        <ul>
          {areaChubuList.map((area) => {
            return (
              <li key = {area}>
                <button onClick={() => {
                  handleSelectedArea(area)
                }}>{area}</button>
              </li>
            )
          })}
        </ul>
      </details>
      <details>
        <summary>近畿地方</summary>
        <ul>
          {areaKiList.map((area) => {
            return (
              <li key = {area}>
                <button onClick={() => {
                  handleSelectedArea(area)
                }}>{area}</button>
              </li>
            )
          })}
        </ul>
      </details>   
      <details>
        <summary>中国地方</summary>
        <ul>
          {areaChugoList.map((area) => {
            return (
              <li key = {area}>
                <button onClick={() => {
                  handleSelectedArea(area)
                }}>{area}</button>
              </li>
            )
          })}
        </ul>
      </details>
      <details>
        <summary>四国地方</summary>
        <ul>
          {areaShiList.map((area) => {
            return (
              <li key = {area}>
                <button onClick={() => {
                  handleSelectedArea(area)
                }}>{area}</button>
              </li>
            )
          })}
        </ul>
      </details>
      <details>
        <summary>九州地方</summary>
        <ul>
          {areaKyuList.map((area) => {
            return (
              <li key = {area}>
                <button onClick={() => {
                  handleSelectedArea(area)
                }}>{area}</button>
              </li>
            )
          })}
        </ul>
      </details>

      <style jsx>{`
      .main {
        box-sizing: border-box;
        flex-wrap: wrap;
      }

        ul {
          list-style: none;
        }
        
        ul li {
          margin-left: 20px;
          font-size: 18px;
        }

        details {
          font-size:20px;
          font-family: 'Noto Sans JP', sans-serif;
          transition: 0.1s;          
          border-radius: 10px;
        }

        details[open]:hover {
          background: white;
          padding: 0;
        }

        details:hover {
          background: #f5f5f5;
          padding-left: 5px;
        }

        ul li:hover{
          color: #696969;
        }

        @media (max-width: 1000px ) {
          .main {
            width: 100%;
            display: flex;
          }

          details {
            font-size: 15px;
            padding: 5px;
            margin: 0;
            width: 12.5%;
          }

          details:hover {
            background: 0;
            padding: 5px;
            margin: 0;
          }

          details[open]:hover {
            padding: 5px;
          }

          summary {
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
          }

          summary:hover {
            color: #696969;
          }

          ul li {
            font-size: 13px;
            margin-left: 15px;
            text-align: center;
            margin: 0;
          }

          @media (max-width: 740px ) {
            details {
              width: 25%;
            }
          }
        }
      `}</style>
    </div>   
  )
}

export default ListComponent