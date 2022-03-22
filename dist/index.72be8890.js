const store = {
    todos: [
        {
            id: 1,
            title: 'Feed cat',
            time: '18-02-2022',
        },
        {
            id: 2,
            title: 'Create workshop assignment',
            time: '18-02-2022',
        },
    ],
    user: {
        name: 'David',
        profileImageSrc:
            'https://media-exp1.licdn.com/dms/image/C4E03AQEc-_IeGQYaLA/profile-displayphoto-shrink_400_400/0/1517454647694?e=1652313600&v=beta&t=9ihhjWg-BUoEVdUebwfCZZq9ys4e0_R5rAySBgM_1AM',
    },
}
// State updating logic
function updateUserName(newName) {
    store.user.name = newName
} // State retrieve default list

//# sourceMappingURL=index.72be8890.js.map
