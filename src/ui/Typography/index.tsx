import { ComponentProps, ElementType, memo, ReactElement, ReactNode } from 'react';

import Style from './style.module.scss';
import { TEXT_ALIGN_VARIANTS, TEXT_STYLE_VARIANTS, VERTICAL_ALIGN_VARIANTS, WHITE_SPACE_VARIANTS, WORD_BREAK_VARIANTS } from './variants';

import { mergeClassNames } from '@/util/string-helper';
import { checkTruthy } from '@/util/type-guard';

type TextStyleType = (typeof TEXT_STYLE_VARIANTS)[keyof typeof TEXT_STYLE_VARIANTS];
type TextAlignType = (typeof TEXT_ALIGN_VARIANTS)[keyof typeof TEXT_ALIGN_VARIANTS];
type VerticalAlignType = (typeof VERTICAL_ALIGN_VARIANTS)[keyof typeof VERTICAL_ALIGN_VARIANTS];
type WhiteSpaceType = (typeof WHITE_SPACE_VARIANTS)[keyof typeof WHITE_SPACE_VARIANTS];
type WordBreakType = (typeof WORD_BREAK_VARIANTS)[keyof typeof WORD_BREAK_VARIANTS];

interface IResponsiveTextStyle {
  base: TextStyleType;
  mobile?: TextStyleType;
  tablet?: TextStyleType;
  laptop?: TextStyleType;
  desktop?: TextStyleType;
}

const TEXT_STYLE_CLASS_MAP: Record<TextStyleType, string> = {
  [TEXT_STYLE_VARIANTS.H1_B]: '--typography-h1-b',
  [TEXT_STYLE_VARIANTS.H1]: '--typography-h1',
  [TEXT_STYLE_VARIANTS.H2_B]: '--typography-h2-b',
  [TEXT_STYLE_VARIANTS.H2]: '--typography-h2',
  [TEXT_STYLE_VARIANTS.H3_B]: '--typography-h3-b',
  [TEXT_STYLE_VARIANTS.H3]: '--typography-h3',
  [TEXT_STYLE_VARIANTS.H4_B]: '--typography-h4-b',
  [TEXT_STYLE_VARIANTS.H4]: '--typography-h4',
  [TEXT_STYLE_VARIANTS.H5_B]: '--typography-h5-b',
  [TEXT_STYLE_VARIANTS.H5]: '--typography-h5',
  [TEXT_STYLE_VARIANTS.H6_B]: '--typography-h6-b',
  [TEXT_STYLE_VARIANTS.P1_B]: '--typography-p1-b',
  [TEXT_STYLE_VARIANTS.P1_SB]: '--typography-p1-sb',
  [TEXT_STYLE_VARIANTS.P1]: '--typography-p1',
  [TEXT_STYLE_VARIANTS.P2_B]: '--typography-p2-b',
  [TEXT_STYLE_VARIANTS.P2_SB]: '--typography-p2-sb',
  [TEXT_STYLE_VARIANTS.P2]: '--typography-p2',
  [TEXT_STYLE_VARIANTS.P3_B]: '--typography-p3-b',
  [TEXT_STYLE_VARIANTS.P3_SB]: '--typography-p3-sb',
  [TEXT_STYLE_VARIANTS.P3]: '--typography-p3',
  [TEXT_STYLE_VARIANTS.CAPTION_B]: '--typography-caption-b',
  [TEXT_STYLE_VARIANTS.CAPTION_SB]: '--typography-caption-sb',
  [TEXT_STYLE_VARIANTS.CAPTION]: '--typography-caption',
} as const;

const TEXT_ALIGN_CLASS_MAP: Record<TextAlignType, string> = {
  [TEXT_ALIGN_VARIANTS.LEFT]: Style['TextAlign--left'] ?? '',
  [TEXT_ALIGN_VARIANTS.RIGHT]: Style['TextAlign--right'] ?? '',
  [TEXT_ALIGN_VARIANTS.CENTER]: Style['TextAlign--center'] ?? '',
  [TEXT_ALIGN_VARIANTS.JUSTIFY]: Style['TextAlign--justify'] ?? '',
  [TEXT_ALIGN_VARIANTS.JUSTIFY_ALL]: Style['TextAlign--justify-all'] ?? '',
  [TEXT_ALIGN_VARIANTS.START]: Style['TextAlign--start'] ?? '',
  [TEXT_ALIGN_VARIANTS.END]: Style['TextAlign--end'] ?? '',
  [TEXT_ALIGN_VARIANTS.MATCH_PARENT]: Style['TextAlign--match-parent'] ?? '',
  [TEXT_ALIGN_VARIANTS.INHERIT]: Style['TextAlign--inherit'] ?? '',
  [TEXT_ALIGN_VARIANTS.INITIAL]: Style['TextAlign--initial'] ?? '',
  [TEXT_ALIGN_VARIANTS.UNSET]: Style['TextAlign--unset'] ?? '',
} as const;

const VERTICAL_ALIGN_CLASS_MAP: Record<VerticalAlignType, string> = {
  [VERTICAL_ALIGN_VARIANTS.BASELINE]: Style['VerticalAlign--baseline'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.SUB]: Style['VerticalAlign--sub'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.SUPER]: Style['VerticalAlign--super'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.TEXT_TOP]: Style['VerticalAlign--text-top'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.TEXT_BOTTOM]: Style['VerticalAlign--text-bottom'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.MIDDLE]: Style['VerticalAlign--middle'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.TOP]: Style['VerticalAlign--top'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.BOTTOM]: Style['VerticalAlign--bottom'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.INHERIT]: Style['VerticalAlign--inherit'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.INITIAL]: Style['VerticalAlign--initial'] ?? '',
  [VERTICAL_ALIGN_VARIANTS.UNSET]: Style['VerticalAlign--unset'] ?? '',
} as const;

