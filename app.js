const url = 'https://randomuser.me/api/?results=1,nat=us';


//capitalizes first letter of every word;
function capFirstLetter (word) {
  word = word.split(' ');
  for (let i = 0, x = word.length; i < x; i++) {
    word[i] = `${word[i][0].toUpperCase()}${word[i].substr(1)}`;
  }
  return word.join(' ');
}

 fetch(url)
.then(res => res.json())
.then(data => {
  const person = data.results[0];
  const fullName = capFirstLetter(`${person.name.first} ${person.name.last}`);
  const pic = person.picture.medium;
  const ages = person.dob.age;
  const cities = capFirstLetter(person.location.city);
  const states = capFirstLetter(person.location.state);

  const image = new Image(70, 70);
  image.src = pic;

  const name = document.querySelector('.name');
  const city = document.querySelector('.city');
  const state = document.querySelector('.state');
  const age = document.querySelector('.age');
  const picture = document.querySelector('.images')

  name.innerHTML = fullName;
  city.innerHTML = cities;
  state.innerHTML = states;
  age.innerHTML = ages;
  picture.appendChild(image);
})
.catch(error => console.log(error));
