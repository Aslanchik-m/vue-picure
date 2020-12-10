import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { fetchSignatureDishes } from "@/services/firebaseSer";
import { Dish } from "@/models/Dish";

@Module({ namespaced: true })
export default class Dishes extends VuexModule {
  public dishes: Dish[] = [];

  @Mutation
  public setDishes(newDishes: Dish[]): void {
    this.dishes = newDishes;
  }

  @Action
  public getDishes(): void {
    fetchSignatureDishes().then(snap => {
      const data = snap.docs.map(doc => {
        const dish = { ...doc.data(), id: doc.id };
        return dish;
      }) as Dish[];
      this.context.commit("setDishes", data);
    });
  }
}
