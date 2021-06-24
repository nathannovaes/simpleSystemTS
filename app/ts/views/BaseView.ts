export abstract class BaseView<GenericModel> {
  protected _element : Element;

  constructor(elementName: string) {
    this._element  = document.querySelector(elementName)
  }
}