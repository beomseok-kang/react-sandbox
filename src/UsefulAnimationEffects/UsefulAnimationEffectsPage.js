import React, { useEffect } from 'react';
import lettersInAndOut from './js/lettersInAndOut';
import consoleText from './js/terminalText';
import './css/main.css';
import StyledHeading from './StyledHeading';

// import html from './useful-animation-effects.html';

function UsefulAnimationEffectsPage() {
  // const [innerHTML, setInnerHTML] = useState('');
  useEffect(() => {
    const liao = new lettersInAndOut(window, document);
    consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);
    return () => {
      liao.unmount();
    }
  }, []);

  return (
    <>
        <div className="inner" id="letters-in-and-out">
            <StyledHeading>lettersInAndOut</StyledHeading>
            <div className="center-wrapper">
                <span className="word blue">McDonalds</span>
                <span className="word red">KFC</span>
                <span className="word green">GBK</span>
                <span className="word yellow">Burger_King</span>
                <span className="word tomato">Byron</span>
                <span className="word cyan">Jolibee</span>
                <span className="word violet">Imperial_Union_Bar</span>
            </div>
        </div>
        <div className="inner" id="letters-up-and-down">
            <StyledHeading>lettersUpAndDown</StyledHeading>
            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">
                    Hello
                    </p>
                    <ul className="content__container__list">
                        <li className="content__container__list__item">world !</li>
                        <li className="content__container__list__item">Beom Seok !</li>
                        <li className="content__container__list__item">users !</li>
                        <li className="content__container__list__item">everybody !</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="inner" id="glitch">
            <StyledHeading>glitch</StyledHeading>
            <div className="glitch" data-text="GLITCH!">GLITCH!</div> 
        </div>

        <div className='console-container inner' id="terminal-text">
            <StyledHeading>terminalText</StyledHeading>
            <span id='text'></span>
            <div className='console-underscore' id='console'>&#95;</div>
        </div>

        <div className="title inner" id="text-with-background">
            <StyledHeading>textWithBackground</StyledHeading>
            <h1>text with<br/>background</h1>
        </div>

        <div className="inner" id="focus-text">
            <StyledHeading>focusText</StyledHeading>
            <div className="center-wrapper">
                <div className="focus"> 
                    <div className="focus--mask">
                        <div className="focus--mask-inner">Beom Seok</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default UsefulAnimationEffectsPage;