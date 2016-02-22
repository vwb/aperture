# Flux Stores

### PhotoStore

Holds all persisted Photo data.

##### Actions:
- `receiveAllPhotos`
- `receiveSinglePhoto`
- `removePhoto`

##### Listeners:
- `PhotosIndex` (passes to `PhotoIndexItem` via props)
- `PhotoDetail`

### PhotoFormStore

Holds un-persisted Photo data to send to the API.

##### Actions:
- `receivePhotoFormParams`

##### Listeners:
- `PhotoForm`

### CollectionStore

Holds all persisted Collection data.

##### Actions:
- `receiveAllCollections`
- `receiveSingleCollection`
- `removeCollection`

##### Listeners:
- `CollectionIndex`

### CollectionFormStore

Holds un-persisted Collection data to send to the API.

##### Actions:
- `receiveCollectionFormParams`

##### Listeners:
- `CollectionForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
