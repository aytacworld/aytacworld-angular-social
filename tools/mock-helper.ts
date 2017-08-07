import { Component, EventEmitter } from '@angular/core';

/**
 * Examples:
 * MockComponent({ selector: 'some-component' });
 * MockComponent({ selector: 'some-component', inputs: ['some-input', 'some-other-input'] });
 *
 * See https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html for a list
 * of supported properties.
 */

export function MockComponent (options: Component): Component {

  const metadata: Component = {
    inputs: options.inputs,
    outputs: options.outputs || [],
    selector: options.selector,
    template: options.template || ''
  };

  class Mock { }

  return Component(metadata)(Mock as any);
}

export function SocialButtonComponent (): Component {
  return MockComponent({ selector: 'aw-social-button', inputs: ['url', 'title', 'front', 'back'] });
}
