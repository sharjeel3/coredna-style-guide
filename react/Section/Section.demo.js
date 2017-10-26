import React from 'react';
import PropTypes from 'prop-types';
import { Section, Text } from 'seek-style-guide/react';
import { LEVEL, TYPE } from '../Section/Section';

const Container = ({ component: DemoComponent, componentProps }) => (
  <DemoComponent {...componentProps}>
    <Text>Hello, I am some sample text</Text>
  </DemoComponent>
);

Container.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/section',
  title: 'Section',
  component: Section,
  container: Container,
  initialProps: {
    type: TYPE.POSITIVE,
    level: LEVEL.PRIMARY,
    message: 'I\'m some timely text that helps the user understand something',
    hideIcon: false,
    onClose: () => console.log('On close handler called')
  },
  options: [
    {
      label: 'Type',
      type: 'radio',
      states: [
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            type: TYPE.POSITIVE
          })
        },
        {
          label: 'Info',
          transformProps: props => ({
            ...props,
            type: TYPE.INFO
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            type: TYPE.CRITICAL
          })
        },
        {
          label: 'Help',
          transformProps: props => ({
            ...props,
            type: TYPE.HELP
          })
        }
      ]
    },
    {
      label: 'Level',
      type: 'radio',
      states: [
        {
          label: 'Primary',
          transformProps: props => ({
            ...props,
            level: LEVEL.PRIMARY
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            level: LEVEL.SECONDARY
          })
        }
      ]
    }
  ]
};