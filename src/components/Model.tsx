'use client'

import React, { MouseEventHandler, useContext } from 'react'
import { useSpring, animated } from '@react-spring/web';
import Context from '@/lib/store/Context';
import { Button, Modal } from 'antd';
import styles from '@/styles/modal.module.scss';

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const Model = () => {

  const [state, dispatch] = useContext(Context);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked')
    e.preventDefault();
    dispatch({
      type: 'toggleModal',
      payload: false
    })
  }

  return (
    <Modal className={styles.mymodal} title="Basic Modal" open={state.searchOpen.isOpen} onCancel={handleClose}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default Model