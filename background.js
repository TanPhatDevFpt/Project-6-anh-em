export function background(list_hero1,list_hero2,list_hero3,list_hero4,list_hero5,background_hero){
    list_hero1.addEventListener("click", ()=>{
  background_hero.classList.add("action");
  list_hero1.classList.add("img1");
  list_hero5.classList.remove("img5");
  list_hero4.classList.remove("img4");
  list_hero3.classList.remove("img3");
  list_hero2.classList.remove("img2");
  background_hero.classList.remove("arhur");
  background_hero.classList.remove("trieuvan");
  background_hero.classList.remove("aya");
  background_hero.classList.remove("valhein");
});

list_hero2.addEventListener("click", ()=>{
  background_hero.classList.add("valhein");
  list_hero2.classList.add("img2");
  list_hero5.classList.remove("img5");
  list_hero4.classList.remove("img4");
  list_hero3.classList.remove("img3");
  list_hero1.classList.remove("img1");
  background_hero.classList.remove("arhur");
  background_hero.classList.remove("trieuvan");
  background_hero.classList.remove("aya");
  background_hero.classList.remove("action");
});

list_hero3.addEventListener("click", ()=>{
  background_hero.classList.add("aya");
  list_hero3.classList.add("img3");
  list_hero5.classList.remove("img5");
  list_hero4.classList.remove("img4");
  list_hero2.classList.remove("img2");
  list_hero1.classList.remove("img1");
  background_hero.classList.remove("valhein");
  background_hero.classList.remove("trieuvan");
  background_hero.classList.remove("action");
});

list_hero4.addEventListener("click", ()=>{
  background_hero.classList.add("trieuvan");
  list_hero4.classList.add("img4");
  list_hero5.classList.remove("img5");
  list_hero3.classList.remove("img3");
  list_hero2.classList.remove("img2");
  list_hero1.classList.remove("img1");
  background_hero.classList.remove("arhur");
  background_hero.classList.remove("aya");
  background_hero.classList.remove("valhein");
  background_hero.classList.remove("action");
});

list_hero5.addEventListener("click", ()=>{
  background_hero.classList.add("arhur");
  list_hero5.classList.add("img5");
  list_hero4.classList.remove("img4");
  list_hero3.classList.remove("img3");
  list_hero2.classList.remove("img2");
  list_hero1.classList.remove("img1");
  background_hero.classList.remove("trieuvan");
  background_hero.classList.remove("aya");
  background_hero.classList.remove("valhein");
  background_hero.classList.remove("action");
});
}