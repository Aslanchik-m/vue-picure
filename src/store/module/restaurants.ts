import { Restaurant } from "@/models/Restaurant";
import { fetchRestaurants } from "@/services/firebaseSer";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Restaurants extends VuexModule {
  public restaurants: Restaurant[] = [];

  @Mutation
  public setRestaurants(newRestaurants: Restaurant[]): void {
    this.restaurants = newRestaurants;
  }

  @Action
  public fetchAllRestaurants(): void {
    fetchRestaurants().then(snap => {
      const data = snap.docs.map(doc => {
        const restaurant = { ...doc.data(), id: doc.id };
        return restaurant;
      }) as Restaurant[];
      this.context.commit("setRestaurants", data);
    });
  }
}
