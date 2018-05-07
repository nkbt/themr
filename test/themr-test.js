import test from 'tape';
import {themr} from '../src';

test('themr', t => {
  t.ok(themr instanceof Function, 'should be function');
  t.end();
});
