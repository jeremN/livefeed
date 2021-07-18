export function pxToRem(pxValue: string, ratio = 16): string {
  return `${parseInt(pxValue, 10) / ratio}rem`;
}
