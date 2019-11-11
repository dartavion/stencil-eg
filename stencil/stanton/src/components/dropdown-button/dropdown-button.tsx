import { Component, h } from '@stencil/core';

@Component({
  tag: 'stanton-dropdown-button',
  styleUrl: './stanton-dropdown-button.scss',
  shadow: true
})
export class DropDownButton {

  render() {
    return (
      <div class="stanton-dropdown-button">
        <button class="stanton-dropdown-button__button-snowman-icon">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="stanton-dropdown-button__actions">
          <slot />
        </div>
      </div>
    );
  }
}