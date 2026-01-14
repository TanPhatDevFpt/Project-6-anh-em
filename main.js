const background_hero = document.querySelector(".hero-main");
const name_hero_1 = document.querySelector(".name-hero");
const name_hero_2 = document.querySelector(".name-hero-hidden2");
const name_hero_3 = document.querySelector(".name-hero-hidden3");
const name_hero_4 = document.querySelector(".name-hero-hidden4");
const name_hero_5 = document.querySelector(".name-hero-hidden5");
const hero_position = document.querySelector(".hero-role");
const list_hero1 = document.querySelector(".hero-1");
const list_hero2 = document.querySelector(".hero-2");
const list_hero3 = document.querySelector(".hero-3");
const list_hero4 = document.querySelector(".hero-4");
const list_hero5 = document.querySelector(".hero-5");
const position_hero1 = document.querySelector(".hero-role-action");
const position_hero2 = document.querySelector(".hero-role-position-2-");
const position_hero3 = document.querySelector(".hero-role-position-3-");
const position_hero4 = document.querySelector(".hero-role-position-4-");
const position_hero5 = document.querySelector(".hero-role-position-5-");

import { name_hero } from "./name-hero.js";
name_hero(list_hero1,list_hero2,list_hero3,list_hero4,list_hero5,name_hero_1,name_hero_2,name_hero_3,name_hero_4,name_hero_5);
import {background} from "./background.js";
background(list_hero1,list_hero2,list_hero3,list_hero4,list_hero5,background_hero);
import { position_hero } from "./position-hero.js";
position_hero(list_hero1,list_hero2,list_hero3,list_hero4,list_hero5,position_hero1,position_hero2,position_hero3,position_hero4,position_hero5);

// slider
const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 3000);
//end slider
