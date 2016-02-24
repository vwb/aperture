# Aperture

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Aperture is a web application inspired by 500px built using Ruby on Rails
and React.js. Aperture allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Upload images
- [ ] Images belong to a certain primary category
- [ ] Users can organize images into collections
- [ ] Tag images and collections with multiple tags
- [ ] Ability to purchase/download full quality images


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

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Photos Model, API, and basic APIUtil (1.5 day)

**Objective:** Images can be uploaded, destroyed, and details edited through
the API.

- [X] create `Photo` model
- [X] seed the database with a small amount of test data
- [X] CRUD API for photos (`PhotosController`)
- [X] jBuilder views for photos
- [X] setup Webpack & Flux scaffold
- [X] setup `APIUtil` to interact with the API
- [X] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1 day)

**Objective:** Images can be created, viewed, edited and destroyed with the
user interface.

- [X] setup the flux loop with skeleton files
- [X] setup React Router
- implement each note component, building out the flux loop as needed.
  - [X] `PhotosIndex` (primary landing page)
  - [X] `PhotoItem`
  - [X] `PhotoUploadform`

### Phase 4: Start Styling (1 day)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles
- [ ] implement material design lite

### Phase 5: Collections (1 day)

**Objective:** Users can curate photos to belong to Collections.

- [ ] create `Collection` model
- build out API, Flux loop, and components for:
  - [ ] Collection CRUD
  - [ ] adding photos requires a notebook
  - [ ] moving notes to a different notebook
  - [ ] viewing notes by notebook
- Use CSS to style new views


### Phase 6: Tags (1 day)

**Objective:** Photos/collections can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for photos
  - [ ] adding tags to photos
  - [ ] creating tags while adding to photos
  - [ ] searching photos by tag
- [ ] Style new elements


### Phase 7: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)

- [ ] Enable purchasing of full quality photos
- [ ] Users can comment and like on photos and collections
- [ ] Add a watermark to uploaded photos if users choose to.
- [ ] Images belong to categories as well as
- [ ] Pagination / infinite scroll for Photos Index
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md