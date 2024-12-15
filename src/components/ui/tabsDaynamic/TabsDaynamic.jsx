import { useState } from "react";
import Classes from "./tabsDynamic.module.scss";

export default function TabsDynamic({ data, className }) {
  const [activeKey, setActiveKey] = useState(data[0].id);
  return (
    <div
      className={`${Classes["tabs-dynamic"]} ${className}`}
      style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
    >
      {data.map((item) => (
        <span
          key={item.id}
          onClick={() => {
            item.click();
            setActiveKey(item.id);
          }}
          className={activeKey === item.id ? `${Classes["active-tab"]}` : ""}
          style={{ width: `${100 / data.length + 1}%` }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}
