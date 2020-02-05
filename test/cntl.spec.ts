import { expect } from 'chai';

import { cntl } from '../src/cntl';

describe('test', () => {
  it('works when you just provide a list of classes', () => {
    const exampleCN = cntl`
      class-1
      class-2
      class-3
      class-4
      class-5
      class-6
    `;
    expect(exampleCN).to.be.equal('class-1 class-2 class-3 class-4 class-5 class-6');
  });

  it('works when you nest cntl', () => {
    const nestedCN = cntl`
      class-3
      class-4
    `;

    const mainCN = cntl`
      class-1
      class-2
      ${nestedCN}
      class-5
      class-6
    `;
    expect(mainCN).to.be.equal('class-1 class-2 class-3 class-4 class-5 class-6');
  });

  it('works when you nest strings and some junk', () => {
    const nestedCN = cntl`
      class-3
      class-4
    `;

    const mainCN = cntl`
      ${undefined}
      class-1
      class-2
      ${nestedCN}
      class-5
      ${true}
      class-6
      ${null}
      ${124}
    `;
    expect(mainCN).to.be.equal('class-1 class-2 class-3 class-4 class-5 class-6');
  });
});
