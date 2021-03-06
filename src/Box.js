// @flow
// Imports come here.
import React from 'react'
import { omit } from 'lodash'
import { StyleSheet, css } from 'aphrodite-jss'

// Define the types of our props.
type Props = {
  style?: {},
  children: Array<React.createElement>,
  color?: string,
  opacity?: string,
  width?: string,
  height: string,
  background?: string,
};

// Our little component.
export default function Box (props: Props): React.createElement {
  // Create our styles.
  const styles: Object = StyleSheet.create({
    mainDiv: {
      height: props.height,
      width: props.width,
      color: props.color,
      opacity: props.opacity,
      background: props.background,
      padding: '3px 7px',
      fontFamily: 'Verdana, Geneva, sans-serif',
      ...props.style
    },
    mainPre: {
      fontSize: '12px',
      verticalAlign: 'middle',
      height: props.height,
      width: props.width
    }
  })

  return (
    <div className={css(styles.mainDiv)} {...omit(props, ['style', 'background', 'color', 'opacity', 'width', 'height'])}>
      <pre className={css(styles.mainPre)}>
        {props.children}
      </pre>
    </div>
  )
}

// The default props.
Box.defaultProps = {
  color: 'rgb(10, 10, 10)',
  opacity: '1',
  style: {},
  width: '95%',
  background: 'rgb(230, 230, 230)'
}
