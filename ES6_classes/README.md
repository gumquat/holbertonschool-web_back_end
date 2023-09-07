<h1 align="center">Hi 👋, I'm Evan Newman</h1>
<h3 align="center">A passionate frontend developer from Oklahoma</h3>

- 🔭 I’m currently working on [Full Stack Web Development](https://github.com/gumquat)

- 🌱 I’m currently learning **at Holberton School Tulsa**

- 🤝 I’m looking for help with **software to improve lives**

- 👨‍💻 All of my projects are available at [https://github.com/gumquat](https://github.com/gumquat)

- 💬 Ask me about **anything! I'm open to talk.**

- 📫 How to reach me **gumquat@gmail.com**

- ⚡ Fun fact **I NEED 2 monitors to function.**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/evan newman" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="evan newman" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.blender.org/" target="_blank" rel="noreferrer"> <img src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="blender" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://www.cockroachlabs.com/product/cockroachdb/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/cockroachdb.svg" alt="cockroachdb" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://gulpjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" alt="gulp" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a> <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/> </a> <a href="https://unity.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width="40" height="40"/> </a> <a href="https://unrealengine.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg" alt="unreal" width="40" height="40"/> </a> </p>

# PROBLEM SOLUTIONS
## problem 0
```
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
```
* Declare a class named ClassRoom using the class keyword.
* Define a constructor method within the class to initialize the maxStudentsSize attribute.
* Assign the value of the maxStudentsSize parameter to the _maxStudentsSize attribute.
* Export the ClassRoom class using the export default statement.

## problem 1
```
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];

  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  rooms.push(room1, room2, room3);

  return rooms;
}
```
* ClassRoom is the name of the class that you want to import.
* ./0-classroom is the relative path to the file where the ClassRoom class is defined. Make sure to adjust the path according to your project's file structure.
* Import the ClassRoom class using the import statement.
* Create an array literal rooms to store the ClassRoom objects.
* Create three instances of the ClassRoom class using the new keyword and pass the desired sizes as arguments.
* Push each instance into the rooms array.
* Return the rooms array.

## problem 2
```
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    this._students = value;
  }
}
```
* The HolbertonCourse class accepts three parameters (name, length, and students) in its constructor.
* The constructor checks the type of each parameter and throws a TypeError if the type is not as expected.
* The name, length, and students parameters are assigned to the corresponding underscore attributes (_name, _length, and _students).
* Getter methods (get) are implemented for each attribute to retrieve their values.
* Setter methods (set) are implemented for each attribute to set new values. The setter methods also perform type checking before assigning the new values.

## problem 3
```
export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
```
* The Currency class accepts two parameters (code and name) in its constructor.
* The constructor checks the type of each parameter and throws a TypeError if the type is not as expected.
* The code and name parameters are assigned to the corresponding underscore attributes (_code and _name).
* Getter methods (get) are implemented for each attribute to retrieve their values.
* Setter methods (set) are implemented for each attribute to set new values. The setter methods also perform type checking before assigning the new values.
* The displayFullCurrency method returns the attributes in the specified format (name (code)).

## problem 4
```
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Expected an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Expected an instance of Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
```
* The code begins with an import statement: import Currency from './3-currency';. This imports the Currency class from the file 3-currency.js (or 3-currency.ts if it's a TypeScript file) located in the same directory as the current file. The Currency class is used as a type in the constructor and setter methods of the Pricing class.
* The class Pricing is defined using the export default syntax, which means it can be imported and used in other files. The class has the following members:
* Constructor: The constructor method takes two parameters: amount and currency. It checks the type of amount and throws a TypeError if it's not a number. It also checks if currency is an instance of the Currency class and throws a TypeError if it's not. The constructor assigns the values of amount and currency to the corresponding underscore attributes (_amount and _currency).
* Getter and Setter Methods: The class defines getter and setter methods for the amount and currency attributes. The getter methods (get) return the values of the corresponding underscore attributes. The setter methods (set) update the values of the underscore attributes with new values.
* displayFullPrice Method: This method returns a formatted string that represents the full price. It uses string interpolation to combine the values of _amount, _currency.name, and _currency.code in the specified format.
* Static convertPrice Method: This static method accepts two arguments (amount and conversionRate) and returns the result of multiplying the amount by the conversionRate.
* The code assumes that there is a separate file named 3-currency.js (or 3-currency.ts) in the same directory that exports the Currency class. The Currency class is used as a type in the constructor and setter methods of the Pricing class to ensure that the currency parameter is an instance of the Currency class.

## problem 5
```
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
```
* The Building class has a constructor that takes a parameter sqft.
* Inside the constructor, there is a condition that checks if the constructor is being called from a subclass (i.e., this.constructor !== Building) and if the subclass does not have a property evacuationWarningMessage.
* If the condition is true, it throws an error with the message "Class extending Building must override evacuationWarningMessage".
* If the condition is false, it assigns the sqft parameter to the instance property _sqft.
* The class also has a getter method sqft that returns the value of the _sqft property.
* The purpose of this code is to ensure that any subclass of the Building class must override the evacuationWarningMessage property, otherwise, an error will be thrown.

## problem 6
```
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
```
* The SkyHighBuilding class has a constructor that takes two parameters, sqft and floors.
* Inside the constructor, the super(sqft) statement is used to call the constructor of the Building class, passing the sqft parameter. This initializes the sqft property of the Building class.
* The floors parameter is assigned to the instance property _floors.
* The class also has a getter method floors that returns the value of the _floors property.
* The evacuationWarningMessage method is defined in the SkyHighBuilding class. It returns a string that includes the number of floors.
* The SkyHighBuilding class extends the Building class, inheriting its properties and methods. It adds a new property (floors) and a new method (evacuationWarningMessage).

## problem 7
```
export default class Airport {
  constructor (name, code) {
    if (typeof name !== 'string') {
      throw new TypeError ('Expected a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError ('Expected string');
    }
    
    this._name = name;
    this._code = code;
  }

    toString() {
      return `[object ${this._code}]`;
    }
}
```
* The Airport class has a constructor that takes two parameters: name and code.
* Inside the constructor, there are two conditional statements that check the types of the name and code parameters using the typeof operator.
* If the name parameter is not of type string, it throws a TypeError with the message "Expected a string".
* If the code parameter is not of type string, it throws a TypeError with the message "Expected string".
* If both parameters pass the type checks, the name and code parameters are stored in underscored attribute versions, _name and _code.
* The toString method is defined in the Airport class. It returns a string that represents the object, using the _code attribute.
* This code ensures that the name and code parameters passed to the Airport constructor are of type string. If either of them is not a string, a TypeError is thrown, indicating the expected type.

## problem 8
```
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
```
* Create the HolbertonClass with the specified constructor attributes: size (Number) and location (String).
* Store the attributes in underscored attribute versions (_size and _location).
* Implement the conversion to a Number by overriding the valueOf method. This method should return the value of the _size attribute.
* Implement the conversion to a String by overriding the toString method. This method should return the value of the _location attribute.
* By overriding the valueOf method, when an instance of HolbertonClass is cast into a Number, it will return the value of the _size attribute. Similarly, by overriding the toString method, when an instance of HolbertonClass is cast into a String, it will return the value of the _location attribute.