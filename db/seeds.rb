# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: "test@email.com", password: "password", username: "Vinny");
User.create!(email: "test2@email.com", password: "password", username: "Jon");
User.create!(email: "sample@email.com", password: "password", username: "sample")
User.create!(email: "test3@email.com", password: "password", username: "Sarah");
User.create!(email: "test4@email.com", password: "password", username: "Ethan");
User.create!(email: "test5@email.com", password: "password", username: "Ian");
User.create!(email: "test6@email.com", password: "password", username: "Hailey");
User.create!(email: "test7@email.com", password: "password", username: "Alex");
User.create!(email: "test8@email.com", password: "password", username: "Matt");
User.create!(email: "test9@email.com", password: "password", username: "MK");
User.create!(email: "test10@email.com", password: "password", username: "Sara");

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
  "http://proof.nationalgeographic.com/files/2015/07/prod-yourshot-345431-6054565.jpg",
  "https://images.unsplash.com/photo-1447877085163-3cce903855cd?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1453282716202-de94e528067c?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1442473483905-95eb436675f1?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1440589473619-3cde28941638?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1453743327117-664e2bf4e951?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1452800185063-6db5e12b8e2e?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1452716726610-30ed68426a6b?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1448518184296-a22facb4446f?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1451186859696-371d9477be93?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "https://images.unsplash.com/photo-1448960968772-b63b3f40dfc1?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1025",
  "http://i.imgur.com/BymaSga.jpg",
  "http://i.imgur.com/OIOOtKc.jpg",
  "http://i.imgur.com/Wb1t8wP.jpg",
  "http://i.imgur.com/y3PuWIf.jpg",
  "http://i.imgur.com/YBX6uEG.jpg?1",
  "http://i.imgur.com/fZx1Sct.jpg",
  "https://i.imgur.com/OmHviNk.jpg",
  "http://i.imgur.com/HOSg2FC.jpg",
  "http://www.mrwallpaper.com/wallpapers/surfer-summer.jpg",
  "http://echoba.se/wp-content/uploads/2015/10/STEVE-McQUEEN.jpg",
  "http://photo.elsoar.com/wp-content/images/Attractive-Man.jpg",
  "http://cos.h-cdn.co/assets/15/02/1600x800/landscape_nrm_1420743157-bond.jpg"
]

imageURLs.shuffle!

tags = [
  "landscape",
  "fun",
  "photo",
  "minimal",
  "cool",
  "scenery",
  "mountain",
  "girl",
  "sick",
  "sunset",
  "city",
  "adult",
  "wonderful",
  "amazing",
  "awesome"
]

comments = [
  "Great photo!",
  "What kind of camera did you use?",
  "Awesome!",
  "Wow!",
  "Really nice shot",
  "Where did you take this?",
  "Beautiful",
  "Keep these kind of photos coming!",
  "You really have talent",
  "Can you tell me what kind of lens you used?",
  "This is amazing!",
  "Keep it up!",
  "I need to get a shot like this",
  "Perfectly framed",
  "Awesome coloring!",
  "Was this on with the f-stop at 1.8?",
  "What ISO was this?",
  "You gotta teach me the ways!",
  "How did you get that color?",
  "The focus is perfectly done",
  "Beautiful photo",
  "Holy crap! Awesome!",
  "How did you get this shot!?",
  "Stunning"
]

tags.length.times do |i|
  Tag.create!(title: tags[i])
end

imageURLs.length.times do |i|
  user_id = (1..11).to_a.sample
  p = Photo.create!(url: imageURLs[i], user_id: user_id, title: Faker::Hipster.word)
  p.tag_ids = (1..8).to_a.sample(3)
end

10.times do |i|
  a = Collection.create!(title: "Favorites", user_id: i+1)
  length = imageURLs.length
  a.photo_ids = (1..length).to_a.sample(6)
end


80.times do |i|
  val = i % comments.length
  comment = comments[val]
  photo_id = (1..imageURLs.length).to_a.sample
  user_id = (1..11).to_a.sample
  Comment.create!(content: comment, photo_id: photo_id, user_id: user_id)
end


