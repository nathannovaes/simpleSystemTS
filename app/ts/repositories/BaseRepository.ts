export abstract class BaseRepository<Model> {
  private _collection: Array<Model> = [];
  
  add(model: Model): void {
    this._collection.push(model)
  }

  getAll(): Array<Model> {
    return [].concat(this._collection);
  }
}