function pelnoletni(users) {
    return users.filter(user => user.age >= 18);
}

console.log(pelnoletni(users));