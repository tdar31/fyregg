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
        <span className="spellText">{championPassiveText}</span>
        <p className="descriptionText">{championPassiveDesc}</p>
        <img className="passiveIcon" alt="imgQ" src={championSpellQ} />
        <span className="spellText">{championSpellQName}</span>
        <p className="descriptionText">{championSpellQDesc}</p>
        <img className="passiveIcon" alt="imgW" src={championSpellW} />
        <span className="spellText">{championSpellWName}</span>
        <p className="descriptionText">{championSpellWDesc}</p>
        <img className="passiveIcon" alt="imgE" src={championSpellE} />
        <span className="spellText">{championSpellEName}</span>
        <p className="descriptionText">{championSpellEDesc}</p>
        <img className="passiveIcon" alt="imgR" src={championSpellR} />
        <span className="spellText">{championSpellRName}</span>
        <p className="descriptionText">{championSpellRDesc}</p>
      </div>
    </div>
  );
}

export default ChampPageBio;
