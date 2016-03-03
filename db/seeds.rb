# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: "test@email.com", password: "password", username: "vinny");
User.create!(email: "test2@email.com", password: "password", username: "test");

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
  "http://i.imgur.com/mUahqUu.jpg",
  "https://farm2.staticflickr.com/1715/24095017555_2458b2270c_b.jpg",
  "http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s04_130921483988443532/main_1500.jpg",
  "http://i.imgur.com/qFFh3YV.jpg",
  "https://c1.staticflickr.com/9/8611/16457479519_71367787fa_o.jpg",
  "http://i.imgur.com/M1n9KtF.jpg",
  "https://farm8.staticflickr.com/7471/15600704708_2b0066defa_o.jpg",
  "http://i.imgur.com/2GmDJD1.jpg?1",
  "http://i.imgur.com/9lDdLYR.jpg",
  "https://c2.staticflickr.com/8/7170/6837511573_b36f2798ea_b.jpg",
  "http://i.imgur.com/KFuI29B.jpg",
  "https://c1.staticflickr.com/9/8460/7958523808_02ce5acaf9_b.jpg",
  "http://proof.nationalgeographic.com/files/2015/07/prod-yourshot-345431-6054565.jpg"
]

tags = [
  "landscape",
  "fun",
  "photo",
  "minimal",
  "cool",
  "scenery",
  "mountain",
  "girl",
]

tags.length.times do |i|
  Tag.create!(title: tags[i])
end

22.times do |i|
  user_id = (1..2).to_a.sample
  p = Photo.create!(url: imageURLs[i], user_id: user_id, title: Faker::Hipster.word)
  p.tag_ids = (1..8).to_a.sample(3)
end

a = Collection.create!(title: "Favorites", user_id: 1)
a.photo_ids = (1..21).to_a.sample(5)

b = Collection.create!(title: "Favorites", user_id: 2)
b.photo_ids = (1..21).to_a.sample(8)



