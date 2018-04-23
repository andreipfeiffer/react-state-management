import { observable, useStrict } from "mobx";

useStrict(true);

export default class Constants {
  @observable subtitle = ".";
}
