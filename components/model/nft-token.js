import Model from "~/components/model/model"
import app from "~/plugins/app"
import Web3 from "web3"

export default class NFTToken extends Model {

  get name() {
    return `Token ${Web3.utils.hexToNumberString(this.token_id)}`
  }

  get img_url() {
    return "/_nuxt/static/img/dummy-kitty.png";
  }

  get category() {
    const category = app.vuexStore.getters['category/categories'].find(
      c => c.address.toLowerCase() == this.contract.toLowerCase()
    )

    return category
  }

  get categories_id() {
    return this.category.id
  }

  get token() {
    return {
      contract: this.contract,
      token_id: this.token_id,
      name: this.name,
      owner: this.owner,
      img_url: this.img_url
    }
  }

}
