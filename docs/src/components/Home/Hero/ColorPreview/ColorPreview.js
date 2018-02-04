import styles from './ColorPreview.scss';

import React from 'react';

import Droplet from './Droplet/Droplet';
import brand from '!!raw-loader!seek-style-guide/theme/palette/brand.scss';

const sassToJs = function (sheet) {
    let lessVars = {};
    let matches = sheet.match(/\$(.*:[^;]*)/g) || [];
    matches.forEach(function (variable) {
        let definition = variable.split(/:\s*/);
        lessVars[definition[0].replace(/['"]+/g, '').trim()] = definition.splice(1).join(':');
    });
    return lessVars;
};

const brandValues = sassToJs(brand);

const getSwatch = name => {
  const value = brandValues[name];

  return (
    <div className={styles.drop} key={name}>
      <Droplet
        color={value}
        sizeInRows={5}
        showHex={true}
      />
    </div>
  );
};

export default function ColorPreview() {
  return (
    <div>
      {
        Object.keys(brandValues)
          .slice(0, 3)
          .map(getSwatch)
      }
    </div>
  );
}
