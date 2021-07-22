import React from 'react';
import { IoMdSunny, IoMdMoon, IoMdSnow, IoIosCloudy } from 'react-icons/io';
import {
  IoThunderstorm,
  IoCloudyNight,
  IoPartlySunnySharp,
  IoRainy,
} from 'react-icons/io5';
import { RiMistLine } from 'react-icons/ri';
function Icon({ lg, iconId }) {
  const weather = iconId.slice(0, 2);
  const day = iconId[2];
  return (
    <div className="icon" style={{ fontSize: lg ? '250px' : '42px' }}>
      {weather === '01' && day === 'd' && <IoMdSunny />}
      {weather === '01' && day === 'n' && <IoMdMoon />}
      {weather === '02' && day === 'd' && <IoPartlySunnySharp />}
      {weather === '02' && day === 'n' && <IoCloudyNight />}
      {weather === '03' && <IoIosCloudy />}
      {weather === '04' && <IoIosCloudy />}
      {weather === '09' && <IoRainy />}
      {weather === '10' && <IoRainy />}
      {weather === '11' && <IoThunderstorm />}
      {weather === '13' && <IoMdSnow />}
      {weather === '50' && <RiMistLine />}
    </div>
  );
}

export default React.memo(Icon);
