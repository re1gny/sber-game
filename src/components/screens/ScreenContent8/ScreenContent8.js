import { Text } from "../../Text";
import { Button } from "../../Button";
import { Image } from "../../Image";
import Image1 from "../../../assets/images/effects/image1.png";
import Image2 from "../../../assets/images/effects/image3.png";
import Image3 from "../../../assets/images/effects/image18.png";
import { useProgress } from "../../../contexts/ProgressContext";
import { ScreenContentTemplate } from "../../ScreenContentTemplate";
import { Panel } from "../../Panel";
import { Title } from "../../Title";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";
import styles from "./ScreenContent8.module.scss";

export function ScreenContent8(props) {
  const { className } = props;
  const { next } = useProgress();

  function handleNext() {
    reachMetrikaGoal("fact3");
    next();
  }

  return (
    <ScreenContentTemplate className={className}>
      <ScreenContentTemplate.Images>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
        <Image className={styles.image3} src={Image3} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={styles.content}>
        <Panel className={styles.panel}>
          <Text className={styles.textWrapper}>
            <Text as="span">
              Отзывчивый коллектив&nbsp;— это&nbsp;когда задаешь вопрос
              и&nbsp;получаешь развернутый ответ от&nbsp;нескольких кураторов!
            </Text>
          </Text>
          <Title width="315" height="117">
            <path
              d="M13.512 18V4.8H5.832V18H1.992V1.2H17.352V18H13.512ZM29.3205 18.288C23.8965 18.288 20.0805 15.144 20.0805 9.576C20.0805 4.392 23.8245 0.912 29.2965 0.912C34.6965 0.912 38.5125 4.08 38.5125 9.624C38.5125 14.808 34.7685 18.264 29.3205 18.288ZM24.1605 9.6C24.1605 12.384 25.8885 14.664 29.3205 14.688C32.4885 14.688 34.4325 12.648 34.4325 9.6C34.4325 6.816 32.7045 4.536 29.2725 4.512C26.0805 4.536 24.1605 6.576 24.1605 9.6ZM56.4653 18V6.456L51.9293 14.184H49.7933L45.1133 6.504V18H41.2733V1.2H46.2173L50.9453 9.288L55.6253 1.2H60.3053V18H56.4653ZM76.2409 18V11.16H68.1289V18H64.2889V1.2H68.1289V7.56H76.2409V1.2H80.0809V18H76.2409ZM87.9101 1.2V12.504L95.6381 1.2H99.8861V18H96.0461V6.432L88.2461 18H84.0701V1.2H87.9101ZM103.491 20.4C105.027 19.944 106.107 19.08 106.299 18.24H106.251C104.595 18.24 104.091 17.28 104.091 16.104C104.091 14.904 104.595 13.92 106.251 13.92C106.803 13.92 107.211 14.016 107.523 14.184C108.147 14.52 108.747 15.312 108.747 16.872C108.747 20.016 106.251 21.648 104.787 21.936L103.491 20.4ZM133.225 1.2L128.281 4.8H126.337V18H122.497V4.8H117.409V1.2H133.225ZM147.342 1.2L142.398 4.8H138.582V7.56H145.662V11.16H138.582V14.4H146.814V18H134.742V1.2H147.342ZM157.22 10.56H153.98V14.4H157.148C158.732 14.4 160.1 14.016 160.1 12.36C160.1 10.848 158.9 10.56 157.22 10.56ZM163.22 1.2L158.276 4.8H153.98V6.96H157.244C161.756 6.96 164.036 8.736 164.036 12.336C164.036 16.032 161.084 18 157.1 18H150.14V1.2H163.22ZM175.999 18V13.296H173.935C173.551 13.296 173.167 13.296 172.831 13.272L170.047 18H165.631L169.063 12.552C166.807 11.616 165.919 9.84 165.919 7.368C165.919 3.24 168.679 1.2 173.911 1.2H179.839V18H175.999ZM169.879 7.344C169.879 8.952 170.839 9.696 173.263 9.696H175.999V4.8H173.431C171.031 4.8 169.879 5.592 169.879 7.344ZM197.567 18H190.055V1.2H197.639C201.791 1.2 203.615 2.784 203.615 5.496C203.615 7.272 202.943 8.472 201.311 9.24C203.207 9.672 204.119 10.92 204.119 13.104C204.119 16.584 201.575 18 197.567 18ZM193.895 14.4H197.663C199.583 14.4 200.255 13.8 200.255 12.648C200.255 11.592 199.559 10.968 197.663 10.968H193.895V14.4ZM193.895 7.992H197.327C199.031 7.992 199.775 7.32 199.775 6.336C199.775 5.376 199.103 4.8 197.423 4.8H193.895V7.992ZM221.159 12V16.272C220.319 17.28 218.159 18.288 215.303 18.288C209.735 18.264 205.847 15.12 205.847 9.576C205.847 4.392 209.687 0.912 215.351 0.912C217.895 0.912 219.767 1.56 220.919 2.232V7.2C219.863 5.808 217.895 4.512 215.351 4.512C212.063 4.512 210.047 6.552 210.047 9.6C210.047 12.384 211.823 14.688 215.351 14.688C218.135 14.688 220.151 13.608 221.159 12ZM236.615 1.2L231.671 4.8H227.855V7.56H234.935V11.16H227.855V14.4H236.087V18H224.015V1.2H236.615ZM251.414 1.2L246.47 4.8H243.254V18H239.414V1.2H251.414ZM249.661 14.4H251.341C252.253 12.216 252.829 9.672 252.901 4.68L252.949 1.2H265.285V14.4H267.013V21.12H263.413V18H253.285V21.12H249.661V14.4ZM256.549 4.8C256.453 9.096 256.045 11.856 255.133 14.4H261.445V4.8H256.549ZM279.474 1.2L286.266 18H282.21L280.89 14.568H273.69L272.346 18H268.506L275.226 1.2H279.474ZM275.106 10.968H279.498L277.314 5.328L275.106 10.968ZM13.512 49V35.8H5.832V49H1.992V32.2H17.352V49H13.512ZM29.3205 49.288C23.8965 49.288 20.0805 46.144 20.0805 40.576C20.0805 35.392 23.8245 31.912 29.2965 31.912C34.6965 31.912 38.5125 35.08 38.5125 40.624C38.5125 45.808 34.7685 49.264 29.3205 49.288ZM24.1605 40.6C24.1605 43.384 25.8885 45.664 29.3205 45.688C32.4885 45.688 34.4325 43.648 34.4325 40.6C34.4325 37.816 32.7045 35.536 29.2725 35.512C26.0805 35.536 24.1605 37.576 24.1605 40.6ZM39.0988 45.4H40.7788C41.6908 43.216 42.2668 40.672 42.3388 35.68L42.3868 32.2H54.7228V45.4H56.4508V52.12H52.8508V49H42.7228V52.12H39.0988V45.4ZM45.9868 35.8C45.8908 40.096 45.4828 42.856 44.5708 45.4H50.8828V35.8H45.9868ZM58.0598 45.4H59.7398C60.6518 43.216 61.2278 40.672 61.2998 35.68L61.3478 32.2H73.6838V45.4H75.4118V52.12H71.8118V49H61.6838V52.12H58.0598V45.4ZM64.9478 35.8C64.8518 40.096 64.4438 42.856 63.5318 45.4H69.8438V35.8H64.9478ZM90.5998 32.2L85.6558 35.8H81.8398V38.56H88.9198V42.16H81.8398V45.4H90.0718V49H77.9998V32.2H90.5998ZM99.1103 44.296H97.2383V49H93.3983V32.2H99.1103C105.014 32.2 107.102 34.312 107.102 38.104C107.102 42.256 104.366 44.296 99.1103 44.296ZM99.7823 35.8H97.2383V40.696H99.5903C102.014 40.696 103.142 39.88 103.142 38.128C103.142 36.544 102.182 35.8 99.7823 35.8ZM122.348 32.2V38.896H124.244L127.532 32.2H131.732L127.556 40.216L132.356 49H127.82L124.268 42.064H122.348V49H118.508V42.064H116.636L113.084 49H108.548L113.276 40.456L109.1 32.2H113.468L116.612 38.896H118.508V32.2H122.348ZM144.216 32.2L151.008 49H146.952L145.632 45.568H138.432L137.088 49H133.248L139.968 32.2H144.216ZM139.848 41.968H144.24L142.056 36.328L139.848 41.968ZM165.78 32.2L160.836 35.8H158.892V49H155.052V35.8H149.964V32.2H165.78ZM165.308 47.104C165.308 45.904 165.812 44.92 167.468 44.92C169.196 44.92 169.7 45.904 169.7 47.104C169.7 48.28 169.196 49.24 167.468 49.24C165.812 49.24 165.308 48.28 165.308 47.104ZM16.272 63.2L11.328 66.8H9.384V80H5.544V66.8H0.456V63.2H16.272ZM24.5908 63.2L31.3828 80H27.3268L26.0068 76.568H18.8068L17.4628 80H13.6228L20.3428 63.2H24.5908ZM20.2228 72.968H24.6148L22.4308 67.328L20.2228 72.968ZM37.4258 73.16V80H33.5858V63.2H37.4258V69.872H39.6338L44.0018 63.2H48.5618L42.9458 71.072L49.6898 80H44.8418L39.8498 73.16H37.4258ZM65.5665 80H58.0545V63.2H65.6385C69.7905 63.2 71.6145 64.784 71.6145 67.496C71.6145 69.272 70.9425 70.472 69.3105 71.24C71.2065 71.672 72.1185 72.92 72.1185 75.104C72.1185 78.584 69.5745 80 65.5665 80ZM61.8945 76.4H65.6625C67.5825 76.4 68.2545 75.8 68.2545 74.648C68.2545 73.592 67.5585 72.968 65.6625 72.968H61.8945V76.4ZM61.8945 69.992H65.3265C67.0305 69.992 67.7745 69.32 67.7745 68.336C67.7745 67.376 67.1025 66.8 65.4225 66.8H61.8945V69.992ZM89.1587 74V78.272C88.3187 79.28 86.1587 80.288 83.3027 80.288C77.7347 80.264 73.8467 77.12 73.8467 71.576C73.8467 66.392 77.6867 62.912 83.3507 62.912C85.8947 62.912 87.7667 63.56 88.9187 64.232V69.2C87.8627 67.808 85.8947 66.512 83.3507 66.512C80.0627 66.512 78.0467 68.552 78.0467 71.6C78.0467 74.384 79.8227 76.688 83.3507 76.688C86.1347 76.688 88.1507 75.608 89.1587 74ZM104.615 63.2L99.6714 66.8H95.8554V69.56H102.935V73.16H95.8554V76.4H104.087V80H92.0154V63.2H104.615ZM117.488 63.2V74.504L125.216 63.2H129.464V80H125.624V68.432L117.824 80H113.648V63.2H117.488ZM145.399 75.296H143.527V80H139.687V63.2H145.399C151.303 63.2 153.391 65.312 153.391 69.104C153.391 73.256 150.655 75.296 145.399 75.296ZM146.071 66.8H143.527V71.696H145.879C148.303 71.696 149.431 70.88 149.431 69.128C149.431 67.544 148.471 66.8 146.071 66.8ZM164.442 63.2L171.234 80H167.178L165.858 76.568H158.658L157.314 80H153.474L160.194 63.2H164.442ZM160.074 72.968H164.466L162.282 67.328L160.074 72.968ZM180.517 72.56H177.277V76.4H180.445C182.029 76.4 183.397 76.016 183.397 74.36C183.397 72.848 182.197 72.56 180.517 72.56ZM186.517 63.2L181.573 66.8H177.277V68.96H180.541C185.053 68.96 187.333 70.736 187.333 74.336C187.333 78.032 184.381 80 180.397 80H173.437V63.2H186.517ZM198.258 80.288C192.834 80.288 189.018 77.144 189.018 71.576C189.018 66.392 192.762 62.912 198.234 62.912C203.634 62.912 207.45 66.08 207.45 71.624C207.45 76.808 203.706 80.264 198.258 80.288ZM193.098 71.6C193.098 74.384 194.826 76.664 198.258 76.688C201.426 76.688 203.37 74.648 203.37 71.6C203.37 68.816 201.642 66.536 198.21 66.512C195.018 66.536 193.098 68.576 193.098 71.6ZM224.022 63.2L219.078 66.8H217.134V80H213.294V66.8H208.206V63.2H224.022ZM232.341 63.2L239.133 80H235.077L233.757 76.568H226.557L225.213 80H221.373L228.093 63.2H232.341ZM227.973 72.968H232.365L230.181 67.328L227.973 72.968ZM253.936 63.2L248.992 66.8H245.176V69.56H252.256V73.16H245.176V76.4H253.408V80H241.336V63.2H253.936ZM271.178 63.2L266.234 66.8H264.29V80H260.45V66.8H255.362V63.2H271.178ZM290.882 80V73.16H282.77V80H278.93V63.2H282.77V69.56H290.882V63.2H294.722V80H290.882ZM307.927 63.2L314.719 80H310.663L309.343 76.568H302.143L300.799 80H296.959L303.679 63.2H307.927ZM303.559 72.968H307.951L305.767 67.328L303.559 72.968ZM16.104 105V109.272C15.264 110.28 13.104 111.288 10.248 111.288C4.68 111.264 0.792 108.12 0.792 102.576C0.792 97.392 4.632 93.912 10.296 93.912C12.84 93.912 14.712 94.56 15.864 95.232V100.2C14.808 98.808 12.84 97.512 10.296 97.512C7.008 97.512 4.992 99.552 4.992 102.6C4.992 105.384 6.768 107.688 10.296 107.688C13.08 107.688 15.096 106.608 16.104 105ZM33.3579 94.2L28.4139 97.8H26.4699V111H22.6299V97.8H17.5419V94.2H33.3579ZM41.6768 94.2L48.4688 111H44.4128L43.0928 107.568H35.8928L34.5488 111H30.7088L37.4288 94.2H41.6768ZM37.3088 103.968H41.7008L39.5168 98.328L37.3088 103.968ZM63.1209 94.2V100.896H65.0169L68.3049 94.2H72.5049L68.3289 102.216L73.1289 111H68.5929L65.0409 104.064H63.1209V111H59.2809V104.064H57.4089L53.8569 111H49.3209L54.0489 102.456L49.8729 94.2H54.2409L57.3849 100.896H59.2809V94.2H63.1209ZM79.332 94.2V105.504L87.06 94.2H91.308V111H87.468V99.432L79.668 111H75.492V94.2H79.332ZM101.009 106.296H99.1367V111H95.2967V94.2H101.009C106.913 94.2 109.001 96.312 109.001 100.104C109.001 104.256 106.265 106.296 101.009 106.296ZM101.681 97.8H99.1367V102.696H101.489C103.913 102.696 105.041 101.88 105.041 100.128C105.041 98.544 104.081 97.8 101.681 97.8ZM120.094 111.288C114.67 111.288 110.854 108.144 110.854 102.576C110.854 97.392 114.598 93.912 120.07 93.912C125.47 93.912 129.286 97.08 129.286 102.624C129.286 107.808 125.542 111.264 120.094 111.288ZM114.934 102.6C114.934 105.384 116.662 107.664 120.094 107.688C123.262 107.688 125.206 105.648 125.206 102.6C125.206 99.816 123.478 97.536 120.046 97.512C116.854 97.536 114.934 99.576 114.934 102.6ZM139.559 111H132.047V94.2H139.631C143.783 94.2 145.607 95.784 145.607 98.496C145.607 100.272 144.935 101.472 143.303 102.24C145.199 102.672 146.111 103.92 146.111 106.104C146.111 109.584 143.567 111 139.559 111ZM135.887 107.4H139.655C141.575 107.4 142.247 106.8 142.247 105.648C142.247 104.592 141.551 103.968 139.655 103.968H135.887V107.4ZM135.887 100.992H139.319C141.023 100.992 141.767 100.32 141.767 99.336C141.767 98.376 141.095 97.8 139.415 97.8H135.887V100.992ZM152.879 104.16V111H149.039V94.2H152.879V100.872H155.087L159.455 94.2H164.015L158.399 102.072L165.143 111H160.295L155.303 104.16H152.879ZM179.873 94.2L174.929 97.8H171.113V100.56H178.193V104.16H171.113V107.4H179.345V111H167.273V94.2H179.873ZM196.418 111H188.906V94.2H196.49C200.642 94.2 202.466 95.784 202.466 98.496C202.466 100.272 201.794 101.472 200.162 102.24C202.058 102.672 202.97 103.92 202.97 106.104C202.97 109.584 200.426 111 196.418 111ZM192.746 107.4H196.514C198.434 107.4 199.106 106.8 199.106 105.648C199.106 104.592 198.41 103.968 196.514 103.968H192.746V107.4ZM192.746 100.992H196.178C197.882 100.992 198.626 100.32 198.626 99.336C198.626 98.376 197.954 97.8 196.274 97.8H192.746V100.992ZM226.245 105V109.272C225.405 110.28 223.245 111.288 220.389 111.288C214.821 111.264 210.933 108.12 210.933 102.576C210.933 97.392 214.773 93.912 220.437 93.912C222.981 93.912 224.853 94.56 226.005 95.232V100.2C224.949 98.808 222.981 97.512 220.437 97.512C217.149 97.512 215.133 99.552 215.133 102.6C215.133 105.384 216.909 107.688 220.437 107.688C223.221 107.688 225.237 106.608 226.245 105ZM236.181 103.56H232.941V107.4H236.109C237.693 107.4 239.061 107.016 239.061 105.36C239.061 103.848 237.861 103.56 236.181 103.56ZM242.181 94.2L237.237 97.8H232.941V99.96H236.205C240.717 99.96 242.997 101.736 242.997 105.336C242.997 109.032 240.045 111 236.061 111H229.101V94.2H242.181ZM258.506 94.2L253.562 97.8H249.746V100.56H256.826V104.16H249.746V107.4H257.978V111H245.906V94.2H258.506ZM267.017 106.296H265.145V111H261.305V94.2H267.017C272.921 94.2 275.009 96.312 275.009 100.104C275.009 104.256 272.273 106.296 267.017 106.296ZM267.689 97.8H265.145V102.696H267.497C269.921 102.696 271.049 101.88 271.049 100.128C271.049 98.544 270.089 97.8 267.689 97.8ZM290.686 94.2L285.742 97.8H281.926V100.56H289.006V104.16H281.926V107.4H290.158V111H278.086V94.2H290.686ZM299.335 113.4C300.871 112.944 301.951 112.08 302.143 111.24H302.095C300.439 111.24 299.935 110.28 299.935 109.104C299.935 107.904 300.439 106.92 302.095 106.92C302.647 106.92 303.055 107.016 303.367 107.184C303.991 107.52 304.591 108.312 304.591 109.872C304.591 113.016 302.095 114.648 300.631 114.936L299.335 113.4ZM299.839 99.96C299.839 98.76 300.343 97.776 301.999 97.776C303.727 97.776 304.231 98.76 304.231 99.96C304.231 101.136 303.727 102.096 301.999 102.096C300.343 102.096 299.839 101.136 299.839 99.96ZM310.331 104.424C310.331 99.024 308.027 95.256 306.827 94.056L308.291 92.856C310.547 94.416 313.955 98.664 313.955 104.424C313.955 110.208 310.571 114.504 308.291 116.04L306.827 114.84C308.027 113.64 310.331 109.848 310.331 104.424Z"
              fill="url(#paint0_linear_1_650)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_650"
                x1="7.90323"
                y1="-53.8"
                x2="65.5373"
                y2="156.792"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
            </defs>
          </Title>
        </Panel>
        <div className={styles.buttons}>
          <Button className={styles.button} onClick={handleNext}>
            Мне нравится
          </Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  );
}

ScreenContent8.preloadImages = [Image1, Image2, Image3];
