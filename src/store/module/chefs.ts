import { Chef } from "@/models/Chef";
import { fetchChefs } from "@/services/firebaseSer";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Chefs extends VuexModule {
  public chefs: Chef[] = [];

  @Mutation
  public setChefs(newChefs: Chef[]): void {
    this.chefs = newChefs;
  }

  @Action
  public getChefs(): void {
    fetchChefs().then(snap => {
      const data = snap.docs.map(doc => {
        const chef = { ...doc.data(), id: doc.id };
        return chef;
      }) as Chef[];
      this.context.commit("setChefs", data);
    });
  }
}
