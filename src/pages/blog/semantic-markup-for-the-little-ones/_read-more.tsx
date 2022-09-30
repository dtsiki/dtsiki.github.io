import React, { ReactElement } from 'react';
import { nanoid } from 'nanoid';

import ReadMore from 'src/components/pages/blog/ReadMore';

const PostReadMore = (): ReactElement => {
  const sources = [
    {
      id: nanoid(),
      link: 'https://www.ambitiouskitchen.com/best-cinnamon-rolls/',
      label: 'The best cinnamon rolls recipe'
    },
    {
      id: nanoid(),
      link: 'https://validator.w3.org/',
      label: 'W3C Markup Validation Service'
    },
    {
      id: nanoid(),
      link: 'https://khan.github.io/tota11y/',
      label: 'An accessibility visualization toolkit'
    },
    {
      id: nanoid(),
      link: 'https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/',
      label: 'An article about inline, block and (WHOA) inline-block behaivor of HTML elements'
    },
    {
      id: nanoid(),
      link: 'https://www.w3docs.com/learn-html/deprecated-html-tags.html',
      label: 'Depricated HTML tags'
    },
    {
      id: nanoid(),
      link: 'https://www.dofactory.com/html/attributes/deprecated',
      label: 'List of deprecated HTML attributes'
    },
    {
      id: nanoid(),
      link: 'https://milhidaka.github.io/chainer-image-caption/',
      label: 'Image caption generator'
    },
    {
      id: nanoid(),
      link: 'https://moz.com/learn/seo/alt-text',
      label: 'Alternative texts guide'
    },
    {
      id: nanoid(),
      link: 'https://benmyers.dev/blog/clickable-divs/',
      label: 'How (not) to build a button'
    },
    {
      id: nanoid(),
      link: 'https://www.smashingmagazine.com/2019/02/buttons-interfaces/',
      label: 'When is a button not a button?'
    },
    {
      id: nanoid(),
      link: 'https://accessibility.psu.edu/listshtml/',
      label: 'Lists in HTML'
    }
  ];

  return (
    <ReadMore sources={sources} />
  );
};

export default PostReadMore;
