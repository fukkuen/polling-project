<template>
  <div class="vi-checkbox" @click="toggle">
    <vi-icon :name="isChecked ? 'checkbox-checked' : 'checkbox-empty'"/>
    <div v-if="label" class="vi-checkbox__label">{{label}}</div>
  </div>
</template>

<script>
  export default {
    name: 'vi-checkbox',
    model: {
      event: 'input',
      prop: 'inputValue'
    },
    props: {
      label: {
        type: String,
        required: false
      },
      inputValue: {
        type: Boolean | String | Number,
        required: true
      },
      value: {
        type: String | Number,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      isMultiple () {
        return this.multiple || Array.isArray(this.inputValue)
      },
      isBoolean () {
        return typeof this.inputValue === 'boolean'
      },
      isChecked () {
        if (this.isBoolean) {
          return this.inputValue === true
        } else if (this.isMultiple) {
          return this.inputValue.includes(this.value)
        } else {
          return this.inputValue === this.value
        }
      }
    },
    methods: {
      toggle () {
        let newValue
        if (this.isBoolean) {
          newValue = !this.inputValue
        } else if (this.isMultiple) {
          newValue = [...this.inputValue]
          if (this.isChecked) newValue.splice(newValue.indexOf(this.value), 1)
          else newValue.push(this.value)
        } else {
          if (this.isChecked) newValue = ''
          else newValue = this.value
        }
        this.$emit('input', newValue)
      }
    }
  }
</script>


<style lang="stylus">
  @import './main.styl'
  .vi-checkbox
    display inline-flex
    align-items center
    cursor pointer
    font-size 18px
    user-select none

    &__label
      margin-left 8px
</style>
