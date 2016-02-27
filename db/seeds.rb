# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: "test@email.com", password: "password");
User.create!(email: "test2@email.com", password: "password");

Collection.create!(title: Faker::Book.genre, user_id: 1)
Collection.create!(title: Faker::Book.genre, user_id: 2)

imageURLs = [
  "http://proof.nationalgeographic.com/files/2015/07/NationalGeographic_1203310.jpg",
  "http://proof.nationalgeographic.com/files/2015/04/150501-bestpod-volcANO.jpg",
  "https://farm1.staticflickr.com/691/20664938416_4e4b224684_h.jpg",
  "http://i.imgur.com/bcvSSgM.jpg",
  "http://i.imgur.com/1SHZTmz.jpg",
  "http://i.imgur.com/yK3VDgP.jpg",
  "http://i.imgur.com/aszTgRJ.jpg",
  "https://c1.staticflickr.com/9/8668/16493978338_14fd41834b_k.jpg",
  "http://i.imgur.com/KuuXhnf.jpg",
  "http://i.imgur.com/mUahqUu.jpg"
]

10.times do |i|
  user_id = (1..2).to_a.sample
  Photo.create(url: imageURLs[i], user_id: user_id, title: Faker::Hipster.word)
end
