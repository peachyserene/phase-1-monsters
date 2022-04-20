document.addEventListener("DOMContentLoaded", () => {
  let webSource = fetch("http://localhost:3000/monsters/?_limit=50&_page=2")
    .then((resp) => resp.json())
    .then((data) => showMonsters(data));

  let monsterContainer = document.getElementById("monster-container");
  function showMonsters(data) {
    data.forEach((monster) => {
      let newMonster = document.createElement("div");
      newMonster.id = monster.id;
      let monsterName = document.createElement("div");
      monsterName.textContent = monster.name;
      let monsterAge = document.createElement("div");
      monsterAge.textContent = monster.age;
      let monsterDesc = document.createElement("div");
      monsterDesc.textContent = monster.description;
      monsterContainer.appendChild(newMonster);
      newMonster.appendChild(monsterName);
      newMonster.appendChild(monsterAge);
      newMonster.appendChild(monsterDesc);
    });
  }

  let addMonsterForm = document.getElementById("create-monster");
  addMonsterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    monsterAdder();
  });
  function monsterAdder() {
    let newMonsterCont = document.createElement("div");

    let newNameCont = document.createElement("div");
    let nameEntry = document.getElementById("name");
    newNameCont.textContent = nameEntry.value;

    let newAgeCont = document.createElement("div");
    let ageEntry = document.getElementById("age");
    newAgeCont.textContent = ageEntry.value;

    let newbioCont = document.createElement("div");
    let bioEntry = document.getElementById("bio");
    newbioCont.textContent = bioEntry.value;

    monsterContainer.prepend(newMonsterCont);
    newMonsterCont.appendChild(newNameCont);
    newMonsterCont.appendChild(newAgeCont);
    newMonsterCont.appendChild(newbioCont);
  }
  let fButton = document.getElementById("forward");
  fButton.addEventListener("click", (e) => {
    i = 1;
    i++;
    webSource = fetch(`http://localhost:3000/monsters/?_limit=50&_page=${i}`);
    location.reload();
  });

  let bButton = document.getElementById("back");
  bButton.addEventListener("click", (e) => {
    i = 1;
    i--;
    webSource = fetch(`http://localhost:3000/monsters/?_limit=50&_page=${i}`);
    location.reload();
  });
});

/*- When the page loads, show the first 50 monsters. Each monster's name, age, and
  description should be shown.
- Above your list of monsters, you should have a form to create a new monster.
  You should have fields for name, age, and description, and a 'Create Monster
  Button'. When you click the button, the monster should be added to the list
  and saved in the API.
- At the end of the list of monsters, show a button. When clicked, the button
  should load the next 50 monsters and show them.*/
