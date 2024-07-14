// sections 
const buttonBeef = document.getElementById("btn-beef-burger");
const buttonChicken = document.getElementById("btn-chicken-burger");
const buttonMeals = document.getElementById("btn-meals");
const buttonAppetizers = document.getElementById("btn-appetizers");

const sectionBeef = document.getElementById("beef-burgers");
const sectionChicken = document.getElementById("chicken-burgers");
const sectionMeals = document.getElementById("meals");
const sectionAppetizers = document.getElementById("appetizers");

const openSection = (section) => {
	sectionBeef.style.display = section === "beef" ? "grid" : "none";
	sectionChicken.style.display = section === "chicken" ? "grid" : "none";
	sectionMeals.style.display = section === "meals" ? "grid" : "none";
	sectionAppetizers.style.display = section === "appetizers" ? "grid" : "none";
	
	buttonBeef.className = section === "beef" ? "selected" : "";
	buttonChicken.className = section === "chicken" ? "selected" : "";
	buttonMeals.className = section === "meals" ? "selected" : "";
	buttonAppetizers.className = section === "appetizers" ? "selected" : "";
}

openSection("beef");

buttonBeef.addEventListener("click", () => openSection("beef"));
buttonChicken.addEventListener("click", () => openSection("chicken"));
buttonMeals.addEventListener("click", () => openSection("meals"));
buttonAppetizers.addEventListener("click", () => openSection("appetizers"));
