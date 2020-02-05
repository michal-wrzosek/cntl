export function cntl(template: TemplateStringsArray, ...templateElements: any[]) {
  return template
    .reduce((sum, n, index) => {
      const templateElement = templateElements[index];
      if (typeof templateElement === 'string') {
        return `${sum}${n}${templateElement}`;
      }
      return `${sum}${n}`;
    }, '')
    .trim()
    .replace(/\s{2,}/g, ' ');
}
