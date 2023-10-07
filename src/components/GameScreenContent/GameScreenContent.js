import {useMemo, useEffect, useRef} from "react";
import cn from "classnames";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {Image} from "../Image";
import {Timer} from "../Timer";
import Image1 from "../../assets/images/effects/image3.svg";
import Image2 from "../../assets/images/items/image2.svg";
import Image3 from "../../assets/images/items/image3.svg";
import Image4 from "../../assets/images/items/image4.svg";
import Image5 from "../../assets/images/effects/image4.svg";
import {useProgress} from "../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../ScreenContentTemplate";
import {useGame} from "../../hooks/useGame";
import {CLICKS, TIME_FOR_CLICKS, NEXT_SCREEN_DELAY, STATUS, TIME_FOR_GETTING_READY} from "../../constants/game";
import {FailPanel} from "./FailPanel";
import {OverlayTimer} from "../OverlayTimer";
import {Ripples} from "../Ripples/Ripples";
import {ANIMATION_DURATION, ANIMATION_NAME} from "../../constants/styles";
import styles from './GameScreenContent.module.scss'

export function GameScreenContent(props) {
  const {className, winContent, defaultContent} = props
  const containerRef = useRef()
  const {next} = useProgress()
  const {gettingReadyTimeLeft, timeLeft, status, failsCount, start, restart} = useGame({
    containerRef,
    time: TIME_FOR_CLICKS,
    timeForGettingReady: TIME_FOR_GETTING_READY,
    clicks: CLICKS,
  })
  const formattedGettingReadyTimeLeft = gettingReadyTimeLeft + 1000 >= TIME_FOR_GETTING_READY ?
    TIME_FOR_GETTING_READY
    : gettingReadyTimeLeft + 1000
  const greyscaleClassNames = cn(styles.greyscaleTarget, status !== STATUS.WIN && styles.greyscale)

  const innerContent = useMemo(() => {
    if (status === STATUS.FAIL) {
      return {
        key: 'FAIL',
        content: (
          <div className={styles.failPanelWrapper}>
            <FailPanel failsCount={failsCount} onRetry={restart} />
          </div>
        ),
      }
    }

    if (status === STATUS.WIN) {
      return {
        key: 'WIN',
        content: (
          <div className={cn(styles.winInnerContent, greyscaleClassNames)}>
            {winContent}
          </div>
        ),
      }
    }

    return {
      key: 'DEFAULT',
      content: (
        <div className={cn(styles.defaultInnerContent, greyscaleClassNames, status === STATUS.GETTING_READY && styles.mute)}>
          {defaultContent}
        </div>
      )
    }
  }, [defaultContent, failsCount, greyscaleClassNames, restart, status, winContent])

  useEffect(() => {
    if (status === STATUS.WIN) {
      setTimeout(next, NEXT_SCREEN_DELAY)
    }
  }, [status])

  useEffect(() => {
    setTimeout(start, ANIMATION_DURATION)
  }, [])

  return (
    <ScreenContentTemplate ref={containerRef} className={className}>
      <Ripples enabled={status === STATUS.PLAYING} containerRef={containerRef}>
        <ScreenContentTemplate.Images className={greyscaleClassNames}>
          <Image className={styles.image1} src={Image1} />
          <Image className={styles.image2} src={Image2} />
          <Image className={styles.image3} src={Image3} />
          <Image className={styles.image4} src={Image4} />
          <Image className={styles.image5} src={Image5} />
        </ScreenContentTemplate.Images>
        <ScreenContentTemplate.Content className={cn(styles.content, status === STATUS.PLAYING && styles.playing)}>
          <Timer time={timeLeft} />
          <SwitchTransition>
            <CSSTransition
              key={innerContent.key}
              timeout={ANIMATION_DURATION}
              classNames={ANIMATION_NAME}
              mountOnEnter
              unmountOnExit
            >
              {innerContent.content}
            </CSSTransition>
          </SwitchTransition>
          <CSSTransition
            in={status === STATUS.GETTING_READY}
            timeout={ANIMATION_DURATION}
            classNames={ANIMATION_NAME}
            mountOnEnter
            unmountOnExit
          >
            <OverlayTimer className={styles.overlayTimer} time={formattedGettingReadyTimeLeft} />
          </CSSTransition>
        </ScreenContentTemplate.Content>
      </Ripples>
    </ScreenContentTemplate>
  )
}

GameScreenContent.preloadImages = [Image1, Image2, Image3, Image4, Image5]