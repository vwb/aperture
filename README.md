# [Aperture][heroku]

[heroku]: http://aperture.pw

![Aperture HomePage](http://res.cloudinary.com/dpxg23zze/image/upload/v1457674960/Screen_Shot_2016-03-10_at_9.41.17_PM_kf7qlf.png)

### Description:

Aperture is a web application inspired by 500px built using Ruby on Rails
and React.js. It features a fully hand rolled user authentication system, photo
uploading via cloudinary, and live tag based search.

### Libraries

Aperture incorporates the following javascript libraries:
* React
* Masonry
* Boron
* Cloudinary
* Flux
* BCrypt
* Material Design Elements

### Implementation Details

##### ModalWrapper

To allow the ability to call modals from deeply nested rountes or arbitrary locations implemented a "modal wrapper" that allowed me to simply make a push request from anywhere in the application to cause a modal to appear. 
  * Within the application's container when it receives new props if the state includes "modal: true" then render the children within a "ModalWrapper" class passing along the modal action saved within the state.
  * The modal wrapper then renders the content dynamically specified via the state passed along to by the App component.

##### Live Search

Photos are automatically searched by tag as user enters input.
* Utilizes componentDidUpdate to receive the updated state of the search bar with each input. If only one possible tag remains, it then automatically performs a request for images containing that tag.
