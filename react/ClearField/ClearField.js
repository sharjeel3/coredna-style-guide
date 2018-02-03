import styles from './ClearField.scss';

import React from 'react';
import ClearIcon from '../ClearIcon/ClearIcon';

export default function ClearField() {
  return (
    <div className={styles.root}>
      <ClearIcon svgClassName={styles.clearSvg} />
    </div>
  );
}
