import { model } from './model'
import View from '../mvc/views/View'

export function init() {
  View.render(model.user.name)
}