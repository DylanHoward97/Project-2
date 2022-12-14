import { Tasks } from './tasks';

describe('Tasks', () => {
  it('should create an instance', () => {
    expect(new Tasks('', '', '', '', 0)).toBeTruthy();
  });
});
