import React from "react";
import "./style.css";

function ChampPageBio({
  championLore,
  championPassive,
  championPassiveText,
  championPassiveDesc,
  championSpellQ,
  championSpellQName,
  championSpellQDesc,
  championSpellW,
  championSpellWName,
  championSpellWDesc,
  championSpellE,
  championSpellEName,
  championSpellEDesc,
  championSpellR,
  championSpellRName,
  championSpellRDesc
}) {
  return (
    <div>
      <div className="bioBody">
        <p className="champLore">{championLore}</p>
        {/*  */}
        {/*  */}
        {/*  */}
        <img className="passiveIcon" alt="imgPassive" src={championPassive} />
        <p>{championPassiveText}</p>
        <p>{championPassiveDesc}</p>
        <img className="passiveIcon" alt="imgQ" src={championSpellQ} />
        <p>{championSpellQName}</p>
        <p>{championSpellQDesc}</p>
        <img className="passiveIcon" alt="imgW" src={championSpellW} />
        <p>{championSpellWName}</p>
        <p>{championSpellWDesc}</p>
        <img className="passiveIcon" alt="imgE" src={championSpellE} />
        <p>{championSpellEName}</p>
        <p>{championSpellEDesc}</p>
        <img className="passiveIcon" alt="imgR" src={championSpellR} />
        <p>{championSpellRName}</p>
        <p>{championSpellRDesc}</p>
      </div>
    </div>
  );
}

export default ChampPageBio;
