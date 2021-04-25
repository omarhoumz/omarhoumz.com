import React, { memo } from 'react'

import { TwitterShareButton, FacebookShareButton } from 'react-share'

function Sharer({ url, title, twitterHandle }) {
  return (
    <div className='mt-24 bg-brand-50 bg-opacity-30 border-t-2 border-b-2 border-brand-50 py-8 px-4 space-y-3 text-xl'>
      <p>
        <strong>Thank you</strong> for reading.
      </p>
      <p>
        If you think that someone else could also benefit from this post, take a
        moment to <strong>share it</strong>. Or even bookmark it for later.
      </p>
      <div className='text-brand-500'>
        <small className='mr-2 text-blueGray-600'>Share post</small>
        <TwitterShareButton
          url={url}
          // @ts-ignore
          quote={title}
          via={twitterHandle.split('@').join('')}
          resetButtonStyle={false}
          className='mx-1 px-1 pb-0.5 pt-1 leading-none border-b-2 border-transparent transition-colors hover:border-current hover:text-brand-700 focus:bg-brand-50'
        >
          Twitter
        </TwitterShareButton>
        <FacebookShareButton
          url={url}
          quote={title}
          // @ts-ignore
          via={twitterHandle.split('@').join('')}
          resetButtonStyle={false}
          className='mx-1 px-1 pb-0.5 pt-1 leading-none border-b-2 border-transparent transition-colors hover:border-current hover:text-brand-700 focus:bg-brand-50'
        >
          Facebook
        </FacebookShareButton>
      </div>
    </div>
  )
}

export default Sharer
