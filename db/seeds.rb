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
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661062/NationalGeographic_1203310_zrgfit.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661075/150501-bestpod-volcANO_xgdcma.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661089/20664938416_4e4b224684_h_n2ifi6.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661105/bcvSSgM_odg9sb.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661116/1SHZTmz_ggwsom.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661123/yK3VDgP_eyxzz9.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661141/16493978338_14fd41834b_k_fliej8.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661131/aszTgRJ_gmqeca.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661150/KuuXhnf_iab4q8.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661159/mUahqUu_vmpyjy.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661170/24095017555_2458b2270c_b_iyvp2s.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661178/main_1500_llkyb9.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661188/qFFh3YV_uoziuk.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661200/16457479519_71367787fa_o_zpxhhe.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661208/M1n9KtF_clbtz8.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661217/15600704708_2b0066defa_o_yc1rwp.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661225/2GmDJD1_molqyz.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661234/9lDdLYR_eeddqc.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661242/6837511573_b36f2798ea_b_qwwxna.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661254/KFuI29B_rp0bm9.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661262/7958523808_02ce5acaf9_b_e049dq.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661270/prod-yourshot-345431-6054565_rywv0c.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661278/photo-1447877085163-3cce903855cd_qfipfc.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661288/photo-1453282716202-de94e528067c_mtrksq.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661298/photo-1442473483905-95eb436675f1_vmfnrv.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661308/photo-1440589473619-3cde28941638_nxjjsh.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661318/photo-1453743327117-664e2bf4e951_cvb6rz.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661327/photo-1452800185063-6db5e12b8e2e_gif9lw.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661336/photo-1452716726610-30ed68426a6b_lkgfig.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661346/photo-1451188502541-13943edb6acb_zdu9qo.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661355/photo-1451337516015-6b6e9a44a8a3_sitza8.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661364/photo-1443890484047-5eaa67d1d630_vs2gpb.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661372/photo-1448518184296-a22facb4446f_lzeaq6.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661388/photo-1451186859696-371d9477be93_xjz2dz.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661401/photo-1448960968772-b63b3f40dfc1_b9jiet.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661406/BymaSga_k6zhri.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661414/OIOOtKc_ez9whd.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661421/Wb1t8wP_dzerkk.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661428/y3PuWIf_r6xeeu.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661435/YBX6uEG_wpfcjy.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661443/fZx1Sct_mpaqvk.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661450/OmHviNk_fwas4y.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661457/HOSg2FC_xbmxo9.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661467/surfer-summer_dqrr1e.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661476/STEVE-McQUEEN_pbuhmo.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661482/Attractive-Man_dpufor.jpg",
  "http://res.cloudinary.com/dpxg23zze/image/upload/v1457661490/landscape_nrm_1420743157-bond_dop2ob.jpg"
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
  p = Photo.create!(url: imageURLs[i], user_id: user_id, title: Faker::Book.title)
  p.tag_ids = (1..15).to_a.sample(4)
end

10.times do |i|
  a = Collection.create!(title: "Favorites", user_id: i+1)
  length = imageURLs.length
  a.photo_ids = (1..length).to_a.sample(10)
end


80.times do |i|
  val = i % comments.length
  comment = comments[val]
  photo_id = (1..imageURLs.length).to_a.sample
  user_id = (1..11).to_a.sample
  Comment.create!(content: comment, photo_id: photo_id, user_id: user_id)
end


