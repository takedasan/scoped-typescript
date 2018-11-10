import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: `
<button :class="template.style['button-color']">こんにちは！こんにちは！</button>
    `,
  })
export default class HelloComponent extends Vue {
    private template = {
        style: require('./HelloComponent.scss'),
    };
}
