import React, { memo } from 'react'

import { TwitterShareButton, FacebookShareButton } from 'react-share'

import Section from '../_ui/section/section'
import styles from './sharer.module.css'

const Sharer = memo(function Sharer({ url, title, twitterHandle }) {
  return (
    <Section
      classes={{ inner: 'container-sm', children: styles.sharer }}
      ChildrenAs={React.Fragment}
    >
      <p className={styles.label}>Share post</p>
      <TwitterShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
        className={styles.shareBtn}
      >
        Twitter
      </TwitterShareButton>
      <FacebookShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
        className={styles.shareBtn}
      >
        Facebook
      </FacebookShareButton>
    </Section>
  )
})

export default Sharer
