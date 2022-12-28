import React, { ReactElement, useRef } from 'react';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import ExternalLink from 'src/components/common/ExternalLink';
import Hero from 'src/components/layout/Hero';
import { HeroPattern, HeroSize, HeroVariant } from 'src/components/layout/Hero/Hero';

import styles from './post.module.scss';

const Post = (): ReactElement => {
  const heroRef = useRef<HTMLDivElement>(null);
  const postRef = useRef<HTMLDivElement>(null);

  const title = 'How I improved my English';
  const highlight = 'Tips that helped me and that can help you to improve your English level'
  const metaDescription = 'How to improve English';
  const metaTags = 'english, tips, learning english, english level';

  return (
    <div className={styles.post}>
      <section ref={heroRef}>
        <Hero
          size={HeroSize.CUSTOM}
          variant={HeroVariant.SECONDARY}
          pattern={HeroPattern.ARROWS}
          height={390}
          hasOverlay />
      </section>
      <ProgressScroll />
      <article ref={postRef}>
        <PostLayout
          title={title}
          highlight={highlight}
          category='insights'
          date='28 dec, 2022'
          metaDescription={metaDescription}
          metaTags={metaTags}
          tags={['english']}>
          <section>
            <p>
              I was never very good in English.
              Probably, I should say I&#39;ve never been good at that because I&#39;ve not known it perfect yet and there is still room to grow.
            </p>
            <p>
              I&#39;ve started learning English when I went to secondary school.
              It has been 15 years since I had my first English lesson and, as you can see from my example, it&#39;s not enough just to have plenty of time to make you a good at something.
              The 10 000 hour rule doesn&#39;t work when 10 000 hours is wasted.
            </p>
            <p>
              I decided to make a fresh start in learning at the end of 2019 and in this article I want to share my experience.
              There are tips that helped me to improve my English level.
              There are no tips such as <i>change your phone language to English</i> or <i>watch Netflix in English</i>.
              They can be useful, but also they are dull in the long-term perspective in my opinion.
            </p>
            <p>
              Let&#39;s go!
            </p>
          </section>
          <section>
            <h2>Preparation</h2>
            <p>
              There are a couple of steps to be made before diving in learning.
            </p>
            <p>
              The first step is to define your goals of learning English.
              Why do you need to do it?
              Do you want to travel and speak fluently?
              To read books in the original?
              To watch videos and shows without intermediaries such as subtitles or local dubbing?
              To get a abroad job? Or to get a promotion on your current job?
              Where there&#39;s no goal there can be no motivation.
              It&#39;s also normal to have several goals, it&#39;s not criminal behavior, in my view.
            </p>
            <p>
              In my case, I had several goals.
              Let me tell you about them as an example.
              First, I need English in my job as an frontend developer.
              English is important communication tool in all fields nowadays and IT is no exception.
              English is the most popular programming language and all documentation are mostly written in English.
              I suspect, my career will be over without knowledge of English.
            </p>
            <p>
              I&#39;m a bookworm therefore reading books in the original was my second goal.
              There is something fascinating about reading books in English for me.
              I read the Harry Potter series in my native language almost twelve years ago  and one of my dreams was to reread it in English.
              Spoiler: I&#39;ve almost got it!
              As you can see, I have no ✨BIG✨ goals but my small goals motivated me perfectly. Let me say it again: where there&#39;s no goal there can be no motivation.
            </p>
            <p>
              After you define your goals, you should determine and admit your weaknesses.
              I knew this would be hard for you, but don&#39;t overestimate your English level.
              Don&#39;t get ahead of yourself!
              If you struggle with determining, you can take an online test.
              Then you can find description of your English level and find out your strengths and weaknesses.
            </p>
            <p>
              Be sure to remember test: you can retake the test after a while to assess your progress.
              If you already know your weaknesses, you can still take the test, it will be useful to know your English level anyway.
            </p>
            <p>
              Before I started re-learning English I had an pre-intermediate level (A2) for ages.
              I was already good at reading, but I was bad at grammar and speaking.
              My grammar and speaking skill were so bad so they pulled my English level down.
              Now I have at least a B1 level.
            </p>
            <p>
              Alright, we are ready to move on. Here&#39;s steps that helped me to improve my English level:
            </p>
          </section>
          <section>
            <h2>1. Have a plan</h2>
            <p>
              Before all, you need a strategy because it sets the direction of the whole learning process.
              That&#39;s true for any business, by the way.
              Without any plan you&#39;ll have no idea what to do, where to go next and, the most important thing, what you&#39;ve done.
            </p>
            <p>
              But on the other hand, you don&#39;t need a ten year plan or plan for learning English from A1 level to C1 for one year.
              Face it, a huge plan will scare you and you&#39;ll stop learning.
              Your plan should be a realistic and easy to follow.
            </p>
            <p>
              It&#39;s also important that your plan must depend on your goals and weaknesses.
              If you have a small vocabulary and don&#39;t know basic grammar it makes no sense to read old classic books - you won&#39;t understand anything.
              If you have no listening practice it makes no sense to listen long TED talks.
              You need to adjust your plans according your gaps in knowledge.
              Moreover, no matter how ambitious you are, start small.
              If your goal is improve your reading – you shouldn&#39;t start reading Ulysses by James Joyce.
              Start small: start with reading children books, fairy tales or short stories.
              Don&#39;t be in such a hurry to move up a level.
              Concentrate on the level you are at now.
              With time you will be a pro and will be able to read Ulysess.
            </p>
            <p>
              So, how to choose a plan?
              There are plenty sources for learning English: books, online courses, web-sites, applications, Youtube videos, podcasts, etc.
              You can hire a tutor or take an offline course if you have a lack of self-control or free money, after all.
            </p>
            <p>
              But let&#39;s set aside our money until better times or ideas.
              It&#39;s not necessary to buy a course: you can just spy on its program and then just follow it by own.
              There are many wonderful websites and apps and some of them are free.
              Maybe that sounds obvious but the Internet can be used not only for watching funny videos.
              There is ocean of information available at a click.
              Just open Youtube and enter “English” and you&#39;ll get a variety of chanles that will help you to learn English.
            </p>
            <p>
              As I said above, I was really bad at grammar, so personally, I&#39;ve choosen a book by Raymond Murphy “Essential Grammar in Use” as my plan.
              It&#39;s an excellent grammar guide with simple rules and different exercises.
              There is not too much theory in this book so I was doing some Google research trying to figure out some topics, but this book has the best structure that I have ever seen for a grammar book.
              I haven&#39;t read this book completely and I stopped using it, but I still go back to it sometimes.
            </p>
            <p>
              One way or another, there’re always a way if you have some plan.
            </p>
            <p>
              Let&#39;s go to the next important tip, which is linked with this.
            </p>
          </section>
          <section>
            <h2>2. Take a time</h2>
            <p>
              Even the best plan is powerless without if you don&#39;t have time.
              Set aside time each day for learning English.
              You don&#39;t need to set aside hours of your time.
              Time is valuable, so 15 minutes or even 5 minutes is nice enough.
              5 minutes a day 7 days a week is more than half an hour of learning English in a week.
              It&#39;s not necessary to have a degree in mathematics that 35 minutes of learning English is greater than 0 minutes of learning English.
              Consistency and constancy are the key to success.
              However, it doesn&#39;t matter if you miss a day.
              Just don&#39;t give up and move on.
            </p>
            <p>
              Don&#39;t forget to figure out your best time and find your perfect place to learn.
              This time is sacred.
              Nothing is going to distract you during this time.
            </p>
            <p>
              I prefer learning in the morning before work because it&#39;s quiet time and my head is clear.
              I mentioned above what I chose as my plan the grammar book “Essential Grammar in Use”.
              This book has the following structure: each spread is devoted to a specific grammar topic, you can find the grammar itself on one side of the spread and exercises on the other side.
              It&#39;s a convenient structure for daily lessons.
              I timed and each topic took about 15 minutes every day.
              Looks like it can easily be turned into habit.
            </p>
            <p>
              Well, let&#39;s suppose you have a plan and set aside some time.
              What to do next?
            </p>
          </section>
          <section>
            <h2>3. Practice, practice, practice</h2>
            <p>
              Your next step is practice.
              Practice, practice, practice.
              And then practice again.
              But how to practice? I&#39;ll show you.
            </p>
            <p>
              There are 4 core skills: reading, writing, speaking and listening.
              The following tips will be linked with these 4 skills.
              You can easy set aside no more than 5-15 minutes per day for all activities below.
            </p>
            <ul className='list markered'>
              <li className='list__item'>
                <h3 className='list__title'>
                  Learn the basics  or less is more
                </h3>
                <p>
                  It doesn&#39;t matter what is your  goal, you need to know some basic grammar in any case.
                  Developing a solid foundation in the grammar will help you create your own sentences correctly in all areas at once: reading, writing, speaking and listening.
                  But you don&#39;t need to learn the full grammar.
                  For example, there are 12 tenses in English, but native speakers don&#39;t use all of them, so you don&#39;t have to learn all of them in the early days.
                  It&#39;s better to know perfectly several tenses then to know mediocre all of them.
                </p>
              </li>
              <li className='list__item'>
                <h3 className='list__title'>Write</h3>
                <p>
                  If you want to improve writing you need to practice writing, huh.
                  There are a lot of options here.
                  You can write essays on favorite topics, try blogging, keep a journal, maintain to-do lists, write letter to someone (it not required to send), etc.
                  Find an activity you like or choose what you already do every day and then just do it in English.
                  The main point here is that you will know the topic that is important to you in everyday life and it will expand your active vocabulary.
                  You don&#39;t need to know deeply philosophical terms if you don&#39;t need them in everyday life.
                  I practice writing with this blog, where I write about my favorite topics.
                  Try to find something interesting for yourself!
                </p>
              </li>
              <li className='list__item'>
                <h3 className='list__title'>Read aloud</h3>
                <p>
                  If you feel insecure or shy when you speak English and feel like you can never do it, try to read aloud alone.
                  It will help to build English speaking confidence.
                  Choose a short article, excerpt from a book or write a small essay on your favorite topic and then read aloud.
                  Then you can check your pronunciation yourself in a variety ways:
                  <ol className='list ordered nested'>
                    <li className='list__item'>
                      <p>
                        Listen to the pronunciation in
                        {' '}
                        <ExternalLink
                          label='Google translate'
                          href='https://translate.google.com' />
                        {' '}
                        and compare with your own pronunciation.
                      </p>
                    </li>
                    <li className='list__item'>
                      <p>
                        Check the pronunciation in
                        {' '}
                        <ExternalLink
                          label='Youglish'
                          href='https://youglish.com' />.
                        Youglish is a tool that provides the correct pronunciation of words in multiple languages via YouTube videos.
                        And then compare with your own pronunciation.
                      </p>
                    </li>
                    <li className='list__item'>
                      <p>
                        Record your speech on a voice recorder.
                        Nobody likes to hear their own voice, but be brave.
                        It will help you to identify your pronunciation problems.
                      </p>
                    </li>
                  </ol>
                </p>
              </li>
              <li className='list__item'>
                <h3 className='list__title'>Try dictations</h3>
                <p>
                  If you feel unconfident and lost while listening you should try dictations.
                  You can find simple and short dictations, listen and write down what you hear and then check yourself.
                  It sounds boring as hell and, come on, we are not in school!, but this method really helped me to improve my listening.
                </p>
              </li>
              <li className='list__item'>
                <h3 className='list__title'>Learn the most common English words</h3>
                <p>
                  There are a lot of lists like
                  {' '}
                  <ExternalLink
                    label='The 100 most common words in English'
                    href='https://www.espressoenglish.net/the-100-most-common-words-in-english' />
                  {' '}
                  or even
                  {' '}
                  <ExternalLink
                    label='The 3000 most common words in English'
                    href='https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words' />.
                  Check this lists and find words you don&#39;t know.
                  To remember these words you can try to make sentences with them.
                </p>
              </li>
              <li className='list__item'>
                <h3 className='list__title'>Read a book and listen its audiobook at the same time</h3>
                <p>
                  It&#39;s not the most obvious advice you could get, I guess.
                  If you&#39;re a bookworm like me and want to kill two bees at once, try this tips.
                  Just choose a book and listen to its audio version at the same time while reading.
                  For example, I read the Harry Potter series while listening its audiobook narrated by Stephen Fry and it was amazing!
                </p>
              </li>
              <li className='list__item'>
                <h3 className='list__title'>Make simple conversations with yourself</h3>
                <p>
                  Try to describe what you see around you or try to describe how your day went an invisible friend.
                  Or create your own themes. It will teach you to think faster.
                </p>
              </li>
              <li className='list__item'>
                <h3 className='list__title'>Check words, phrases and sentences</h3>
                <p>
                  It&#39;s no bad to use Google translator,
                  but you can move to the next level by using another translation tools.
                  My favorite is
                  {' '}
                  <ExternalLink
                    label='Reverso'
                    href='https://context.reverso.net/translation' />.
                  It is a free online translation service that translates texts between selected languages.
                  I prefer Reverso’ translations more then Google’ because the first one seems more accurate and I can see lots of usage examples.
                </p>
                <p>
                  Another my favorite technique is searching new words in Google images tab.
                  If you like me have a good visual memory you need to try this way of memorizing new words.
                </p>
              </li>
              <li className='list__item'>
                <h3 className='list__title'>Read books</h3>
                <p>
                  Reading books in English is a skill that can be developed.
                  There are several rules to do it.
                </p>
                <p>
                  At first, it&#39;s important that selected book is appropriate for your English level.
                  If you are looking up the meaning of every second word in the dictionary while reading, probably, selected book is not up to your level.
                  Yes, we need to learn new vocabulary, but we need to understand what we are reading.
                  You can find many collections of books by English level.
                  There are also adapted books.
                  You will definitely find something!
                </p>
                <p>
                  At second, read what interests you.
                  Will you read a boring book in your native language?
                  I won&#39;t and will quickly give up reading.
                </p>
                <p>
                  At third, read every day. Or almost every day.
                  Hang on, you don&#39;t have to read half a book every day.
                  A couple of pages is enough.
                </p>
              </li>
            </ul>
            <p>
              Now you know my little secrets.
              What to do next?
            </p>
          </section>
          <section>
            <h2>4. Enjoy the process!</h2>
            <p>
              And, last but not least.
              This is the most important step.
              We, humans, don&#39;t like doing boring things.
              Let&#39;s be honest, if you are bored while learning English, you will give up no matter what your goal is and how is your motivation high.
              You don&#39;t have to study the grammar from boring textbooks for two hours a day seven days a week (if it doesn&#39;t make you happy, if you like it - go ahead!).
            </p>
            <p>
              Find a learning process which will make you happy and go for it!
            </p>
          </section>
          <section>
            <h2>Summary</h2>
            <p>To improve your English you should have a plan, take a time and enjoy the process!</p>
          </section>
        </PostLayout>
      </article>
    </div>
  );
};

export default Post;
