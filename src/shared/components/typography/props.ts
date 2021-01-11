export interface TypographyProps {
  children: string;
  size?: 'medium' | 'large';
  fontColor?:
    | 'magenta'
    | 'darkLow'
    | 'darkMedium'
    | 'darkHigh'
    | 'lightSolid'
    | 'lightHigh';
  weight?: string;
  tag?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2';
}
