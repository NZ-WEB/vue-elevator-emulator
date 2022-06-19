import { Emit } from "vue-property-decorator";
import { IConfig } from "@/types/config.interface";
import { Vue } from "vue-class-component";

export default class QuestionsLayout extends Vue {
  @Emit("setConfig")
  setConfig(): IConfig {
    return {
      elevators: this.elevators,
      floors: this.floors,
      delay: this.delay,
    };
  }

  public floors = 5;
  public elevators = 1;
  public delay = 3;

  public handleSubmit() {
    this.$emit("setConfig", this.setConfig());
  }
}
