import { NgModule } from "@angular/core";
import components from "./components";
import services from "./services";
@NgModule({
  imports: [...services],
  declarations: components,
  exports: [...services, ...components],
})
export class SharedModule {}