const WHITE_SPACE_CLASS_MAP: Record<WhiteSpaceType, string> = {
  [WHITE_SPACE_VARIANTS.NORMAL]: Style['WhiteSpace--normal'] ?? '',
  [WHITE_SPACE_VARIANTS.NOWRAP]: Style['WhiteSpace--nowrap'] ?? '',
  [WHITE_SPACE_VARIANTS.PRE]: Style['WhiteSpace--pre'] ?? '',
  [WHITE_SPACE_VARIANTS.PRE_WRAP]: Style['WhiteSpace--pre-wrap'] ?? '',
  [WHITE_SPACE_VARIANTS.PRE_LINE]: Style['WhiteSpace--pre-line'] ?? '',
  [WHITE_SPACE_VARIANTS.BREAK_SPACE]: Style['WhiteSpace--break-spaces'] ?? '',
  [WHITE_SPACE_VARIANTS.INHERIT]: Style['WhiteSpace--inherit'] ?? '',
  [WHITE_SPACE_VARIANTS.INITIAL]: Style['WhiteSpace--initial'] ?? '',
  [WHITE_SPACE_VARIANTS.UNSET]: Style['WhiteSpace--unset'] ?? '',
} as const;

const WORD_BREAK_CLASS_MAP: Record<WordBreakType, string> = {
  [WORD_BREAK_VARIANTS.NORMAL]: Style['WordBreak--normal'] ?? '',
  [WORD_BREAK_VARIANTS.BREAK_ALL]: Style['WordBreak--break-all'] ?? '',
  [WORD_BREAK_VARIANTS.KEEP_ALL]: Style['WordBreak--keep-all'] ?? '',
  [WORD_BREAK_VARIANTS.INHERIT]: Style['WordBreak--inherit'] ?? '',
  [WORD_BREAK_VARIANTS.INITIAL]: Style['WordBreak--initial'] ?? '',
  [WORD_BREAK_VARIANTS.UNSET]: Style['WordBreak--unset'] ?? '',
} as const;

const getTextStyleClass = (textStyle: TextStyleType | IResponsiveTextStyle) => {
  if (typeof textStyle === 'string') {
    return Style['Base' + TEXT_STYLE_CLASS_MAP[textStyle]] ?? '';
  }

  let textStyleClass = '';
  if ('base' in textStyle && checkTruthy(textStyle.base)) {
    textStyleClass = mergeClassNames(textStyleClass, Style['Base' + TEXT_STYLE_CLASS_MAP[textStyle.base]] ?? '');
  }
  if ('mobile' in textStyle && checkTruthy(textStyle.mobile)) {
    textStyleClass = mergeClassNames(textStyleClass, Style['Mobile' + TEXT_STYLE_CLASS_MAP[textStyle.mobile]] ?? '');
  }
  if ('tablet' in textStyle && checkTruthy(textStyle.tablet)) {
    textStyleClass = mergeClassNames(textStyleClass, Style['Tablet' + TEXT_STYLE_CLASS_MAP[textStyle.tablet]] ?? '');
  }
  if ('laptop' in textStyle && checkTruthy(textStyle.laptop)) {
    textStyleClass = mergeClassNames(textStyleClass, Style['Laptop' + TEXT_STYLE_CLASS_MAP[textStyle.laptop]] ?? '');
  }
  if ('desktop' in textStyle && checkTruthy(textStyle.desktop)) {
    textStyleClass = mergeClassNames(textStyleClass, Style['Desktop' + TEXT_STYLE_CLASS_MAP[textStyle.desktop]] ?? '');
  }

  return textStyleClass;
};

interface Props extends ComponentProps<'p'> {
  textStyle: TextStyleType | IResponsiveTextStyle;

  children?: ReactNode;
  className?: string;
  as?: ElementType;
  textAlign?: TextAlignType;
  verticalAlign?: VerticalAlignType;
  wordBreak?: WordBreakType;
  whiteSpace?: WhiteSpaceType;
}

/**
 * @author
 * - Jeff
 *
 * @description
 * - 텍스트를 지정된 스타일과 태그로 렌더링합니다.
 * - 반응형 스타일, 줄바꿈 처리, 공백 처리 등을 지원하며 일관된 타이포그래피를 제공합니다.
 */
const Typography = memo((props: Props): ReactElement => {
  const {
    textStyle,
    children,
    className,
    as = 'p',
    textAlign = TEXT_ALIGN_VARIANTS.START,
    verticalAlign = VERTICAL_ALIGN_VARIANTS.BASELINE,
    wordBreak = WORD_BREAK_VARIANTS.NORMAL,
    whiteSpace = WHITE_SPACE_VARIANTS.NORMAL,
  } = props;

  const Component = as;
  return (
    <Component
      className={mergeClassNames(
        getTextStyleClass(textStyle),
        TEXT_ALIGN_CLASS_MAP[textAlign],
        VERTICAL_ALIGN_CLASS_MAP[verticalAlign],
        WHITE_SPACE_CLASS_MAP[whiteSpace],
        WORD_BREAK_CLASS_MAP[wordBreak],
        className,
      )}
    >
      {children}
    </Component>
  );
});
Typography.displayName = 'Typography';

export default Typography;
