<template>
  <div
    class="v3dp__datepicker"
    :style="variables($attrs.style as Record<string, string> | undefined)"
  >
    <div class="v3dp__input_wrapper">
      <input
        type="text"
        ref="inputRef"
        :readonly="!typeable"
        v-model="input"
        v-bind="$attrs"
        :placeholder="placeholder"
        :disabled="disabled"
        :tabindex="disabled ? -1 : 0"
        @keyup="keyUp"
        @keydown="keyDown"
        @blur="blur"
        @focus="focus"
        @click="click"
      />
      <div class="v3dp__clearable" v-show="clearable && modelValue">
        <slot name="clear" :onClear="clearModelValue">
          <i @click="clearModelValue()">x</i>
        </slot>
      </div>
    </div>
    <year-picker
      v-show="viewShown === 'year'"
      :pageDate="pageDate"
      @update:pageDate="(v) => updatePageDate('year', v)"
      :selected="modelValue"
      :lowerLimit="lowerLimit"
      :upperLimit="upperLimit"
      @select="selectYear"
    />
    <month-picker
      v-show="viewShown === 'month'"
      :pageDate="pageDate"
      @update:pageDate="(v) => updatePageDate('month', v)"
      :selected="modelValue"
      @select="selectMonth"
      :lowerLimit="lowerLimit"
      :upperLimit="upperLimit"
      :format="monthListFormat"
      :locale="locale"
      @back="viewShown = 'year'"
    />
    <day-picker
      v-show="viewShown === 'day'"
      :pageDate="pageDate"
      @update:pageDate="(v) => updatePageDate('day', v)"
      :selected="modelValue"
      :weekStartsOn="weekStartsOn"
      :lowerLimit="lowerLimit"
      :upperLimit="upperLimit"
      :headingFormat="dayPickerHeadingFormat"
      :disabledDates="disabledDates"
      :locale="locale"
      :weekdayFormat="weekdayFormat"
      :allow-outside-interval="allowOutsideInterval"
      :format="dayFormat"
      @select="selectDay"
      @back="viewShown = 'month'"
    />
    <time-picker
      v-show="viewShown === 'time'"
      :pageDate="pageDate"
      :visible="viewShown === 'time'"
      :selected="modelValue"
      :disabledTime="disabledTime"
      @select="selectTime"
      @back="goBackFromTimepicker"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect, PropType } from 'vue'
import { parse, isValid, format, max, min } from 'date-fns'
import YearPicker from './YearPicker.vue'
import MonthPicker from './MonthPicker.vue'
import DayPicker from './DayPicker.vue'
import TimePicker from './Timepicker.vue'

const TIME_RESOLUTIONS = ['time', 'day', 'month', 'year']

const boundedDate = (
  lower: Date | undefined,
  upper: Date | undefined,
  target: Date | undefined = undefined
) => {
  let date = target || new Date()

  if (lower) date = max([lower, date])
  if (upper) date = min([upper, date])

  return date
}

