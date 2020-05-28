import React, { memo } from 'react'

import { TwitterShareButton, FacebookShareButton } from 'react-share'

import Section from '../_ui/section/section'
import styles from './sharer.module.css'

const Sharer = memo(function Sharer({ url, title, twitterHandle }) {
  return (
    <Section
      classes={{ inner: 'container-sm', children: styles.sharerWrapper }}
      ChildrenAs={React.Fragment}
    >
      <p>
        <strong>Thank you</strong> for reading.
      </p>
      <p>
        If you think that someone else could benifit from this post also, take a
        moment to <strong>share it</strong>. Or even bookmark it for later.
      </p>
      <div className={styles.sharer}>
        <span className={styles.label}>Share post</span>
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
      </div>
    </Section>
  )
})

export default Sharer
