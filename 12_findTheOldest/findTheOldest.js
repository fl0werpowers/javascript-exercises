const findTheOldest = (people) => {
	const personAge = (person) => {
		return person.yearOfDeath
			? person.yearOfDeath - person.yearOfBirth
			: new Date().getFullYear() - person.yearOfBirth;
	};
	return people.sort((person1, person2) =>
		personAge(person1) > personAge(person2) ? -1 : 1,
	)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