export default defineComponent({
  components: {
    YearPicker,
    MonthPicker,
    DayPicker,
    TimePicker,
  },
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * `v-model` for selected date
     */
    modelValue: {
      type: Date as PropType<Date>,
      required: false,
    },
    /**
     * Dates not available for picking
     */
    disabledDates: {
      type: Object as PropType<{
        dates?: Date[]
        predicate?: (currentDate: Date) => boolean
      }>,
      required: false,
    },
    allowOutsideInterval: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Time not available for picking
     */
    disabledTime: {
      type: Object as PropType<{
        dates?: Date[]
        predicate?: (currentDate: Date) => boolean
      }>,
      required: false,
    },
    /**
     * Upper limit for available dates for picking
     */
    upperLimit: {
      type: Date as PropType<Date>,
      required: false,
    },
    /**
     * Lower limit for available dates for picking
     */
    lowerLimit: {
      type: Date as PropType<Date>,
      required: false,
    },
    /**
     * View on which the date picker should open. Can be either `year`, `month`, `day` or `time`
     */
    startingView: {
      type: String as PropType<'year' | 'month' | 'day' | 'time'>,
      required: false,
      default: 'day',
      validate: (v: unknown) =>
        typeof v === 'string' && TIME_RESOLUTIONS.includes(v),
    },
    /**
     * Date which should be the "center" of the initial view.
     * When an empty datepicker opens, it focuses on the month/year
     * that contains this date
     */
    startingViewDate: {
      type: Date as PropType<Date>,
      required: false,
      default: () => new Date(),
    },
    /**
     * `date-fns`-type formatting for a month view heading
     */
    dayPickerHeadingFormat: {
      type: String,
      required: false,
      default: 'LLLL yyyy',
    },
    /**
     * `date-fns`-type formatting for the month picker view
     */
    monthListFormat: {
      type: String,
      required: false,
      default: 'LLL',
    },
    /**
     * `date-fns`-type formatting for a line of weekdays on day view
     */
    weekdayFormat: {
      type: String,
      required: false,
      default: 'EE',
    },
    /**
     * `date-fns`-type formatting for the day picker view
     */
    dayFormat: {
      type: String,
      required: false,
      default: 'dd',
    },
    /**
     * `date-fns`-type format in which the string in the input should be both
     * parsed and displayed
     */
    inputFormat: {
      type: String,
      required: false,
      default: 'yyyy-MM-dd',
    },
    /**
     * [`date-fns` locale object](https://date-fns.org/v2.16.1/docs/I18n#usage).
     * Used in string formatting (see default `dayPickerHeadingFormat`)
     */
    locale: {
      type: Object as PropType<Locale>,
      required: false,
    },
    /**
     * Day on which the week should start.
     *
     * Number from 0 to 6, where 0 is Sunday and 6 is Saturday.
     * Week starts with a Monday (1) by default
     */
    weekStartsOn: {
      type: Number as PropType<0 | 1 | 2 | 3 | 4 | 5 | 6>,
      required: false,
      default: 1,
      validator: (value: any) => [0, 1, 2, 3, 4, 5, 6].includes(value),
    },
    /**
     * Disables datepicker and prevents it's opening
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Clears selected date
     */
    clearable: {
      type: Boolean,
      required: false,
      default: false,
    },
    /*
     * Allows user to input date manually
     */
    typeable: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * If set, lower-level views won't show
     */
    minimumView: {
      type: String as PropType<'year' | 'month' | 'day' | 'time'>,
      required: false,
      default: 'day',
      validate: (v: unknown) =>
        typeof v === 'string' && TIME_RESOLUTIONS.includes(v),
    },
    /*
     * If typeable is true,  enables automatic date formatting (masking) as the user types
     */
    mask: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    'update:modelValue': (value: Date | null | undefined) =>
      value === null || value === undefined || isValid(value),
    decadePageChanged: (pageDate: Date) => true,
    yearPageChanged: (pageDate: Date) => true,
    monthPageChanged: (pageDate: Date) => true,
    opened: () => true,
    closed: () => true,
  },
  setup(props, { emit }) {
    const viewShown = ref('none' as 'year' | 'month' | 'day' | 'time' | 'none')
    const pageDate = ref<Date>(props.startingViewDate)
    const inputRef = ref(null as HTMLInputElement | null)
    const isFocused = ref(false);
    const isOpen = ref(false);

    const input = ref('')
    watchEffect(() => {
      const parsed = parse(input.value, props.inputFormat, new Date(), { locale: props.locale })
      if (isValid(parsed)) {
        pageDate.value = parsed
      }
    })

    watchEffect(() =>
        (input.value =
          props.modelValue && isValid(props.modelValue)
            ? format(props.modelValue, props.inputFormat, {
                locale: props.locale,
              })
            : '')
    )

    const emitOpened = () => {
        if(!isOpen.value){
            emit('opened');
            isOpen.value = true;
        }
    };

    const emitClosed = () => {
        if(isOpen.value){
            emit('closed');
            isOpen.value = false;
        }
    };


    const renderView = (view: typeof viewShown.value = 'none') => {
      if (!props.disabled) {
        if (view !== 'none' && viewShown.value === 'none'){
          pageDate.value = props.modelValue ? props.modelValue : props.startingViewDate;
          //Replaced the use of boundedDate with props.startingViewDate
          // This was done to simplify the value assignment logic,
            // avoiding the bounded date calculation and instead using a predefined value.
          //  props.modelValue || boundedDate(props.lowerLimit, props.upperLimit, pageDate.value)
        }
        viewShown.value = view

        if (view !== 'none') {
            emitOpened();
        } else {
            emitClosed();
        }
      }
    }

    watchEffect(() => {
      if (props.disabled){
        viewShown.value = 'none';
        isOpen.value = false;
      }
    })

    const updatePageDate = (
      view: 'year' | 'month' | 'day',
      newPageDate: Date
    ) => {
      // We need to emit "page changed" event and set the page date
      pageDate.value = newPageDate

      if (view === 'year') emit('decadePageChanged', newPageDate)
      else if (view === 'month') emit('yearPageChanged', newPageDate)
      else if (view === 'day') emit('monthPageChanged', newPageDate)
    }

    const selectYear = (date: Date) => {
      pageDate.value = date

      if (props.minimumView === 'year') {
        renderView('none')
        emit('update:modelValue', date)
      } else {
        viewShown.value = 'month';
      }
    }
    const selectMonth = (date: Date) => {
      pageDate.value = date

      if (props.minimumView === 'month') {
        renderView('none')
        emit('update:modelValue', date)
      } else {
        viewShown.value = 'day';
      }
    }
    const selectDay = (date: Date) => {
      pageDate.value = date

      if (props.minimumView === 'day') {
        renderView('none')
        emit('update:modelValue', date)
      } else {
        viewShown.value = 'time';
      }
    }

    const selectTime = (date: Date) => {
      renderView('none')
      emit('update:modelValue', date)
    }

    const clearModelValue = () => {
      if (props.clearable) {
        renderView('none')
        emit('update:modelValue', null)
        pageDate.value = props.startingViewDate
      }
    }

    const click = () => (isFocused.value = true)

    const focus = () => {
        renderView(initialView.value);
        emitOpened();
    } 

    const blur = () => {
      isFocused.value = false;

       const parsedDate = dateParser(inputRef.value!.value);

        if (!isValidDate(parsedDate)) {
            emit('update:modelValue', null)
        }

        renderView();
        emitClosed();
    }

    const keyDown = (event: KeyboardEvent) => {

        if (props.typeable && props.mask){

            if(!([event.key, event.code].includes("Backspace"))){

                let value = inputRef.value!.value;
                const key = event.key;

                if ("0123456789".includes(key)) { // If the key is a number
            
                    // Check if a separator should be added at the current position
                    const separator = separators.find(item => value.length === item.idx);
                    if(separator) {
                        value += separator.char; // Aggiunge il separatore
                    }
            
                    value += key; // Add the key pressed to the value
   
                } else {

                    // If the key is not a number, check if it's being inserted at a separator position
                    const separator = separators.find(item => value.length === item.idx);
                    if(separator) {
                        // If a separator should be at this position, replace the character with the correct separator
                        value += separator.char; // Add the key pressed to the value
                    }
     
                }

                inputRef.value!.value = value;

                event.preventDefault();
                return false;
            }
        
        }
    }

    const keyUp = (event: KeyboardEvent) => {
      const code = event.keyCode ? event.keyCode : event.which
      // close calendar if escape or enter are pressed
      const closeButton = [
        27, // escape
        13, // enter
      ].includes(code)

      if (closeButton) {
        inputRef.value!.blur()
      }

      if (props.typeable) {

        const parsedDate = dateParser(inputRef.value!.value);

        // If the date is formatted back same way as it was inputted, then we're not disturbing user input
        if (isValidDate(parsedDate)) {
          input.value = inputRef.value!.value
          emit('update:modelValue', parsedDate)
        }
      }

    }

    const isValidDate = (date: Date) => {
        let value = inputRef.value!.value;
        return isValid(date) && value === format(date, props.inputFormat, { locale: props.locale });
    };
    
    const dateParser = (_text: string) => {
        return parse(
          _text,
          props.inputFormat,
          new Date(),
          { locale: props.locale }
        )
    };

    const initialView = computed(() => {
      const startingViewOrder = TIME_RESOLUTIONS.indexOf(props.startingView)
      const minimumViewOrder = TIME_RESOLUTIONS.indexOf(props.minimumView)

      return startingViewOrder < minimumViewOrder
        ? props.minimumView
        : props.startingView
    })

    const variables = (object: Record<string, string> | undefined) =>
      Object.fromEntries(
        Object.entries(object ?? {}).filter(([key, _]) => key.startsWith('--'))
      )

    const goBackFromTimepicker = () =>
      props.startingView === 'time' && props.minimumView === 'time'
        ? null
        : (viewShown.value = 'day')

    const getSeparatorIndices = (_format: string) => {
        const separatorItems = [];

        for (let i = 0; i < _format.length; i++) {

            if(!(/^[0-9a-zA-Z]+$/.test(_format[i]))) {
                separatorItems.push({ idx: i, char:  _format[i]});
            }
        }

        return separatorItems;
    }

    const separators = getSeparatorIndices(props.inputFormat);


    return {
      blur,
      focus,
      click,
      input,
      inputRef,
      pageDate,
      renderView,
      updatePageDate,
      selectYear,
      selectMonth,
      selectDay,
      selectTime,
      keyUp,
      keyDown,
      viewShown,
      goBackFromTimepicker,
      clearModelValue,
      initialView,
      log: (e: any) => console.log(e),
      variables,
    }
  },
})
</script>

