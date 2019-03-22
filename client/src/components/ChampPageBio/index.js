import React from "react";
import "./style.css";

function ChampPageBio({
  championLore,
  championPassive,
  championPassiveText,
  championPassiveDesc,
  championSpellQ,
  championSpellW,
  championSpellE,
  championSpellR
}) {
  return (
    <div>
      <div className="bioBody">
        <p className="champLore">{championLore}</p>
        <span>{championPassiveDesc}</span>
        <img className="passiveIcon" alt="imgPassive" src={championPassive} />
        <span>{championPassiveText}</span>
        <img className="passiveIcon" alt="imgQ" src={championSpellQ} />
        <img className="passiveIcon" alt="imgW" src={championSpellW} />
        <img className="passiveIcon" alt="imgE" src={championSpellE} />
        <img className="passiveIcon" alt="imgR" src={championSpellR} />
      </div>
    </div>
  );
}

export default ChampPageBio;
