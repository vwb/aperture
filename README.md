# [Aperture][heroku]

[heroku]: http://aperture.pw

### Description:

Aperture is a web application inspired by 500px built using Ruby on Rails
and React.js. It features a fully hand rolled user authentication system, photo
uploading via cloudinary, and live tag based search.

### Libraries

Aperture incorporates the following javascript libraries:
* React
* Masonry
* Boron

#### Implementation Details

##### ModalWrapper

To allow the ability to call modals from deeply nested rountes or arbitrary locations implemented a "modal wrapper" that allowed me to simply make a push request from anywhere in the application to cause a modal to appear. 
  > Within the application's container when it receives new props if the state includes "modal: true" then render the children within a "ModalWrapper" class passing along the modal action saved within the state.

  > The modal wrapper then renders the content dynamically specified via the state passed along to by the App component.

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md