import styles from './TextFieldPreview.scss';
import textFieldStyles from 'seek-style-guide/react/TextField/TextField.scss';

import React from 'react';
import { TextField } from 'seek-style-guide/react';

export default function TextFieldPreview() {
  return (
    <div className={styles.root}>
      <TextField message={false} />
      <TextField message={false} className={textFieldStyles.rootFocus} />
      <TextField valid={false} message="Something went wrong" />
    </div>
  );
}
