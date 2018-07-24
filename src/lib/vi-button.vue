<template>
  <button @click="$emit('click')" class="vi-button">
    <slot></slot>
  </button>
</template>

<style lang="stylus">
  @import './main.styl'
  .vi-button
    align-items: center
    border-radius: 2px
    display: inline-flex
    height: 40px
    flex: 0 1 auto
    font-size: 14px
    font-weight: 400
    justify-content: center
    margin: 0
    min-width: 80px
    outline: 0
    text-transform: uppercase
    text-decoration: none
    transition: 0.3s
    vertical-align: middle
    user-select: none
    cursor pointer
    padding 0
    font-family 'Lato', sans-serif
    background $primary
    color white
    border none

    &--active,
    &:hover,
    &:focus
      background lighten($primary, 10%)
</style>