<style>
.v3dp__datepicker {
  --popout-bg-color: var(--vdp-bg-color, #fff);
  --box-shadow: var(
    --vdp-box-shadow,
    0 4px 10px 0 rgba(128, 144, 160, 0.1),
    0 0 1px 0 rgba(128, 144, 160, 0.81)
  );
  --text-color: var(--vdp-text-color, #000000);
  --border-radius: var(--vdp-border-radius, 3px);
  --heading-size: var(--vdp-heading-size, 2.5em); /* 40px for 16px font */
  --heading-weight: var(--vdp-heading-weight, bold);
  --heading-hover-color: var(--vdp-heading-hover-color, #eeeeee);
  --arrow-color: var(--vdp-arrow-color, currentColor);

  --elem-color: var(--vdp-elem-color, currentColor);
  --elem-disabled-color: var(--vdp-disabled-color, #d5d9e0);
  --elem-hover-color: var(--vdp-hover-color, #fff);
  --elem-hover-bg-color: var(--vdp-hover-bg-color, #0baf74);
  --elem-selected-color: var(--vdp-selected-color, #fff);
  --elem-selected-bg-color: var(--vdp-selected-bg-color, #0baf74);

  --elem-current-outline-color: var(--vdp-current-date-outline-color, #888);
  --elem-current-font-weight: var(--vdp-current-date-font-weight, bold);

  --elem-font-size: var(--vdp-elem-font-size, 0.8em);
  --elem-border-radius: var(--vdp-elem-border-radius, 3px);

  --divider-color: var(--vdp-divider-color, var(--elem-disabled-color));

  position: relative;
}

.v3dp__clearable {
  display: inline;
  position: relative;
  left: -15px;
  cursor: pointer;
}
</style>
