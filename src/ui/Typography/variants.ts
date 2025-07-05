const TEXT_STYLE_VARIANTS = {
  H1_B: 'h1-b',
  H1: 'h1',
  H2_B: 'h2-b',
  H2: 'h2',
  H3_B: 'h3-b',
  H3: 'h3',
  H4_B: 'h4-b',
  H4: 'h4',
  H5_B: 'h5-b',
  H5: 'h5',
  H6_B: 'h6-b',
  P1_B: 'p1-b',
  P1_SB: 'p1-sb',
  P1: 'p1',
  P2_B: 'p2-b',
  P2_SB: 'p2-sb',
  P2: 'p2',
  P3_B: 'p3-b',
  P3_SB: 'p3-sb',
  P3: 'p3',
  CAPTION_B: 'caption-b',
  CAPTION_SB: 'caption-sb',
  CAPTION: 'caption',
} as const;

const TEXT_ALIGN_VARIANTS = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
  JUSTIFY: 'justify',
  JUSTIFY_ALL: 'justify-all',
  START: 'start',
  END: 'end',
  MATCH_PARENT: 'match-parent',
  INHERIT: 'inherit',
  INITIAL: 'initial',
  UNSET: 'unset',
} as const;

const VERTICAL_ALIGN_VARIANTS = {
  BASELINE: 'baseline',
  SUB: 'sub',
  SUPER: 'super',
  TEXT_TOP: 'text-top',
  TEXT_BOTTOM: 'text-bottom',
  MIDDLE: 'middle',
  TOP: 'top',
  BOTTOM: 'bottom',
  INHERIT: 'inherit',
  INITIAL: 'initial',
  UNSET: 'unset',
} as const;

const WHITE_SPACE_VARIANTS = {
  NORMAL: 'normal',
  NOWRAP: 'nowrap',
  PRE: 'pre',
  PRE_WRAP: 'pre-wrap',
  PRE_LINE: 'pre-line',
  BREAK_SPACE: 'break-spaces',
  INHERIT: 'inherit',
  INITIAL: 'initial',
  UNSET: 'unset',
} as const;

const WORD_BREAK_VARIANTS = {
  NORMAL: 'normal',
  BREAK_ALL: 'break-all',
  KEEP_ALL: 'keep-all',
  INHERIT: 'inherit',
  INITIAL: 'initial',
  UNSET: 'unset',
} as const;

export { TEXT_STYLE_VARIANTS, TEXT_ALIGN_VARIANTS, VERTICAL_ALIGN_VARIANTS, WHITE_SPACE_VARIANTS, WORD_BREAK_VARIANTS };
