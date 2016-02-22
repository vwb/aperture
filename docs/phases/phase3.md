# Phase 3: Collections and Tags (2 days)

## Rails
### Models
* Collection
* Tag
* Tagging

### Controllers
* Api::CollectionController (create, destroy, index, show, update)

### Views
* Collection/index.json.jbuilder
* Collection/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* CollectionIndex
  - CollectionIndexItem
* NotebookForm
* SearchIndex

### Stores
* Notebook

### Actions
* ApiActions.receiveAllCollection -> triggered by ApiUtil
* ApiActions.receiveSingleNotebook
* ApiActions.deleteNotebook
* CollectionActions.fetchAllCollection -> triggers ApiUtil
* CollectionActions.fetchSingleCollection
* CollectionActions.createCollection
* CollectionActions.editCollection
* CollectionActions.destroyCollection

### ApiUtil
* ApiUtil.fetchAllCollection
* ApiUtil.fetchSingleCollection
* ApiUtil.createCollection
* ApiUtil.editCollection
* ApiUtil.destroyCollection

## Gems/Libraries
