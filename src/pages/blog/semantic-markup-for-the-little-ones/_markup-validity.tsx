import React, { ReactElement } from 'react';

import ExternalLink from 'src/components/common/ExternalLink';

const PostMarkupValidity = (): ReactElement => {
  return (
    <>
      <p>By the way...</p>
      <h2>How to check a markup validity?</h2>
      <p>
        The easiest and fastest way to validate your markup is use <ExternalLink
          href='https://validator.w3.org'
          label='W3C Markup Validation Service' />.
        This validator checks a markup validity in different markup languages including HTML.
        You can validate by URI, by file upload or by direct input your markup.
      </p>
      <p>
        Unfortunately, you can&#39;t validate a markup running in localhost, but you can use any web tunnel to share your local server e.g. <ExternalLink
          href='https://ngrok.com'
          label='ngrok' />.
      </p>
    </>
  );
};

export default PostMarkupValidity;
