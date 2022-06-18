import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class AppTouchButton extends Vue {
  @Prop(Boolean)
  readonly isActive!: boolean;

  @Prop(Boolean)
  readonly isWaitForElevator!: boolean;
}
