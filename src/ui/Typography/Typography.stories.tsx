import type { Meta, StoryObj } from '@storybook/react';

import { TEXT_ALIGN_VARIANTS, TEXT_STYLE_VARIANTS, VERTICAL_ALIGN_VARIANTS, WHITE_SPACE_VARIANTS, WORD_BREAK_VARIANTS } from './variants';

import Typography from '.';

const meta: Meta<typeof Typography> = {
  title: 'ui/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    textStyle: {
      control: 'select',
      description: '미리 약속된 스타일 중 하나를 지정합니다.',
      options: Object.values(TEXT_STYLE_VARIANTS),
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'Typography 를 통해 노출될 텍스트를 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: false,
      description: '추가적인 css 속성을 부여합니다.',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'caption', 'p', 'span', 'strong', 'b', 'em', 'sub', 'span'],
      description: 'HTML 태그를 지정합니다. (스타일이 변경되지 않습니다.)',
      table: {
        defaultValue: { summary: 'p' },
        type: { summary: 'string' },
      },
    },
    textAlign: {
      control: 'select',
      options: Object.values(TEXT_ALIGN_VARIANTS),
      description: '횡 축 상의 텍스트 정렬상태를 지정합니다.',
      table: {
        defaultValue: { summary: TEXT_ALIGN_VARIANTS.START },
        type: { summary: 'string' },
      },
    },
    verticalAlign: {
      control: 'select',
      options: Object.values(VERTICAL_ALIGN_VARIANTS),
      description: '종 축 상의 텍스트 정렬상태를 지정합니다.',
      table: {
        defaultValue: { summary: VERTICAL_ALIGN_VARIANTS.BASELINE },
        type: { summary: 'string' },
      },
    },
    wordBreak: {
      control: 'select',
      options: Object.values(WORD_BREAK_VARIANTS),
      description: '줄바꿈 처리 방법을 지정합니다.',
      table: {
        defaultValue: { summary: WORD_BREAK_VARIANTS.NORMAL },
        type: { summary: 'string' },
      },
    },
    whiteSpace: {
      control: 'select',
      options: Object.values(WHITE_SPACE_VARIANTS),
      description: '공백 처리 방법을 지정합니다.',
      table: {
        defaultValue: { summary: WHITE_SPACE_VARIANTS.NORMAL },
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Preview: Story = {
  args: {
    textStyle: TEXT_STYLE_VARIANTS.H1_B,
    children: 'Carmore Design System',
    as: 'p',
    textAlign: TEXT_ALIGN_VARIANTS.START,
    verticalAlign: VERTICAL_ALIGN_VARIANTS.BASELINE,
    wordBreak: WORD_BREAK_VARIANTS.NORMAL,
    whiteSpace: WHITE_SPACE_VARIANTS.NORMAL,
  },
};
