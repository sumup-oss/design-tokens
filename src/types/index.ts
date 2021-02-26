/**
 * Copyright 2020, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type Colors = {
  // Semantic
  primary: string;
  white: string;
  black: string;
  alert: string;
  confirm: string;
  notify: string;
  background: string;
  body: string;
  border: string;
  shadow: string;
  overlay: string;
  /**
   * @deprecated Use `theme.colors.background` instead.
   */
  bodyBg: string;
  /**
   * @deprecated Use `theme.colors.body` instead.
   */
  bodyColor: string;
  /**
   * @deprecated Use `theme.colors.alert` instead.
   */
  danger: string;
  /**
   * @deprecated Use `theme.colors.confirm` instead.
   */
  success: string;
  /**
   * @deprecated Use `theme.colors.notify` instead.
   */
  warning: string;

  // Neutrals
  /**
   * @deprecated
   */
  n100: string;
  /**
   * @deprecated
   */
  n200: string;
  /**
   * @deprecated
   */
  n300: string;
  /**
   * @deprecated
   */
  n500: string;
  /**
   * @deprecated
   */
  n700: string;
  /**
   * @deprecated
   */
  n800: string;
  /**
   * @deprecated
   */
  n900: string;

  // Blues
  /**
   * @deprecated
   */
  b100: string;
  /**
   * @deprecated
   */
  b200: string;
  /**
   * @deprecated
   */
  b300: string;
  /**
   * @deprecated
   */
  b400: string;
  /**
   * @deprecated
   */
  b500: string;
  /**
   * @deprecated
   */
  b700: string;
  /**
   * @deprecated
   */
  b900: string;

  // Greens
  /**
   * @deprecated
   */
  g100: string;
  /**
   * @deprecated
   */
  g200: string;
  /**
   * @deprecated
   */
  g300: string;
  /**
   * @deprecated
   */
  g500: string;
  /**
   * @deprecated Use `theme.colors.confirm` instead.
   */
  g700: string;
  /**
   * @deprecated
   */
  g900: string;

  // Violets
  /**
   * @deprecated
   */
  v100: string;
  /**
   * @deprecated
   */
  v200: string;
  /**
   * @deprecated
   */
  v300: string;
  /**
   * @deprecated
   */
  v500: string;
  /**
   * @deprecated
   */
  v700: string;
  /**
   * @deprecated
   */
  v900: string;

  // Oranges
  /**
   * @deprecated
   */
  o100: string;
  /**
   * @deprecated
   */
  o200: string;
  /**
   * @deprecated
   */
  o300: string;
  /**
   * @deprecated
   */
  o500: string;
  /**
   * @deprecated
   */
  o700: string;
  /**
   * @deprecated
   */
  o900: string;

  // Yellows
  /**
   * @deprecated
   */
  y100: string;
  /**
   * @deprecated
   */
  y200: string;
  /**
   * @deprecated
   */
  y300: string;
  /**
   * @deprecated
   */
  y500: string;
  /**
   * @deprecated
   */
  y700: string;
  /**
   * @deprecated
   */
  y900: string;

  // Reds
  /**
   * @deprecated
   */
  r100: string;
  /**
   * @deprecated
   */
  r200: string;
  /**
   * @deprecated
   */
  r300: string;
  /**
   * @deprecated Use `theme.colors.alert` instead.
   */
  r500: string;
  /**
   * @deprecated
   */
  r700: string;
  /**
   * @deprecated
   */
  r900: string;

  // Primary
  /**
   * @deprecated
   */
  p100: string;
  /**
   * @deprecated
   */
  p200: string;
  /**
   * @deprecated
   */
  p300: string;
  /**
   * @deprecated
   */
  p400: string;
  /**
   * @deprecated
   */
  p500: string;
  /**
   * @deprecated Use `theme.colors.primary` instead.
   */
  p700: string;
  /**
   * @deprecated
   */
  p900: string;
};

export type Spacings = {
  bit: string;
  byte: string;
  kilo: string;
  mega: string;
  giga: string;
  tera: string;
  peta: string;
  exa: string;
  zetta: string;
};

export type IconSizes = {
  kilo: string;
  mega: string;
  giga: string;
};

export type BorderRadius = {
  kilo: string;
  mega: string;
  giga: string;
  tera: string;
  circle: string;
  pill: string;
};

export type BorderWidth = {
  kilo: string;
  mega: string;
};

export type Typography = {
  fontSize: string;
  lineHeight: string;
};

export type FontStack = {
  default: string;
  mono: string;
};

export type FontWeight = {
  regular: string;
  bold: string;
};

export enum Breakpoint {
  untilKilo = 'untilKilo',
  kilo = 'kilo',
  kiloToMega = 'kiloToMega',
  mega = 'mega',
  untilMega = 'untilMega',
  megaToGiga = 'megaToGiga',
  giga = 'giga',
  gigaToTera = 'gigaToTera',
  tera = 'tera',
}

export enum GridBreakpoint {
  default = 'default',
  untilKilo = 'untilKilo',
  kilo = 'kilo',
  mega = 'mega',
  giga = 'giga',
  tera = 'tera',
}

export type Breakpoints = {
  [key in Breakpoint]: string | number;
};

export type MediaQueries = {
  [key in Breakpoint]: string;
};

export type Grid = {
  [key in GridBreakpoint]: {
    priority: number;
    breakpoint: Breakpoint | 'default';
    cols: number;
    maxWidth: string;
    gutter: string;
  };
};

export type Transitions = {
  default: string;
  slow: string;
};

export type ZIndex = {
  default: number;
  absolute: number;
  drawer: number;
  /**
   * @deprecated Use `theme.zIndex.input` instead.
   */
  select: number;
  input: number;
  popover: number;
  tooltip: number;
  header: number;
  backdrop: number;
  sidebar: number;
  modal: number;
};

export interface Theme {
  colors: Colors;
  spacings: Spacings;
  iconSizes: IconSizes;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  typography: {
    headings: {
      kilo: Typography;
      mega: Typography;
      giga: Typography;
      tera: Typography;
      peta: Typography;
      exa: Typography;
      zetta: Typography;
    };
    subHeadings: {
      kilo: Typography;
      mega: Typography;
    };
    text: {
      kilo: Typography;
      mega: Typography;
      giga: Typography;
    };
  };
  fontStack: FontStack;
  fontWeight: FontWeight;
  breakpoints: Breakpoints;
  mq: MediaQueries;
  grid: Grid;
  transitions: Transitions;
  zIndex: ZIndex;
}
