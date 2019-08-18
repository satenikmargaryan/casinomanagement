import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | games', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /games', async function(assert) {
    await visit('/games');

    assert.equal(currentURL(), '/games');
  });
});
