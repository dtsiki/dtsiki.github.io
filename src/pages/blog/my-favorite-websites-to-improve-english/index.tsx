import React, { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import ExternalLink from 'src/components/common/ExternalLink';
import Hero from 'src/components/layout/Hero';
import { HeroPattern, HeroSize, HeroVariant } from 'src/components/layout/Hero/Hero';
import Thanks from 'src/components/common/Thanks';
import Window, { WindowType } from 'src/components/common/Window/Window';

import styles from './post.module.scss';
import quizletSet from '../../../../public/assets/blog/my-favorite-websites-to-improve-english/quizlet-set.png';
import quizletAchievements from '../../../../public/assets/blog/my-favorite-websites-to-improve-english/quizlet-achievements.png';
import quizletSearch from '../../../../public/assets/blog/my-favorite-websites-to-improve-english/quizlet-search.png';
import youglish from '../../../../public/assets/blog/my-favorite-websites-to-improve-english/youglish.png';
import contextReversoMain from '../../../../public/assets/blog/my-favorite-websites-to-improve-english/context-reverso-main.png';
import contextReversoSearch from '../../../../public/assets/blog/my-favorite-websites-to-improve-english/context-reverso-search.png';
import googleImagesSearch from '../../../../public/assets/blog/my-favorite-websites-to-improve-english/google-images-search.png';
import leetcode from '../../../../public/assets/blog/my-favorite-websites-to-improve-english/leetcode.png';

const Post = (): ReactElement => {
  const bind = classNames.bind(styles);

  const title = 'My favorite websites to improve English';
  const highlight = 'English learning web tools I can not live without 💜';
  const metaDescription = 'Websites to improve English by yourselft';
  const metaTags = 'English, tips, learning english, изучение английского, английский язык';
  const date = '24 apr, 2024';
  const tags = ['english'];

  return (
    <>
      <Hero
        size={HeroSize.CUSTOM}
        variant={HeroVariant.SECONDARY}
        pattern={HeroPattern.PENCILS}
        height={500}
        hasOverlay />
      <ProgressScroll />
      <PostLayout
        title={title}
        highlight={highlight}
        category='tips'
        date={date}
        metaDescription={metaDescription}
        metaTags={metaTags}
        tags={tags}>
        <section>
          <h2>1. Quizlet</h2>
          <h3>
            <ExternalLink
              href='https://quizlet.com/'
              label='https://quizlet.com' />
          </h3>
          <ul className='tag-list spacer top small'>
            {['vocabulary', 'pronunciation'].map((item) => {
              return (
                <li
                  className='tag-list__item secondary'
                  key={item}>
                  {item}
                </li>
              )})}
          </ul>
          <p>
            Quizlet is my ultimate tools to learn English by yourself.
            It allows to create study sets and then turn them into interactive flashcards, tests, and study games.
          </p>
          <p>
            My favorite way to use Quizlet is creating sets for each book I read (in English of course).
            I always add all new words for me or words that I would like to remember.
            There are already more than a dozen books sets in my profile.
            My fav set is <i>Potteriana vocabulary set</i> - one day I decided to re-read the entire series of Harry Potter books in English and discovered a huge number of specific words related to this series - wand, cauldron, broomstick, spell, leaky, etc.
          </p>
          <div className={bind([styles.post__image, 'spacer top bottom large'])}>
            <Window
              type={WindowType.IMAGE}
              title='GALLERY'
              fileTitle='Quzlet (1).png'>
              <Image
                layout='responsive'
                src={quizletSet}
                alt='A screenshot of Quizlet set. There are cards with words from Harry Potter with its explanation and image, for example quill, cloak, etc' />
            </Window>
            <p className={styles.post__caption}>
              My Potteriana vocabulary set on Quizlet 🪄
            </p>
          </div>
          <p>
            As I said before, you can add new words to sets, but Quizlet allows you not just add words in boring dictionary, but also to write a description for them and add pictures.
          </p>
          <p>
            After adding new words in Quizlet you can gamify the process of memorizing them - play flashcards, take the test, play the match game.
            If you are a gambling person like me there are also achievements!
          </p>
          <div className={bind([styles.post__image, 'spacer top bottom large'])}>
            <Window
              type={WindowType.IMAGE}
              title='GALLERY'
              fileTitle='Quizlet (2).png'>
              <Image
                layout='responsive'
                src={quizletAchievements}
                alt='A screenshot of Quizlet achievements. There are a few of them: Flashcard whiz, Active learner, Match whiz, Night owl, Early bird, etc' />
            </Window>
            <p className={styles.post__caption}>
              Some of my quizlet achievements 🏆
            </p>
          </div>
          <p>
            Also if you don&#39;t want to waste time creating sets from scratch you just can search it!
          </p>
          <div className={bind([styles.post__image, 'spacer top bottom large'])}>
            <Window
              type={WindowType.IMAGE}
              title='GALLERY'
              fileTitle='Quzlet (3).png'>
              <Image
                layout='responsive'
                src={quizletSearch}
                alt='A screenshot of Quizlet search for query "frontend"' />
            </Window>
            <p className={styles.post__caption}>
              Quizlet search result for &quot;frontend&quot;
            </p>
          </div>
        </section>
        <section>
          <h2>2. Youglish</h2>
          <h3>
            <ExternalLink
              href='https://youglish.com'
              label='https://youglish.com' />
          </h3>
          <ul className='tag-list spacer top small'>
            {['pronunciation', 'listening'].map((item) => {
              return (
                <li
                  className='tag-list__item secondary'
                  key={item}>
                  {item}
                </li>
              )})}
          </ul>
          <p>
            YouTube has lots and lots and lots of videos.
            Why not use them to learn English?
            I guess that&#39;s how Youglish appeared.
            Youglish is a website that can help you to improve pronunciation with YouTube videos.
          </p>
          <p>
            Enter a word, select a language (you can choose between several english dialects) and voila, watch how native speakers pronounce the word in the context of its use.
            Currently Youglish provides the following English dialects: United States (US), United Kingdom (UK), Australia (AUS), Canada (CAN) Ireland (IE), Scotland (SCO) and New Zealand (NZ).
            I highly recommend to check how some words sound in different English dialects just for fun. For example check US, UK and AUS. I&#39;m sure you&#39;ll be surprised.
          </p>
          <div className={bind([styles.post__image, 'spacer top bottom large'])}>
            <Window
              type={WindowType.IMAGE}
              title='GALLERY'
              fileTitle='Youglish'>
              <Image
                layout='responsive'
                src={youglish}
                alt='A screenshot of Youglish. I typed the "yay" word into the search bar and there is an result: video where a girl says this word' />
            </Window>
            <p className={styles.post__caption}>
              Youglish search result for &quot;yay&quot; (that&#39;s my fav english word, yay!)
            </p>
          </div>
          <p>
            I really like the simplicity of this tools!
            If you still don&#39;t practice pronunciation I recommend trying it with Youglish.
          </p>
        </section>
        <section>
          <h2>3. Reverso Context</h2>
          <h3>
            <ExternalLink
              href='https://context.reverso.net'
              label='https://context.reverso.net' />
          </h3>
          <ul className='tag-list spacer top small'>
            {['writing', 'pronunciation', 'grammar'].map((item) => {
              return (
                <li
                  className='tag-list__item secondary'
                  key={item}>
                  {item}
                </li>
              )})}
          </ul>
          <p>
            Reverso Context is a free online translation service that can translate texts between selected languages.
            It doesn&#39;t just dummy translate texts, it uses already translated texts to provided accurate translations.
            I recommend using Reverso Context to find sentence examples in their <i>natural habitats</i>.
          </p>
          <div className={bind([styles.post__image, 'spacer top bottom large'])}>
            <Window
              type={WindowType.IMAGE}
              title='GALLERY'
              fileTitle='Reverso Context (1).png'>
              <Image
                layout='responsive'
                src={contextReversoMain}
                alt='A screenshot of Reverso Context`s main page with search bar' />
            </Window>
            <p className={styles.post__caption}>
              Main page of Reverso Context, it&#39;s where the magic begins
            </p>
          </div>
          <p>
            You can select different languages - from which you translate the text and to which one you translate it.
            I always use Reverso Context for writing articles or while reading books and highly recommend you to do the same.
          </p>
          <div className={bind([styles.post__image, 'spacer top bottom large'])}>
            <Window
              type={WindowType.IMAGE}
              title='GALLERY'
              fileTitle='Reverso Context (2).png'>
              <Image
                layout='responsive'
                src={contextReversoSearch}
                alt='A screenshot of Reverso Context`s search result' />
            </Window>
            <p className={styles.post__caption}>
              Reverso Context search result for &quot;leviosa&quot;. As you can see, there are real quotes
            </p>
          </div>
        </section>
        <section>
          <h2>4. Google Images</h2>
          <h3>
            <ExternalLink
              href='https://images.google.com'
              label='https://images.google.com' />
          </h3>
          <ul className='tag-list spacer top small'>
            {['vocabulary'].map((item) => {
              return (
                <li
                  className='tag-list__item secondary'
                  key={item}>
                  {item}
                </li>
              )})}
          </ul>
          <p>
            Yep, one of my favorite tools is Google Images.
          </p>
          <div className={bind([styles.post__image, 'spacer top bottom large'])}>
            <Window
              type={WindowType.IMAGE}
              title='GALLERY'
              fileTitle='Google Images (1).png'>
              <Image
                layout='responsive'
                src={googleImagesSearch}
                alt='A screenshot of Google Images`s search result: I googled cats and there are a lot of cats' />
            </Window>
            <p className={styles.post__caption}>
              Meow 😸
            </p>
          </div>
          <p>
            In my previous article I already wrote that memorizing words through pictures is a great way to learn new words, especially if you&#39;re a visual learner (you better internalize information through images, pictures and spatial perception) like me.
            So how to use Google Images? Go to Google, type in the search box a word, which you want to memoize and then select images tab.
            Have a look (quick or not) at the search result.
            It may take a while to find the ideal picture, don&#39;t worry.
            Furthermore, you can save your pairs word/image somewhere, for example in “electronic dictionary”.
            I was using as electronic dictionary my private Telegram channel where I&#39;ve been posting pictures with its translations.
            You can just create a folder on your PC or device and put image files inside it.
          </p>
        </section>
        <section>
          <h2>5. Leetcode</h2>
          <h3>
            <ExternalLink
              href='https://leetcode.com'
              label='https://leetcode.com' />
          </h3>
          <ul className='tag-list spacer top small'>
            {['vocabulary', 'writing'].map((item) => {
              return (
                <li
                  className='tag-list__item secondary'
                  key={item}>
                  {item}
                </li>
              )})}
          </ul>
          <p>
            Leetcode is one of many websites to practice coding via solving online algorithmic problems.
            Leetcode  is very popular among beginners or experienced developers and job seekers.
            Part coding test, part community forum and part interview preparation tool - it&#39;s all about Leetcode.
          </p>
          <p>
            You may be wondering why I added Leetcode to the list of useful websites for learning English.
            I am a developer and my profession is solving the problems everyday.
            Leetcode is mainly English based community which allows to simultaneously improve hard skills and learn the language, so that&#39;s why.
          </p>
          <div className={bind([styles.post__image, 'spacer top bottom large'])}>
            <Window
              type={WindowType.IMAGE}
              title='GALLERY'
              fileTitle='Leetcode (1).png'>
              <Image
                layout='responsive'
                src={leetcode}
                alt='A screenshot of Leetcode' />
            </Window>
            <p className={styles.post__caption}>
              There is a screenshot of one of the Leetcode`s problem (not the easy one tbh)
            </p>
          </div>
          <p>
            Don&#39;t worry if you are not a developer.
            You don&#39;t have to join Leetcode and solve algorithmic problems.
            Just find an English community suitable for your job or hobby and dive in it.
            There is a huge variety of communities on the Internet, I&#39;m sure you will find something appropriate for yourself.
          </p>
        </section>
        <section>
          <h2>6. ???</h2>
          <p>
            I hope the list will continue to grow.
            So come back often and check out the new updates.
            See y&#39;all!
          </p>
        </section>
        <Thanks />
      </PostLayout>
    </>
  );
};

export default Post;
