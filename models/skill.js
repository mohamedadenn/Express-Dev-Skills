const skills = [
    { id: 1, skillType: 'Javascript', done: true },
    { id: 2, skillType: 'CSS', done: false },
    { id: 3, skillType: 'HTML', done: false }
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skills => skills.id === parseInt(id));
}